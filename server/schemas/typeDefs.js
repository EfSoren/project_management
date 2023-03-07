const { gql } = require('apollo-server-express');

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
    teamId: Int
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
      createUser(username:String!, firstname: String! ,lastname: String!): User
      deleteUser(_id: String!): User
      createProject(projectName: String! , status: String!, teams: ID!, endDate: String): Project
  }
  `;
// 
//     
//     createTeam(_id,teamId,users): Team
//     login(email,password): User

//     deleteProject(_id): Project
//     deleteTeam(_id): Team
//   }



module.exports = typeDefs;