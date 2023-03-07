const { Schema, model } = require("mongoose");
const teamSchema = require('./team');
const companySchema = require('./company');
const userSchema = require('./user');

const taskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true
  },
  tasks: [taskSchema],
  status: {
    type: String
  },
  teams: [{
    type: Schema.Types.ObjectId,
    ref: 'team'
  }],
  company: [{
    type: Schema.Types.ObjectId,
    ref: 'company'
  }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  endDate: {
    type: Date,
    default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000)
  }
});

const Project = model('project', projectSchema);

module.exports = Project;
