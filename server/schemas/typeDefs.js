const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastNme: String
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

  type Mutation {
    createUser(firstName: String! ,lastName: String! ,userName: String! ,email: String! ,password: String!)
    createProject(_id: String!,name: String! ,teams: String! ,company: String!)
    createTeam(_id,teamId,users)
    login(email, password)
    deleteUser(_id)
    deleteProject(_id)
    deleteTeam(_id)

  }
`;

module.exports = typeDefs;