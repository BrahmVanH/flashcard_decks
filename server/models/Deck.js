"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const mongoose_1 = require("mongoose");
// Define the schema for your documents
const deckSchema = new mongoose_1.Schema({
    deckName: {
        type: String,
        required: true, // Corrected 'require' to 'required'
    },
    cards: [
        {
            title: { type: String, required: true },
            prompt: { type: String, required: true },
            solution: { type: String, required: true },
        },
    ],
});
// Create a model for the "Deck" collection
exports.Deck = (0, mongoose_1.model)('Deck', deckSchema);
