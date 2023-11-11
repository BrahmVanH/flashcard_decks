"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const gsap_1 = __importDefault(require("gsap"));
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
    const main = (0, react_1.useRef)(null);
    const triggerCardAnimation = () => {
        let ctx = gsap_1.default.context(() => {
            let tl = gsap_1.default.timeline();
            tl.fromTo('#flashcard', { y: 500, x: 0, scale: 0.98 }, {
                y: -5,
                x: 0,
                scale: 0.98,
                ease: 'expoScale(0.1, 1, power2.in)',
                duration: 1.5,
            });
            tl.to('#flashcard', {
                y: 0,
                x: 0,
                ease: 'expoScale(0.1, 1, power2.in)',
                scale: 1,
                duration: 2,
            });
        }, main);
        return () => ctx.revert();
    };
    const triggerShadowAnimation = () => {
        let ctx = gsap_1.default.context(() => {
            let tl = gsap_1.default.timeline();
            tl.set('#shadow', {
                opacity: 0.50,
                scale: 1.5,
            });
            tl.fromTo('#shadow', {
                y: -4,
                ease: 'expoScale(0.1, 1, power2.in)',
                scale: 1.5,
                opacity: 1
            }, { y: 32, ease: 'expoScale(0.1, 1, power2.in)', scale: 0.8, duration: 1.5, opacity: 0.90 });
            tl.to('#shadow', {
                y: 30,
                scale: 1,
                ease: 'expoScale(0.1, 1, power2.in)',
                duration: 2,
                opacity: 1
            });
        });
        return () => ctx.revert();
    };
    (0, react_1.useLayoutEffect)(() => {
        triggerCardAnimation();
        triggerShadowAnimation();
    }, []);
    return (react_1.default.createElement("div", { ref: main, className: "home-container" },
        react_1.default.createElement("div", { className: "background-container-upper" }),
        react_1.default.createElement("div", { className: "flashcard-container" }, flashcardContent.map((flashcard) => (react_1.default.createElement(Flashcard_1.default, { key: flashcard.prompt, title: flashcard.title, prompt: flashcard.prompt, solution: flashcard.solution })))),
        react_1.default.createElement("div", { className: "shadow-container" },
            react_1.default.createElement("div", { id: 'shadow', className: "shadow" })),
        react_1.default.createElement("div", { className: "background-container-lower" })));
}
exports.default = Home;
