const { Schema, model } = require("mongoose");
const teamSchema = require('./team');
const companySchema = require('./company');

const taskSchema = new Schmea({
  id: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true
  }
});

const projectSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true
  },
  tasks: [taskSchema],
  teams: [{
    type: Schema.Types.ObjectId,
    ref: 'team'
  }],
  company: [{
    type: Schema.Types.ObjectId,
    ref: 'company'
  }]
});

const Project = model('project', projectSchema);

module.exports = Project;
