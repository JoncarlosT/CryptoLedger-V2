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

export const VERIFY_USER = gql`
  mutation VerifyUser($token: String!) {
    verifyUser(token: $token) {
      loggedIn
    }
  }
`;
