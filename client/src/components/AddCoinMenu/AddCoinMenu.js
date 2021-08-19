import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COIN_TO_USER_WALLET } from "../../graphql/mutations";

const AddCoinMenu = ({ coinData, userData }) => {
  const [amount, setAmount] = useState(undefined);
  const [buyPrice, setBuyPrice] = useState(undefined);

  const [addCoinToUserWallet, addCoinToUserWalletData] = useMutation(
    ADD_COIN_TO_USER_WALLET,
    {
      variables: {
        userId: userData._id,
        name: coinData.id,
        amount: amount,
        buyPrice: buyPrice,
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
      <input
        value={buyPrice}
        onChange={(e) => setBuyPrice(parseInt(e.target.value))}
        type="number"
        placeholder="BuyPrice"
      />
      <button onClick={() => addCoinToUserWallet()}>Add Coin</button>
    </div>
  );
};

export default AddCoinMenu;
