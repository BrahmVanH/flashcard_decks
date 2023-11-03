const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type Card {
    _id: ID!
    title: String
    prompt: String
    solution: String
  }
  type Deck {
    _id: ID!
    deckName: String!
    cards: [Card]
  }

  input newCard {
    title: String!
    prompt: String!
    solution: String!
  }

  input newDeck {
    title: String
    cards: [newCard]
  }

  type Query {
    getAllDecks: [Deck]
    getDeckById(id: ID!): [Deck]
  }

  type Mutation {
    createDeck(newDeck: newDeck!): Deck
    updateDeck(deckId: ID!, newCards: [newCard!]): Deck
    deleteDeck(id: ID!): Deck
  }

`;

module.exports = typeDefs;
