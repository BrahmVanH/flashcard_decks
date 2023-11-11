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
exports.deleteDeck = exports.updateDeck = exports.createDeck = exports.getDeckById = exports.getAllDecks = void 0;
const models_1 = require("../models");
const getAllDecks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decks = yield models_1.Deck.find();
        if (!decks) {
            res.status(404).json({ message: 'No decks found' });
        }
        const decksObj = {
            decks,
        };
        return res.json(decksObj);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.getAllDecks = getAllDecks;
const getDeckById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deck = yield models_1.Deck.findOne({ _id: req.params.id });
        if (!deck) {
            res.status(404).json({ message: 'No deck found with that ID' });
        }
        const deckObj = {
            deck,
        };
        return res.json(deckObj);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.getDeckById = getDeckById;
const createDeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deck = yield models_1.Deck.create(req.body);
        if (!deck) {
            res.status(404).json({ message: 'Could not create deck' });
        }
        const deckObj = {
            deck,
        };
        return res.json(deckObj);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.createDeck = createDeck;
const updateDeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deck = yield models_1.Deck.findByIdAndUpdate({ id: req.body.deckId }, { $set: { deckName: req.body.deckName, cards: req.body.cards } }, { runValidators: true, new: true });
        if (!deck) {
            res.status(404).json({ message: 'No deck found with that ID' });
        }
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.updateDeck = updateDeck;
const deleteDeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deck = yield models_1.Deck.findByIdAndRemove({ _id: req.body.deckId });
        if (!deck) {
            res.status(404).json({ message: 'No deck found with that ID' });
        }
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.deleteDeck = deleteDeck;
