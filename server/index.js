import "@babel/polyfill";
import express from "express";
import path from "path";
import { ApolloServer, gql } from "apollo-server-express";
import bodyParser from "body-parser";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/schema";

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers
});

const app = express();

server.applyMiddleware({ app });

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/build")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, " ../client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen({ port }, () =>
  console.log(`Server ready listening in port ${port}`)
);
``;
