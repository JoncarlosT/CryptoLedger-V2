import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { IS_LOGGED_IN } from "./graphql/queries";
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

cache.writeQuery({
  query: IS_LOGGED_IN,
  data: {
    isLoggedIn: !!localStorage.getItem("auth-token"),
    userData: localStorage.getItem("user-data"),
  },
});

const token = localStorage.getItem("auth-token");

if (token) {
  client
    .mutate({ mutation: VERIFY_USER, variables: { token } })
    .then(({ data }) => {
      cache.writeQuery({
        query: IS_LOGGED_IN,
        data: {
          isLoggedIn: data.verifyUser.loggedIn,
          userData: localStorage.getItem("user-data"),
        },
      });
    });
} else {
  cache.writeQuery({
    query: IS_LOGGED_IN,
    data: {
      isLoggedIn: false,
      userData: null,
    },
  });
}

export default client;
