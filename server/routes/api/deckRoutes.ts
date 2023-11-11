import { Router } from 'express';
import { getAllDecks, getDeckById, createDeck, updateDeck, deleteDeck } from '../../controllers/deckController';
const router = Router();

router.get('/get', getAllDecks);
router.get('/get/:id', getDeckById);
router.post('/create', createDeck);
router.patch('/update/:id', updateDeck);
router.delete('/delete/:id', deleteDeck);

export default router;
