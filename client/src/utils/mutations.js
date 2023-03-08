import { gql } from "@apollo/client";
export const CREATE_PROJECT = gql`
  mutation createProject(
    $name: String!
    $manager: String!
    $description: String!
    $endDate: String!
    $teamId: String!
  ) {
    createProject(
      input: {
        name: $name
        manager: $manager
        description: $description
        endDate: $endDate
        teamId: $teamId
      }
    ) {
      id
      name
      manager
      description
      endDate
      teamId
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $username: String!
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
    $position: String!
  ) {
    createUser(
      username: $username
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      position: $position
    ) {
      _id
      firstname
      lastname
      username
      email
      password
    }
  }
`;
