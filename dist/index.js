"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const mongoose_1 = __importDefault(require("mongoose"));
const koa_1 = __importDefault(require("koa"));
const router_1 = __importDefault(require("@koa/router"));
const { foreach } = require('@frankycty/ramda-extra');
const CONFIG = require('config');
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = new koa_1.default();
    const connectionOpts = {
        promiseLibrary: global.Promise,
        poolSize: 25,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    };
    yield mongoose_1.default.connect(CONFIG.db.uri, connectionOpts);
    const koaRouter = new router_1.default();
    const routes = [
        {
            method: 'get',
            path: '/',
            handler: (ctx, _) => {
                ctx.body = {
                    status: 'success',
                };
            },
        },
    ];
    const registerKoaRoutes = (koaRouter, routes) => {
        foreach(({ method, path, handler }) => {
            koaRouter[method].call(koaRouter, path, handler);
        }, routes);
    };
    registerKoaRoutes(koaRouter, routes);
    app.use(koaRouter.routes());
    app.listen(CONFIG.server.port, () => {
        console.log(`server started on localhost: ${CONFIG.server.port}`);
    });
});
main();
//# sourceMappingURL=index.js.map