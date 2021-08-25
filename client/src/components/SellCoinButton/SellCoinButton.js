import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SELL_COIN, REMOVE_COIN } from "../../graphql/mutations";

const SellCoinButton = ({ coin }) => {
  const [sellAmount, setSellAmount] = useState(1);

  const userData = JSON.parse(localStorage.getItem("user-data"));

  const [sellCoinFunction] = useMutation(SELL_COIN, {
    variables: {
      coinId: coin._id,
      amount: coin.amount - sellAmount,
    },
  });

  const [removeCoinFunction] = useMutation(REMOVE_COIN, {
    variables: {
      userId: userData._id,
      coinId: coin._id,
    },
  });

  return (
    <div>
      <input
        type="number"
        value={sellAmount}
        onChange={(e) => {
          e.preventDefault();
          setSellAmount(e.target.value);
        }}
        min="1"
        max={coin.amount}
      />
      <button
        onClick={(e) => {
          e.preventDefault();

          if (coin.amount < parseInt(sellAmount) || 1 > parseInt(sellAmount)) {
            setSellAmount(1);
          } else {
            if (coin.amount === parseInt(sellAmount)) {
              removeCoinFunction();
            } else {
              sellCoinFunction();
            }
            setSellAmount(1);
          }
        }}
      >
        Sell
      </button>
    </div>
  );
};

export default SellCoinButton;
