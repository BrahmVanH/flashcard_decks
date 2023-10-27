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
  Mutation: {},
};

module.exports = resolvers;
