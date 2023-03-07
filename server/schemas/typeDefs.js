const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String
    lastname: String
    username: String
    email: String
    company: ID
    password: String
    position: String
    team: ID
  }

  type Team {
    _id: ID
    teamId: String
  }

  type Project {
    _id: ID
    projectName: String
    status: String
  }

  type Company {
    _id: ID
    companyName: String
    teams: ID
    users: ID
    projects: ID
  }

  type Query {
    users: [User]
    projects: [Project]
    teams: [Team]
    companies: [Company]
    getUser(userId: ID!): User
    getTeam(teamId: ID!): Team
    getProject(projectId: ID!): Project
  }

  type Mutation {
    createUser(firstname: String! ,lastname: String!): User
    login(email: String!, password: String!): User

    deleteUser(_id: ID!): User
    deleteProject(_id: ID!): Project
    deleteTeam(_id: ID!): Team
  }
  `;


  // createProject(_id: String!,name: String! ,teams: String! ,company: String!): Project
  // createTeam(_id,teamId,users): Team
  // login(email, password): User

module.exports = typeDefs;
