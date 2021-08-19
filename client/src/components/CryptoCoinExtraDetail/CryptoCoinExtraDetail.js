import React from "react";
import { useQuery } from "@apollo/client";
import { FETCH_SINGLE_COIN } from "../../graphql/queries";
import {
  StyledCryptoCoinExtraDetail,
  UpperRow,
  UpperSection,
  LowerSection,
} from "./styles";

const CryptoCoinExtraDetail = ({ coinId }) => {
  const coinFormat = (num) => {
    return num >= 100
      ? num.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")
      : num;
  };

  const { loading, data, error } = useQuery(FETCH_SINGLE_COIN, {
    variables: {
      coinId: coinId,
    },
  });

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{error}</h1>;

  const { fetchSingleCoin } = data;

  return (
    <StyledCryptoCoinExtraDetail>
      <UpperRow>
        <div>
          <UpperSection>
            <h1>Total Volume: {coinFormat(fetchSingleCoin.total_volume)}</h1>
          </UpperSection>
          <UpperSection>
            <h1>Total Supply: {coinFormat(fetchSingleCoin.total_supply)}</h1>
          </UpperSection>
        </div>
        <div>
          <UpperSection>
            <h1>Genesis Date: {fetchSingleCoin.genesis_date}</h1>
          </UpperSection>
          <UpperSection>
            <h1>Hashing Algorithm: {fetchSingleCoin.hashing_algorithm}</h1>
          </UpperSection>
        </div>
      </UpperRow>

      <LowerSection>
        <div>
          <h1>Description:</h1>

          {fetchSingleCoin.description}
        </div>
      </LowerSection>
    </StyledCryptoCoinExtraDetail>
  );
};

export default CryptoCoinExtraDetail;
