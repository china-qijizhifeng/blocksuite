export class AIDocLogic {
    constructor(getHost) {
        this.getHost = getHost;
    }
    get host() {
        return this.getHost();
    }
}
//# sourceMappingURL=logic.js.map