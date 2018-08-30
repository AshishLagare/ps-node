"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var BaseRoutes_1 = __importDefault(require("../../routes/BaseRoutes"));
var Middlewares = /** @class */ (function () {
    function Middlewares() {
    }
    Object.defineProperty(Middlewares, "configuration", {
        get: function () {
            var app = express_1.default();
            app.use(body_parser_1.default.json());
            app.use(new BaseRoutes_1.default().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return Middlewares;
}());
module.exports = Middlewares;
