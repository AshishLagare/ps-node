"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StudentController = /** @class */ (function () {
    function StudentController() {
    }
    StudentController.prototype.create = function (req, res) {
        res.send("Student is created");
    };
    StudentController.prototype.getAll = function (req, res) {
        res.send("Here you can get all contacts");
    };
    return StudentController;
}());
exports.default = StudentController;
