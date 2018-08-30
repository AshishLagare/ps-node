"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var server = app_1.default.listen(3770, function () {
    console.log("Server is started successfully on port number 3770");
});
exports.default = server;
