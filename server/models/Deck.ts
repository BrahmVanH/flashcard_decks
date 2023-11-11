import { Schema, Document, Model, model } from 'mongoose';

// Define the schema for your documents
const deckSchema = new Schema<IDeck>({
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

// Define a TypeScript interface for your deck document
export interface IDeck extends Document {
	deckName: string;
	cards: ICard[];
}

export interface ICard {
	title: string;
	prompt: string;
	solution: string;
}

// Create a model for the "Deck" collection
export const Deck: Model<IDeck> = model('Deck', deckSchema);

