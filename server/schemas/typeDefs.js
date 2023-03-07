const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String
    lastname: String
    username: String
    email: String
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

  type Task {
    _id: ID
    taskname: String
    user: ID
    project: ID
  }

  type Query {
    users: [User]
    projects: [Project]
    teams: [Team]
    tasks: [Task]
    getUser(userId: ID!): User
    getTeam(teamId: ID!): Team
    getProject(projectId: ID!): Project
    getTask(taskId: ID!): Task
  }

  type Mutation {
    createUser(firstname: String! ,lastname: String!): User
    login(email: String!, password: String!): User
    createProject(projectName: String! , status: String!, teams: ID!, endDate: String): Project
    createTeam(users: ID!, project: ID!): Team
    createTask(taskname: String!, userId: ID!, projectId: ID!): Task
    deleteUser(_id: ID!): User
    deleteProject(_id: ID!): Project
    deleteTeam(_id: ID!): Team
  }
  `;

// createTeam(_id,teamId,users): Team
// login(email, password): User

module.exports = typeDefs;
