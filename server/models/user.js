const { Schema,model } = require('mongoose');
const bcrypt = require('bcrypt');
const companySchema = require('./company');
const teamSchema = require('./team');

const userSchema = new Schema(
  {
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
        validator: function (email) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
        },
      }
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

userSchema.pre('save',async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password,saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password,this.password);
};

const User = model('user',userSchema);

module.exports = User;
