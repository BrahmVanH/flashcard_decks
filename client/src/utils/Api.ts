export const getDecks = async (): Promise<Response> => {
	try {
		const response = await fetch('/api/decks/get/', {
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch decks: ${response.statusText}`);
		}

		return response;
	} catch (err) {
		console.error({ message: 'There was an error in fetching decks: ', err });
    throw err
	}
};
export const getDeckById = async (id: string): Promise<Response> => {
  try {

    const response = await fetch('/api/decks/get/:id', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    });

    if (!response.ok) {
			throw new Error(`Failed to fetch deck: ${response.statusText}`);
		}

    return response;
  } catch (err) {
    console.error({message: "There was an error in fetching decks by ID: ", err});
    throw err;
  }
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

export const createDeck = async (newDeck: deckType): Promise<Response> => {
  try {
		const response = await fetch('/api/decks/create/:newDeck', {
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
	} catch (err) {
		console.error({
			message: 'There was an error in creating a new Deck: ',
			err,
		});
		throw err;
	}
}

export const deleteDeck = async (id: string): Promise<Response> => {
	try {
		const response = await fetch('/api/decks/delete/:id', {
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
	} catch (err) {
		console.error({
			message: 'There was an error in deleting a Deck: ',
			err,
		});
		throw err;
	}
};