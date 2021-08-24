import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      name
      email
      token
      loggedIn
      cryptoWallet {
        _id
        name
        amount
        buyPrice
        cryptoImage
      }
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation LogoutUser($_id: ID!) {
    logout(_id: $_id) {
      token
      loggedIn
    }
  }
`;

export const REGISTER_USER = gql`
  mutation RegisterUser($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      _id
      name
      email
      token
      loggedIn
    }
  }
`;

export const VERIFY_USER = gql`
  mutation VerifyUser($token: String!) {
    verifyUser(token: $token) {
      loggedIn
    }
  }
`;

export const ADD_COIN_TO_USER_WALLET = gql`
  mutation AddCoinToUserWallet(
    $userId: ID!
    $name: String!
    $amount: Float!
    $buyPrice: Float!
    $cryptoImage: String!
  ) {
    addCoinToUserWallet(
      userId: $userId
      name: $name
      amount: $amount
      buyPrice: $buyPrice
      cryptoImage: $cryptoImage
    ) {
      _id
      name
    }
  }
`;

export const REMOVE_COIN = gql`
  mutation RemoveCoin($userId: ID!, $coinId: ID!) {
    removeCoin(userId: $userId, coinId: $coinId) {
      _id
      name
      email
      token
      loggedIn
      cryptoWallet {
        name
      }
    }
  }
`;
