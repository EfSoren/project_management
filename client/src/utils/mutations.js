import { gql } from "@apollo/client";
export const CREATE_PROJECT = gql`
  mutation Mutation(
    $projectName: String!
    $description: String!
    $teams: ID!
    $endDate: String
  ) {
    createProject(
      projectName: $projectName
      description: $description
      teams: $teams
      endDate: $endDate
    ) {
      _id
      description
      projectName
      endDate
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
    $team: ID!
  ) {
    createUser(
      username: $username
      password: $password
      email: $email
      firstname: $firstname
      lastname: $lastname
      position: $position
      team: $team
    ) {
      _id
      firstname
      lastname
      username
      email
      password
      position
      team
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
