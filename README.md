# CryptoLedger

### Background and Overview

CryptoLedger is simple app to help you keep track of over 8,000 cryptocurrencies. Users can create accounts, to add and remove cryptocurrencies to their wallets. The app provides multiple pieces of information about each cryptocurrencies.

Website live [here](https://cryptoledger-v2.herokuapp.com/)

![alt text](https://github.com/JoncarlosT/CryptoLedger-V2/blob/Main/client/public/github/LandingPageDisplay.gif)

# CryptoLedger's Architecture and Technologies:

## Stack

- Front-end - React.js, Apollo-Client
- Back-end - MongoDB, Express, Node, Graphql

## Technologies

- Styled-components - Adding readability and CSS functionality
- Bcryptjs - Security
- Jsonwebtoken - User authentication
- Chart.js - Frontend chart data display

## API's

- Coingecko - List of cryptocurrencies and information

# Features

## User Authentication

Users can login and register accounts

## "User-Proof"

## Coin Charts

Interactive chart system that can change between 1, 7, 10, 15, and 30 Days. Your quantity, average cost, equality, and total return is also displayed and updated whenever coins are added or removed.

![alt text](https://github.com/JoncarlosT/CryptoLedger-V2/blob/Main/client/public/github/coinchart.PNG)

```javascript
<StyledEditCoinMenu>
  <CoinHeaderWrapper>
    <CoinImage src={fetchSingleCoin.image} alt="Coin_Image" />
    <CoinName>{fetchSingleCoin.name}</CoinName>
    <CoinSymbol>{fetchSingleCoin.symbol}</CoinSymbol>
  </CoinHeaderWrapper>
  <StyledButtonWrapper>
    <StyledButton
      onClick={(e) => {
        e.preventDefault();
        setSellCoin(!sellCoin);
      }}
    >
      {sellCoin ? <>Cancel</> : <>Sell</>}
    </StyledButton>
  </StyledButtonWrapper>
  <h1>Quantity: {coinFormat(userCoin.amount)}</h1>
  {sellCoin ? <SellCoinButton coin={userCoin} /> : <></>}

  <h1>Average Cost: {coinFormat(userCoin.buyPrice)}</h1>

  <h1>
    Equality: $
    {coinFormat(
      Math.round(100 * userCoin.amount * fetchSingleCoin.current_price) / 100
    )}
  </h1>
  <h1>
    Return: $
    {coinFormat(
      totalReturn(
        userCoin.amount * userCoin.buyPrice,
        percentChange(userCoin.buyPrice, fetchSingleCoin.current_price)
      )
    )}
    ({percentChange(userCoin.buyPrice, fetchSingleCoin.current_price)}%)
  </h1>
</StyledEditCoinMenu>
```

# Credit

- All coin information were from Coingecko api
