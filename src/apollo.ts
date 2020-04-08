import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { setContext } from "apollo-link-context";
import { split } from "apollo-link";
// import fetch from "isomorphic-unfetch";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
// import { Platform } from "react-native";

// import { ApolloClient, split, HttpLink, InMemoryCache } from "@apollo/client";
// import { Platform } from "react-native";

// const host =
//   Platform.OS === "ios"
//     ? "http://localhost:7000/graphql"
//     : "http://10.0.2.2:7000/graphql";

const host = "https://atapi.eddienaff.dev/graphql";

const wsHost = "wss://atapi.eddienaff.dev/graphql";

const gqlUri = process.env.GRAPHQL_URL;

// android
// const host = Platform.OS === "ios" ? "http://localhost:7000" : "10.0.2.2";

// ios localhost
// const

const httpLink = new HttpLink({
  uri: host,
  // fetch,
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: wsHost,
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    console.log("LOOK AT DEFINITIONS", { definition });
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) => {
      let authErrorMessage = "Not authenticated";
      if (message.includes(authErrorMessage)) {
        // NEED SOME SORT OF RE-ROUTING LOGIC
        console.log("PREVENT PRETTIER FROM CLOSING THIS");
      } else {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
            locations,
            null,
            2
          )}, Path: ${path}`
        );
      }
    });
  if (networkError) {
    console.log(`[Network Error]: ${networkError}`);
  }
});

const authLink = setContext((_, { headers }) => {
  const token = "REPLACE THIS WITH SOMETHING REAL";
  return {
    headers: {
      ...headers,
      token,
    },
  };
});

export const client = new ApolloClient({
  link: errorLink.concat(splitLink),
  cache: new InMemoryCache(),
});

// "https://atapi.eddienaff.dev/graphql", // "http://192.168.1.6:7000/graphql", // gqlUri, // Server URL (must be absolute)
// link: errorLink.concat(authLink.concat(splitLink)),
// link: errorLink.concat(splitLink),
// credentials: "include", // Additional fetch() options like `credentials` or `headers`
// fetch,
