export var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["DefaultRuntimeError"] = 1] = "DefaultRuntimeError";
    ErrorCode[ErrorCode["ValueNotExists"] = 2] = "ValueNotExists";
    ErrorCode[ErrorCode["ValueNotInstanceOf"] = 3] = "ValueNotInstanceOf";
    ErrorCode[ErrorCode["ValueNotEqual"] = 4] = "ValueNotEqual";
    ErrorCode[ErrorCode["MigrationError"] = 5] = "MigrationError";
    ErrorCode[ErrorCode["SchemaValidateError"] = 6] = "SchemaValidateError";
    // Fatal error should be greater than 10000
    ErrorCode[ErrorCode["DefaultFatalError"] = 10000] = "DefaultFatalError";
})(ErrorCode || (ErrorCode = {}));
//# sourceMappingURL=code.js.map