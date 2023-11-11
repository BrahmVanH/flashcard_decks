"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Flashcard_1 = __importDefault(require("../components/Flashcard"));
require("./Home.css");
function Home() {
    const flashcardContent = [
        {
            title: 'Calculus',
            prompt: 'd/dx (arcsin(x))',
            solution: '1/sqrt(1-x^2)',
        },
        // {
        // 	title: 'Calculus',
        // 	prompt: 'd/dx (arccos(x))',
        // 	solution: '-(1/sqrt(1-x^2))',
        // },
        // {
        // 	title: 'Calculus',
        // 	prompt: 'd/dx (arctan(x))',
        // 	solution: '1/1+x^2',
        // },
    ];
    return (react_1.default.createElement("div", { className: "home-container" },
        react_1.default.createElement("div", { className: "flashcard-container" }, flashcardContent.map((flashcard) => (react_1.default.createElement(Flashcard_1.default, { key: flashcard.prompt, title: flashcard.title, prompt: flashcard.prompt, solution: flashcard.solution }))))));
}
exports.default = Home;
