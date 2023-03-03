const { User,Project,Team } = require("../models");

const resolvers = {
    Query: {
        getUser: async (parent,args,context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select("-__v -password");
                return userData;
            }
            // TODO: Throw an error when the authentication is done
            // TODO:: Do this ^ for the rest of the resolvers
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
    // Mutation: {
    //     createUser; async (parent, args) => {

    //     }
    // }
};

module.exports = resolvers;