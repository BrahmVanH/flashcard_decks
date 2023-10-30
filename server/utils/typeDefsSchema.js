import { readFileSync } from "fs";

const typeDefs = readFileSync("./schemas/schema.graphql", { encoding: "utf-8" });

module.exports = { typeDefs };
