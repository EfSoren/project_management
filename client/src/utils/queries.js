import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query ExampleQuery($getUserId: ID!) {
    getUser(getUserId: $getUserId) {
      _id
      firstname
      lastname
    }
  }
`;
