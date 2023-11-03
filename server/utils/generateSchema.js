const { makeExecutableSchema } = require("graphql-tools/utils");
const { gql } = require("graphql");

import { typeDefs, resolvers } from "../schemas";

const schema = makeExecutableSchema({
  typeDefs, resolvers
});

// Save the schema as a JSON file
const fs = require("fs");
const { introspectSchema, makeRemoteExecutableSchema, printSchema } = require("graphql");

const jsonSchema = printSchema(schema);

fs.writeFileSync("graphql.schema.json", jsonSchema);
console.log("GraphQL schema saved as graphql.schema.json");
