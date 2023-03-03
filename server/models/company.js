const { Schema, model } = require('mongoose');
const teamSchema = require('./team');
const userSchema = require('./user');
const projectSchema = require('./project');

const companySchema = new Schema(
    {
      id: {
        type: Schema.Types.ObjectId
      },
      companyName: {
        type: String,
        unique: true,
        required: true
      },
      teams: [{
        type: Schema.Types.ObjectId,
        ref: 'team'
      }],
      users: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
      }],
      projects: [{
        type: Schema.Types.ObjectId,
        ref: 'project'
      }]
    }
  )

const Company = model('Company', companySchema);

module.exports = Company;
