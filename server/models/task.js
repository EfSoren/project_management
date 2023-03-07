const { Schema, model } = require("mongoose");
const projectSchema = require('./project');
const userSchema = require('./user');

const taskSchema = new Schema({
  taskname: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'project'
  }
});

const Task = model('task', taskSchema);

module.exports = Task;
