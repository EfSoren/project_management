const { User,Project,Team,Task } = require("../models");
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
        getUser: async (parent,{ userId }) => {
            return User.findById(userId);
        },
        getProject: async (parent,{ projectId }) => {
            return await Project.findById(projectId);
        },
        getTeam: async (parent,{ teamId }) => {
            return await Team.findById(teamId);
        },
        getTask: async (parent,{ taskId }) => {
            return await Task.findById(taskId);
        }
    },

    Mutation: {
        createUser: async (parent,{ username,firstname,lastname }) => {
            return await User.create({ username,firstname,lastname });
        },
        createProject: async (parent,{ projectName,status,teams,endDate }) => {
            return await Project.create({ projectName,status,teams,endDate });
        },
        createTeam: async (parent,{ users,project }) => {
            return await Team.create({ users,project });
        },
        createTask: async (parent,{ taskname,userId,projectId }) => {
            return await Task.create({ taskname,userId,projectId });
        },
        login: async (parent,{ email,password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError("No user found");
            }
            const correctPW = await user.isCorrectPassword(password);
            if (!correctPW) {
                throw new AuthenticationError('Incorrect name or password.');
            }
            const token = signToken(user);
            return { token, user };
        },
        deleteUser: async (parent,{ _id }) => {
            return await User.findOneAndDelete({ _id });
        },
        deleteProject: async (parent,{ _id }) => {
            return Project.findOneAndDelete({ _id });
        },
        deleteTeam: async (parent,{ _id }) => {
            return Team.findOneAndDelete({ _id });
        }
    }
};








module.exports = resolvers;
