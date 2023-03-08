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
    $password: String!
    $email: String!
    $firstname: String!
    $lastname: String!
    $position: String!
  ) {
    createUser(
      username: $username
      password: $password
      email: $email
      firstname: $firstname
      lastname: $lastname
      position: $position
    ) {
      _id
      firstname
      lastname
      username
      email
      password
      position
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

