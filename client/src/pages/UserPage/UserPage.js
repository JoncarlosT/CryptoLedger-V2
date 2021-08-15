import React from "react";
import { useQuery } from "@apollo/client";
import { FETCH_SINGLE_USER } from "../../graphql/queries";

const UserPage = ({ userData }) => {
  const { data, loading, error } = useQuery(FETCH_SINGLE_USER, {
    variables: {
      _id: userData._id,
    },
  });

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{error}</h1>;

  const { user } = data;
  console.log(user);

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default UserPage;
