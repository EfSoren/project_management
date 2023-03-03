const { Schema, model } = require('mongoose');
const companySchema = require('./company');
const teamSchema = require('./team');

const userSchema = new Schema(
  {
    id: {
        type: Schema.Types.ObjectId,
    },
    firstname: {
      type: String,
      trim: true
    },
    lastname: {
      type: String,
      trim: true
    },
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    email: {
      type: String,
      trim: true,
      validate: {
        validator: function(email) {
            return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
        },
    }
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'company'
    },
    password: {
      type: String,
      trim: true,
      length: [8,],
    },
    position: {
      type: String,
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: 'team'
    }
  }
);

const User = model('user', userSchema);

module.exports = User;
