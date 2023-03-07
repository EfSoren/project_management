import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query getUsers {
    getUser {
      _id
      firstname
      lastname
    }
  }
`;
