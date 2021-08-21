import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_COIN } from "../../graphql/mutations";

const RemoveCoinButton = ({ coinData }) => {
  const userData = JSON.parse(localStorage.getItem("user-data"));

  const [removeCoinFunction, { data, loading, error }] = useMutation(
    REMOVE_COIN,
    {
      variables: {
        userId: userData._id,
        coinId: coinData._id,
      },
    }
  );

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        removeCoinFunction();
      }}
    >
      X
    </button>
  );
};

export default RemoveCoinButton;
