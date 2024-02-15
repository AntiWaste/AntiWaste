const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: String,
    role: {
      type: String,
      default: 'user',
    },
    status: {
      type: String,
      default: 'active',
    },
    address: {
      type: String,
      default: 'Hanoi',
    },
    social_contact: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('User', userSchema);
