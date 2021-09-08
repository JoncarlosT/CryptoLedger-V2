import React from "react";
import { useQuery } from "@apollo/client";
import CryptoCoinChart from "../../components/CryptoCoinChart/CryptoCoinChart";
import EditCoinMenu from "../../components/EditCoinMenu/EditCoinMenu";
import { FETCH_SINGLE_USER } from "../../graphql/queries";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import {
  StyledUserPage,
  UserCryptoChart,
  ChartWrapper,
  EditCoinMenuWrapper,
} from "./styles";

const UserPage = ({ userData }) => {
  const { data, loading, error } = useQuery(FETCH_SINGLE_USER, {
    variables: {
      _id: userData._id,
    },
  });

  if (loading) return <ScreenSaver />;
  if (error) return <h1>{error}</h1>;

  const { user } = data;

  return (
    <StyledUserPage>
      <h1>{user.name}, wallet</h1>
      <h1>{user.email}</h1>
      {user.cryptoWallet.length === 0 ? (
        <h1>Add coins</h1>
      ) : (
        user.cryptoWallet.map((coin, idx) => {
          return (
            <UserCryptoChart key={idx}>
              <EditCoinMenuWrapper>
                <EditCoinMenu userCoin={coin} />
              </EditCoinMenuWrapper>
              <ChartWrapper>
                <CryptoCoinChart
                  coinId={coin.name}
                  full={true}
                  height={400}
                  width={850}
                />
              </ChartWrapper>
            </UserCryptoChart>
          );
        })
      )}
    </StyledUserPage>
  );
};

export default UserPage;
