import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query ExampleQuery($userId: ID!) {
    getUser(userId: $userId) {
      _id
      firstname
      lastname
    }
  }
`;
export const QUERY_PROJECT = gql`
  query ExampleQuery($projectId: ID!) {
    getProject(projectId: $projectId) {
      _id
      projectName
    }
  }
`;

export const QUERY_TEST = gql`
  query getuuser {
    users {
      _id
      firstname
      lastname
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query proj {
    projects {
      _id
      projectName
    }
  }
`;
