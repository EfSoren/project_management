const { Schema, model } = require("mongoose");
const userSchema = require('./user');

const teamSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  teamId: {
    type: Number,
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  
});

const Team = model('team', teamSchema);

module.exports = Team;
