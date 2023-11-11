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
export const getDeckById = async (deckId: string): Promise<Response> => {
  try {

    const response = await fetch('/api/decks/get/:id', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deckId),
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

export const createDeck = async ()