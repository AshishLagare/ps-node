"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var StudentController_1 = __importDefault(require("../controllers/StudentController"));
var router = express_1.default.Router();
var StudentRouters = /** @class */ (function () {
    function StudentRouters() {
        this.studentcontroller = new StudentController_1.default();
    }
    Object.defineProperty(StudentRouters.prototype, "routes", {
        get: function () {
            router.get('/student/all', this.studentcontroller.getAll);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return StudentRouters;
}());
module.exports = StudentRouters;
