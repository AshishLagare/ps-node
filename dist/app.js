"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var middlewares_1 = __importDefault(require("./config/middlewares/middlewares"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.config();
    }
    App.prototype.config = function () {
        this.app.use(middlewares_1.default.configuration);
    };
    return App;
}());
// app.get('/' , (req , res)=>{
//     res.send("Welcome To Node With TypeScript Simple Version");
// });
exports.default = new App().app;
