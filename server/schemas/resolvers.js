const { User,Project,Team,Company } = require("../models");

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({})
        },
        projects: async () => {
            return await Project.find({})
        },
        teams: async () => {
            return await Team.find({})
        },
        companies: async() => {
            return await Company.find({})
        },
        getUser: async (parent,{ userId }) => {
            // const userData = _id ? { _id } : {};
            return User.findById(userId);
        },
        getProject: async (parent, { projectId }) => {
            if (context.project) {
                return await Project.findById(projectId)
            }
        },
        getTeam: async (parent,{ teamId }) => {
            if (context.team) {
                return await Team.findById(teamId)
            }
        }
    },
    Mutation: {
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