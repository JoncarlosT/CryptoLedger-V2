import React, { useState } from "react";
import { AmountInput, StyledAddCoinMenu } from "./styles";
import { useMutation } from "@apollo/client";
import { ADD_COIN_TO_USER_WALLET } from "../../graphql/mutations";
import StyledButton from "../StyledButton/StyledButton";

const AddCoinMenu = ({ coinData, userData }) => {
  const [amount, setAmount] = useState(0);
  const [showError, setShowError] = useState(false);

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
    <StyledAddCoinMenu>
      {showError ? <h1>Enter Number</h1> : <></>}

      <AmountInput
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value) || amount)}
        type="number"
        placeholder="Amount"
      />

      <StyledButton
        onClick={() => {
          if (amount === 0) {
            setShowError(!showError);
          } else {
            addCoinToUserWallet();
          }
        }}
      >
        Add Coin
      </StyledButton>

      {called ? <h1>Added</h1> : <></>}
    </StyledAddCoinMenu>
  );
};

export default AddCoinMenu;
