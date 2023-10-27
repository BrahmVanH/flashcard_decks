const db = require("../config/connection");
const { Deck } = require("../models");
const deckSeeds = require("./deckSeeds.json";

db.once("open", async () => {
  try {
    await Deck.deleteMany();

    await Deck.create(deckSeeds);
    console.log("done seeding");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
