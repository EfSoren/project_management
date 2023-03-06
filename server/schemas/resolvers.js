const { AuthenticationError } = require("apollo-server-express");
const { User,Project,Team } = require("../models");

const resolvers = {
    Query: {
        getUser: async (parent,{ _id }) => {
            const userData = _id ? { _id } : {};
            return User.find(userData);
        },
        getProject: async (parent,args,context) => {
            if (context.project) {
                const projectData = await Project.findOne({ _id: context.project._id })
                    .select("-__v -password");
                return projectData;
            }
        },


        getTeam: async (parent,args,context) => {
            if (context.team) {
                const teamData = await Team.findOne({ _id: context.team._id })
                    .select("-__v -password");
                return teamData;
            }
        }
    },
    Mutations: {
        createUser: async (parent,{ _id,firstName,lastName,userName,email,password }) => {
            return User.create({ _id,firstName,lastName,userName,email,password });
        },
        createProject: async (parent,{ _id,name,tasks,teams,company }) => {
            return Project.create({ _id,name,tasks,teams,company });
        },
        createTeam: async (parent,{ teamId }) => {
            return Team.create({ teamId });
        },
        login: async (parent,{ email,password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("No user found");
            }

            const token = signToken(user);

            return { token,user };
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




};

module.exports = resolvers;