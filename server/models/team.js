const { Schema, model } = require("mongoose");
const userSchema = require('./user');
const companySchema = require('./company');

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
  company: [{
    type: Schema.Types.ObjectId,
    ref: 'company'
  }]
});

const Team = model('team', teamSchema);

module.exports = Team;
