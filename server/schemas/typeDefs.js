const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String
    lastname: String
    username: String
    email: String
    password: String
    position: String
  }

  type Team {
    _id: ID
    teamId: Int
  }

  type Project {
    _id: ID
    projectName: String
    status: String
  }

  type Query {
    getUser: [User]
    getTeam: [Team]
    getProject: [Project]
  }
`;

module.exports = typeDefs;