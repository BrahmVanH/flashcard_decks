"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDeck = exports.createDeck = exports.getDeckById = exports.getDecks = void 0;
const getDecks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('/api/decks/get/', {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch decks: ${response.statusText}`);
        }
        return response;
    }
    catch (err) {
        console.error({ message: 'There was an error in fetching decks: ', err });
        throw err;
    }
});
exports.getDecks = getDecks;
const getDeckById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('/api/decks/get/:id', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch deck: ${response.statusText}`);
        }
        return response;
    }
    catch (err) {
        console.error({ message: "There was an error in fetching decks by ID: ", err });
        throw err;
    }
});
exports.getDeckById = getDeckById;
const createDeck = (newDeck) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('/api/decks/create/:newDeck', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDeck),
        });
        if (!response.ok) {
            throw new Error(`Failed to create deck: ${response.statusText}`);
        }
        return response;
    }
    catch (err) {
        console.error({
            message: 'There was an error in creating a new Deck: ',
            err,
        });
        throw err;
    }
});
exports.createDeck = createDeck;
const deleteDeck = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('/api/decks/delete/:id', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
        });
        if (!response.ok) {
            throw new Error(`Failed to delete deck: ${response.statusText}`);
        }
        return response;
    }
    catch (err) {
        console.error({
            message: 'There was an error in deleting a Deck: ',
            err,
        });
        throw err;
    }
});
exports.deleteDeck = deleteDeck;
