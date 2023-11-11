"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const Home_1 = __importDefault(require("./pages/Home"));
require("bootstrap/dist/css/bootstrap.min.css");
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(Home_1.default, null)));
}
exports.default = App;
