const { Schema, model } = require("mongoose");
const teamSchema = require('./team');
const userSchema = require('./user');
const taskSchema = require('./task');

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true
  },
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'task'
  }],
  status: {
    type: String
  },
  teams: [{
    type: Schema.Types.ObjectId,
    ref: 'team'
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
