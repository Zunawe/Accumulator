const { Schema, model } = require('mongoose')

const Contact = model('Contact', new Schema({
  name: {
    given_name: {
      type: String,
      required: true
    },
    surname: {
      type: String
    }
  },
  phone_number: {
    type: String
  },
  email: {
    type: String
  }
}, { timestamps: true }))

module.exports = Contact
