const { Schema, model } = require('mongoose');

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
      required: true
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
    password: {
      type: String,
      trim: true,
      length: [8,],
      validator: function(password) {
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    },
    },
    position: {
      type: String,
    },
    team: [teamSchema],
    company: [companySchema]
  }
);

const User = model('user', userSchema);

module.exports = User;
