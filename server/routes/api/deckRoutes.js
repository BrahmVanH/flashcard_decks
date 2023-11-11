"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deckController_1 = require("../../controllers/deckController");
const router = (0, express_1.Router)();
router.get('/get', deckController_1.getAllDecks);
router.get('/get/:id', deckController_1.getDeckById);
router.post('/create', deckController_1.createDeck);
router.patch('/update/:id', deckController_1.updateDeck);
router.delete('/delete/:id', deckController_1.deleteDeck);
exports.default = router;