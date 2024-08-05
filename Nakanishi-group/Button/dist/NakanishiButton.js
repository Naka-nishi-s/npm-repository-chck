"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NakanishiButton = void 0;
const react_1 = __importDefault(require("react"));
const NakanishiButton = ({ type }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("button", { type: type }, "This is Nakanishi-Button")));
};
exports.NakanishiButton = NakanishiButton;
