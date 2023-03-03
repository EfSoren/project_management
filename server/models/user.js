const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    id: {
        type: Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    username: {

    },
    email: {

    },
    password: {

    },
    position: {
      type: String,
      required: true
    },
    team: [teamSchema],
    company: [companySchema]
  }
);

const User = model('User', userSchema);

module.exports = User;
