const mongoose = require("mongoose");
const validator = require("validator");

// create a mongoose model
var User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: `{VALUE} is not a valid email`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: `{VALUE} is not a valid email`
    }
  },
  tokens: [
    {
      access: {
        type: string,
        required: true
      },
      token: {
        type: string,
        required: true
      }
    }
  ]
});

module.exports = { User };
