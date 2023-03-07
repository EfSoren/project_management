const { User,Project,Team,Task} = require("../models");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    projects: async () => {
      return await Project.find({});
    },
    teams: async () => {
      return await Team.find({});
    },
    tasks: async () => {
      return await Task.find({});
    },
    getUser: async (parent, { userId }) => {
      // const userData = _id ? { _id } : {};
      return User.findOne({ _id: userId });
    },
    getProject: async (parent, { projectId }) => {
      return await Project.findById(projectId);
    },
    getTeam: async (parent, { teamId }) => {
      if (context.team) {
        return await Team.findById(teamId);
      }
    },

    Mutation: {
        // createUser: async (parent,{ _id,firstName,lastName,userName,email,password }) => {
        //     return User.create({ _id,firstName,lastName,userName,email,password });
        // },
        // createProject: async (parent,{ _id,name,tasks,teams,company }) => {
        //     return Project.create({ _id,name,tasks,teams,company });
        // },
        // createTeam: async (parent,{ teamId }) => {
        //     return Team.create({ teamId });
        // },
        login: async (parent,{ email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("No user found");
            }

            const correctPW = await user.isCorrectPassword(password);

            if (!correctPW) {
                throw new AuthenticationError('Incorrect name or password.')
            }

            const token = signToken(user);
            return { token };
        },

        deleteUser: async (parent,{ _id }) => {
            return User.findOneAndDelete({ _id });
        },
        deleteProject: async (parent,{ _id }) => {
            return Project.findOneAndDelete({ _id });
        },
        deleteTeam: async (parent,{ _id }) => {
            return Team.findOneAndDelete({ _id });
        }
    }

  }


};

module.exports = resolvers
