import React, { useState, useEffect } from "react";
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
  UserName,
} from "./styles";
import { size } from "../../device";

const UserPage = ({ userData }) => {
  const [mobile, setMobile] = useState(false);

  const checkPageSize = () => {
    if (window.innerWidth > parseInt(size.mobileL)) {
      setMobile(true);
    } else setMobile(false);
  };

  useEffect(() => {
    checkPageSize();
  });

  window.addEventListener("resize", checkPageSize);

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
      {user.name.slice(-1) === "s" ? (
        <h1>
          <UserName>{user.name}'</UserName> CryptoWallet
        </h1>
      ) : (
        <h1>
          <UserName>{user.name}'s</UserName> CryptoWallet
        </h1>
      )}

      {user.cryptoWallet.length === 0 ? (
        <h1>Add coins</h1>
      ) : mobile ? (
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
      ) : (
        <>
          <h1>mobile test</h1>
          {user.cryptoWallet.map((coin, idx) => {
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
          })}
        </>
      )}
    </StyledUserPage>
  );
};

export default UserPage;
