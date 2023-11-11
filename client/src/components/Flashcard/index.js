"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const gr_1 = require("react-icons/gr");
const go_1 = require("react-icons/go");
require("./style.css");
function Flashcard(props) {
    const { title, prompt, solution } = props;
    return (react_1.default.createElement("div", { id: "flashcard", className: "flashcard col-lg-3 col-md-5 col-sm-11" },
        react_1.default.createElement("div", { className: "flashcard-header" },
            react_1.default.createElement("h3", null, title)),
        react_1.default.createElement("div", { className: "flashcard-content-container" },
            react_1.default.createElement("div", { className: "flashcard-prompt-container" },
                react_1.default.createElement("p", null, prompt)),
            react_1.default.createElement("div", { className: "flashcard-solution-container" },
                react_1.default.createElement("p", null, solution))),
        react_1.default.createElement("div", { className: "flashcard-footer" },
            react_1.default.createElement("button", { className: "prev-card-btn" },
                react_1.default.createElement(gr_1.GrPrevious, null)),
            react_1.default.createElement("button", { className: "show-solution-btn" },
                react_1.default.createElement(go_1.GoLightBulb, null)),
            react_1.default.createElement("p", null, "1/20"),
            react_1.default.createElement("button", { className: "next-card-btn" },
                react_1.default.createElement(gr_1.GrNext, null)))));
}
exports.default = Flashcard;
