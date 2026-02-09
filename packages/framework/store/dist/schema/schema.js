import { assertExists } from '@blocksuite/global/utils';
import { minimatch } from 'minimatch';
import { SCHEMA_NOT_FOUND_MESSAGE } from '../consts.js';
import { collectionMigrations, docMigrations } from '../migration/index.js';
import { Block } from '../store/doc/block.js';
import { BlockSchema } from './base.js';
import { MigrationError, SchemaValidateError } from './error.js';
export class Schema {
    constructor() {
        this.flavourSchemaMap = new Map();
        this._upgradeBlockVersions = (rootData) => {
            const meta = rootData.getMap('meta');
            const blockVersions = meta.get('blockVersions');
            if (!blockVersions) {
                return;
            }
            blockVersions.forEach((version, flavour) => {
                const currentSchema = this.flavourSchemaMap.get(flavour);
                if (currentSchema && version !== currentSchema.version) {
                    blockVersions.set(flavour, currentSchema.version);
                }
            });
        };
        this.validate = (flavour, parentFlavour, childFlavours) => {
            const schema = this.flavourSchemaMap.get(flavour);
            assertExists(schema, new SchemaValidateError(flavour, SCHEMA_NOT_FOUND_MESSAGE));
            const validateChildren = () => {
                childFlavours?.forEach(childFlavour => {
                    const childSchema = this.flavourSchemaMap.get(childFlavour);
                    assertExists(childSchema, new SchemaValidateError(childFlavour, SCHEMA_NOT_FOUND_MESSAGE));
                    this.validateSchema(childSchema, schema);
                });
            };
            if (schema.model.role === 'root') {
                if (parentFlavour) {
                    throw new SchemaValidateError(schema.model.flavour, 'Root block cannot have parent.');
                }
                validateChildren();
                return;
            }
            if (!parentFlavour) {
                throw new SchemaValidateError(schema.model.flavour, 'Hub/Content must have parent.');
            }
            const parentSchema = this.flavourSchemaMap.get(parentFlavour);
            assertExists(parentSchema, new SchemaValidateError(parentFlavour, SCHEMA_NOT_FOUND_MESSAGE));
            this.validateSchema(schema, parentSchema);
            validateChildren();
        };
        this.upgradeCollection = (rootData) => {
            this._upgradeBlockVersions(rootData);
            collectionMigrations.forEach(migration => {
                try {
                    if (migration.condition(rootData)) {
                        migration.migrate(rootData);
                    }
                }
                catch (err) {
                    console.error(err);
                    throw new MigrationError(migration.desc);
                }
            });
        };
        this.upgradeDoc = (oldPageVersion, oldBlockVersions, docData) => {
            // block migrations
            const blocks = docData.getMap('blocks');
            Array.from(blocks.values()).forEach(block => {
                const flavour = block.get('sys:flavour');
                const currentVersion = block.get('sys:version') ?? oldBlockVersions[flavour] ?? 0;
                assertExists(currentVersion, `previous version for flavour ${flavour} not found`);
                this.upgradeBlock(flavour, currentVersion, block);
            });
            // doc migrations
            docMigrations.forEach(migration => {
                try {
                    if (migration.condition(oldPageVersion, docData)) {
                        migration.migrate(oldPageVersion, docData);
                    }
                }
                catch (err) {
                    throw new MigrationError(`${migration.desc}
            ${err}`);
                }
            });
        };
        this.upgradeBlock = (flavour, oldVersion, blockData) => {
            try {
                const currentSchema = this.flavourSchemaMap.get(flavour);
                assertExists(currentSchema);
                const { onUpgrade, version } = currentSchema;
                if (!onUpgrade) {
                    return;
                }
                const block = new Block(this, blockData);
                return onUpgrade(block.model, oldVersion, version);
            }
            catch (err) {
                throw new MigrationError(`upgrade block ${flavour} failed.
          ${err}`);
            }
        };
    }
    get versions() {
        return Object.fromEntries(Array.from(this.flavourSchemaMap.values()).map((schema) => [schema.model.flavour, schema.version]));
    }
    _validateRole(child, parent) {
        const childRole = child.model.role;
        const parentRole = parent.model.role;
        const childFlavour = child.model.flavour;
        const parentFlavour = parent.model.flavour;
        if (childRole === 'root') {
            throw new SchemaValidateError(childFlavour, `Root block cannot have parent: ${parentFlavour}.`);
        }
        if (childRole === 'hub' && parentRole === 'content') {
            throw new SchemaValidateError(childFlavour, `Hub block cannot be child of content block: ${parentFlavour}.`);
        }
        if (childRole === 'content' && parentRole === 'root') {
            throw new SchemaValidateError(childFlavour, `Content block can only be child of hub block or itself. But get: ${parentFlavour}.`);
        }
    }
    _matchFlavour(childFlavour, parentFlavour) {
        return (minimatch(childFlavour, parentFlavour) ||
            minimatch(parentFlavour, childFlavour));
    }
    _validateParent(child, parent) {
        const _childFlavour = child.model.flavour;
        const _parentFlavour = parent.model.flavour;
        const childValidFlavours = child.model.parent || ['*'];
        const parentValidFlavours = parent.model.children || ['*'];
        return parentValidFlavours.some(parentValidFlavour => {
            return childValidFlavours.some(childValidFlavour => {
                if (parentValidFlavour === '*' && childValidFlavour === '*') {
                    return true;
                }
                if (parentValidFlavour === '*') {
                    return this._matchFlavour(childValidFlavour, _parentFlavour);
                }
                if (childValidFlavour === '*') {
                    return this._matchFlavour(_childFlavour, parentValidFlavour);
                }
                return (this._matchFlavour(_childFlavour, parentValidFlavour) &&
                    this._matchFlavour(childValidFlavour, _parentFlavour));
            });
        });
    }
    toJSON() {
        return Object.fromEntries(Array.from(this.flavourSchemaMap.values()).map((schema) => [
            schema.model.flavour,
            {
                role: schema.model.role,
                parent: schema.model.parent,
                children: schema.model.children,
            },
        ]));
    }
    register(blockSchema) {
        blockSchema.forEach(schema => {
            BlockSchema.parse(schema);
            this.flavourSchemaMap.set(schema.model.flavour, schema);
        });
        return this;
    }
    validateSchema(child, parent) {
        this._validateRole(child, parent);
        const relationCheckSuccess = this._validateParent(child, parent);
        if (!relationCheckSuccess) {
            throw new SchemaValidateError(child.model.flavour, `Block cannot have parent: ${parent.model.flavour}.`);
        }
    }
}
//# sourceMappingURL=schema.js.map