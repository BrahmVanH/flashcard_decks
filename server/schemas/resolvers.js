const { AuthenticationError } = require("apollo-server-express");
const { Deck } = require("../models");

const resolvers = {
  Query: {
    getAllDecks: async () => {
      try {
        const decks = await Deck.find({});

        if (!decks) {
          throw new Error("Could not find any decks in db...");
        }

        return decks;
      } catch (err) {
        throw new Error("Error while querying all decks: ", err.message);
      }
    },
    getDeckById: async (parent, { id }) => {
      if (!deckName) {
        throw new Error("id field must be filled to query decks");
      }
      try {
        const deck = await Deck.findOne({ _id: id });

        if (!deck) {
          throw new Error("Couldnt find any decks with that id");
        }

        return deck;
      } catch (err) {
        throw new Error("Error while querying decks by id", err.message);
      }
    },
  },
  Mutation: {
    createDeck: async (parent, { newDeck }) => {
      if (!newDeck) {
        throw new Error("newDeck object is undefined");
      }

      try {
        const createdDeck = await Deck.create(newDeck);

        if (!createdDeck) {
          throw new Error("There was an issue in creating a new deck");
        }

        return createdDeck;
      } catch (err) {
        throw new Error("There was an error in creating new deck", err.message);
      }
    },
    deleteDeck: async (parent, { id }) => {
      if (!id) {
        throw new Error("id field must be filled to delete a deck");
      }

      try {
        const deletedDeck = await Deck.deleteOne({ _id: id });

        if (!deletedDeck) {
          throw new Error("There was an issue deleting a deck by id");
        }

        return deletedDeck;
      } catch (err) {
        throw new Error("There was an error in deleting a deck by id");
      }
    },
  },
};

module.exports = resolvers;
