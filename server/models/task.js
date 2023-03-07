const { Schema,model } = require("mongoose");
const projectSchema = require('./project');
const userSchema = require('./user');

const taskSchema = new Schema({
  taskname: {
    type: String,
    required: true
  },
  userId: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  projectId: {
    type: Schema.Types.ObjectId,
    ref: 'project'
  }
});

const Task = model('task',taskSchema);

module.exports = Task;
