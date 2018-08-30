"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var StudentRoutes_1 = __importDefault(require("./StudentRoutes"));
var app = express_1.default();
var BaseRoutes = /** @class */ (function () {
    function BaseRoutes() {
    }
    Object.defineProperty(BaseRoutes.prototype, "routes", {
        get: function () {
            app.get('/', function (req, res) {
                res.send("Welcome To Node With TypeScript Simple Version");
            });
            app.use("/api/", new StudentRoutes_1.default().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRoutes;
}());
module.exports = BaseRoutes;
