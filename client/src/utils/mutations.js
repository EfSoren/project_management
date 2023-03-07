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
