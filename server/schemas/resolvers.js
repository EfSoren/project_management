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
    // Mutations: {
    //     addUser: async (parent,{ _id,firstName,lastName,userName,email,password,position }) => {
    //         return User.create({ _id,firstName,lastName,userName,email,password,position });
    //     },
    //     addProject: async (parent,{ _id,name,tasks,teams,company }) => {
    //         return Project.create({ _id,name,tasks,teams,company });
    //     },
    //     addTeam: async (parent,{ _id,teamId,users }) => {
    //         return Team.create({ _id,teamId,users });
    //     }
    // }




};

module.exports = resolvers;