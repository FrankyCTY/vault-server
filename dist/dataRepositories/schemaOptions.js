"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchemaBaseOptions = void 0;
const getSchemaBaseOptions = () => ({
    toObject: {
        getters: true,
        versionKey: false,
        transform(_, _a) {
            var { _id } = _a, ret = __rest(_a, ["_id"]);
            return Object.assign({ id: _id }, ret);
        },
    },
});
exports.getSchemaBaseOptions = getSchemaBaseOptions;
//# sourceMappingURL=schemaOptions.js.map