import React from "react";
import { useQuery } from "@apollo/client";
import CryptoCoinChart from "../../components/CryptoCoinChart/CryptoCoinChart";
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
  console.log();

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>

      {user.cryptoWallet.length === 0 ? (
        <h1>Add coins</h1>
      ) : (
        user.cryptoWallet.map((coin, idx) => {
          return (
            <div key={idx}>
              <h1>{coin.name}</h1>
              <CryptoCoinChart coinId={coin.name} days={5} full={true} />
              <p>Amount{coin.amount}</p>
              <p>BuyPrice{coin.buyPrice}</p>
              <p>CryptoImage{coin.cryptoImage}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default UserPage;
