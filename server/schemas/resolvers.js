const { User,Project,Team,Company } = require("../models");
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
        companies: async () => {
            return await Company.find({});
        },
        getUser: async (parent,{ userId }) => {
            // const userData = _id ? { _id } : {};
            return User.findById(userId);
        },
        getProject: async (parent,{ projectId }) => {
            if (context.project) {
                return await Project.findById(projectId);
            }
        },
        getTeam: async (parent,{ teamId }) => {
            if (context.team) {
                return await Team.findById(teamId);
            }
        }
    },

    Mutation: {
        createUser: async (parent,{ username,firstname,lastname }) => {
            return User.create({ username,firstname,lastname });
        },
        createProject: async (parent,{ projectName,status,teams,endDate }) => {
            return Project.create({ projectName,status,teams,endDate });
        },
        //     createTeam: async (parent,{ teamId }) => {
        //         return Team.create({ teamId });
        //     },
        //     login: async (parent,{ email,password }) => {
        //         const user = await User.findOne({ email });

        //         if (!user) {
        //             throw new AuthenticationError("No user found");
        //         }

        //         const token = signToken(user);

        //         return { token,user };
        //     },

        deleteUser: async (parent,{ _id }) => {
            return User.findOneAndDelete({ _id });
        },
        //     deleteProject: async (parent,{ _id }) => {
        //         return Project.findOneAndDelete({ _id });
        //     },
        //     deleteTeam: async (parent,{ _id }) => {
        //         return Team.findOneAndDelete({ _id });
        //     }
    }

};

module.exports = resolvers;