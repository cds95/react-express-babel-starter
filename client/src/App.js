import React, { Component } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Users from "./components/Users";

const client = new ApolloClient({
  uri: "/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Users />
      </ApolloProvider>
    );
  }
}

export default App;
