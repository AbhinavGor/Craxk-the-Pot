const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

const ResponseSchema = new mongoose.Schema({
  answers: [
      {
          type: String,
      }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
}
});

const Response = mongoose.model('Response', ResponseSchema);

module.exports = Response;
