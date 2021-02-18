const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const typeDefs = require("./graphQL/schema/index");
const resolvers = require("./graphQL/resolver/index");
const { GraphQLServer, PubSub } = require("graphql-yoga");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var database = "mongodb+srv://cvele:cvelePass@posts.jzao1.mongodb.net/test";
mongoose
  .connect(database)
  .then(() => {
    console.log("Connection to DB successful");
  })
  .catch((err) => {
    console.log("Db connection error====", err);
  });

const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });

server.start(() => {
  console.log("GraphQL Listening on port 4000");
});

//https://github.com/abhishekraj210/graphQL-node-mongoDB
