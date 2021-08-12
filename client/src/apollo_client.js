import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { VERIFY_USER } from "./graphql/mutations";

const cache = new InMemoryCache({
  dataIdFromObject: (object) => object._id || null,
});

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql",
  headers: {
    authorization: localStorage.getItem("auth-token"),
  },
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message));
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache,
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("network", networkError);
  },
});

const token = localStorage.getItem("auth-token");

cache.writeData({
  data: {
    isLoggedIn: Boolean(token),
  },
});

if (token) {
  client
    .mutate({ mutation: VERIFY_USER, variables: { token } })
    .then(({ data }) => console.log(data));
} else {
  cache.writeData({
    data: {
      isLoggedIn: false,
      cryptoWallet: [],
    },
  });
}

export default client;
