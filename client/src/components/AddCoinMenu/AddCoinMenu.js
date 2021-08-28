import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COIN_TO_USER_WALLET } from "../../graphql/mutations";
import StyledButton from "../StyledButton/StyledButton";

const AddCoinMenu = ({ coinData, userData }) => {
  const [amount, setAmount] = useState(undefined);

  const [addCoinToUserWallet, { called }] = useMutation(
    ADD_COIN_TO_USER_WALLET,
    {
      variables: {
        userId: userData._id,
        name: coinData.id,
        amount: amount,
        buyPrice: parseFloat(coinData.current_price),
        cryptoImage: coinData.image,
      },
    }
  );

  return (
    <div>
      <input
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
        type="number"
        placeholder="Amount"
      />

      <StyledButton onClick={() => addCoinToUserWallet()}>
        Add Coin
      </StyledButton>

      {called ? <h1>Added</h1> : <></>}
    </div>
  );
};

export default AddCoinMenu;
