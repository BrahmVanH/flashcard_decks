import { db } from '../config/connection';
import { Deck, IDeck } from '../models';
import deckSeeds from './deckSeeds.json';

const typedDeckSeeds: IDeck = deckSeeds as IDeck;


db.once('open', async () => {
	try {
		await Deck.deleteMany();

		await Deck.create(typedDeckSeeds);
		console.log('done seeding');
		process.exit(0);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
});
