import React from "react";
import { useQuery } from "@apollo/client";
import { FETCH_SINGLE_COIN } from "../../graphql/queries";
import coinFormat from "../../util/coinFormat";
import {
  StyledCryptoCoinExtraDetail,
  UpperRow,
  UpperSection,
  LowerSection,
} from "./styles";

const CryptoCoinExtraDetail = ({ coinId }) => {
  const parseHtml = (html) => {
    const parse = new DOMParser();
    return parse.parseFromString(html, "text/html");
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
            <h1>
              Total Volume: $
              {fetchSingleCoin.total_volume === null ? (
                <>N/A</>
              ) : (
                coinFormat(fetchSingleCoin.total_volume)
              )}
            </h1>
          </UpperSection>
          <UpperSection>
            <h1>
              Total Supply:
              {fetchSingleCoin.total_supply === null ? (
                <> N/A</>
              ) : (
                coinFormat(fetchSingleCoin.total_supply)
              )}
            </h1>
          </UpperSection>
        </div>
        <div>
          <UpperSection>
            <h1>
              Genesis Date:
              {fetchSingleCoin.genesis_date === null ? (
                <> N/A</>
              ) : (
                coinFormat(fetchSingleCoin.genesis_date)
              )}
            </h1>
          </UpperSection>
          <UpperSection>
            <h1>
              Hashing Algorithm:
              {fetchSingleCoin.hashing_algorithm === null ? (
                <> N/A</>
              ) : (
                coinFormat(fetchSingleCoin.hashing_algorithm)
              )}
            </h1>
          </UpperSection>
        </div>
      </UpperRow>

      <LowerSection>
        <div>
          <h1>Description:</h1>

          {fetchSingleCoin.description === "" ? (
            <> N/A</>
          ) : (
            <div
              dangerouslySetInnerHTML={{ __html: fetchSingleCoin.description }}
            />
          )}
        </div>
      </LowerSection>
    </StyledCryptoCoinExtraDetail>
  );
};

export default CryptoCoinExtraDetail;
