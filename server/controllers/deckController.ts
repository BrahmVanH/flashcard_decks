import { Deck } from '../models';
import { Request, Response } from 'express';

type deckByIdParams = {
	id: string;
};

type cardsType = {
	title: string;
	prompt: string;
	solution: string;
};

type deckType = {
	deckName: string;
	cards: cardsType[];
};

export const getAllDecks = async (req: Request, res: Response) => {
	try {
		const decks = await Deck.find();

		if (!decks) {
			res.status(404).json({ message: 'No decks found' });
		}

		const decksObj = {
			decks,
		};
		return res.json(decksObj);
	} catch (err) {
		return res.status(500).json(err);
	}
};

export const getDeckById = async (req: Request, res: Response) => {
	const { id }: deckByIdParams = req.params as deckByIdParams;
	try {
		const deck = await Deck.findOne({ _id: id });

		if (!deck) {
			res.status(404).json({ message: 'No deck found with that ID' });
		}

		const deckObj = {
			deck,
		};
		return res.json(deckObj);
	} catch (err) {
		return res.status(500).json(err);
	}
};

export const createDeck = async (req: Request, res: Response) => {
	const newDeck: deckType = req.body as deckType;
	try {
		const deck = await Deck.create(newDeck);

		if (!deck) {
			res.status(404).json({ message: 'Could not create deck' });
		}

		const deckObj = {
			deck,
		};

		return res.json(deckObj);
	} catch (err) {
		return res.status(500).json(err);
	}
};

export const updateDeck = async (req: Request, res: Response) => {
	try {
		const deck = await Deck.findByIdAndUpdate({ id: req.body.deckId }, { $set: { deckName: req.body.deckName, cards: req.body.cards } }, { runValidators: true, new: true });

		if (!deck) {
			res.status(404).json({ message: 'No deck found with that ID' });
		}
	} catch (err) {
		return res.status(500).json(err);
	}
};

export const deleteDeck = async (req: Request, res: Response) => {
	const { id }: deckByIdParams = req.body as deckByIdParams;
	try {
		const deck = await Deck.findByIdAndRemove({ _id: id });

		if (!deck) {
			res.status(404).json({ message: 'No deck found with that ID' });
		}
	} catch (err) {
		return res.status(500).json(err);
	}
};
