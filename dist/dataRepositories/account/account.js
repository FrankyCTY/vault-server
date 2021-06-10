"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemaOptions_1 = require("../schemaOptions");
const { Schema, model } = mongoose_1.default;
const AccountSchema = new Schema({
    accountName: String,
    password: String,
}, schemaOptions_1.getSchemaBaseOptions());
exports.Account = model('Account', AccountSchema);
//# sourceMappingURL=account.js.map