import React from "react";
import { Query } from "react-apollo";
import { FETCH_COIN } from "../graphql/queries";

export default function App() {
  return (
    <Query query={FETCH_COIN}>
      {({ loading, error, data }) => {
        if (loading) return "Loading";
        if (error) return `Error ${error.message}`;

        console.log(data);

        return <div>hello</div>;
      }}
    </Query>
  );
}
