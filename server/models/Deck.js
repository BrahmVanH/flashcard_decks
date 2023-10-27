const {Schema, model} = require("mongoose");


const deckSchema = new Schema({
  deckName: {
    type: String,
    require: true
  },
  cards: [{
    title: String,
    prompt: String,
    solution: String
  }]
});

const Deck = model("Deck", deckSchema);

module.exports = Deck;