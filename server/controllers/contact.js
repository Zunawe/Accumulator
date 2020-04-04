const Contact = require('../models/contact')

const controller = {
  createContact: (req, res) => {
    const newContact = new Contact(req.body)
    newContact.save()
      .then((newContact) => res.status(201).json(newContact))
      .catch((err) => {
        console.error(err)
        res.sendStatus(500)
      })
  },
  getContacts: (req, res) => {
    Contact.find().lean()
      .then((result) => res.json(result))
      .catch((err) => {
        console.error(err)
        res.sendStatus(500)
      })
  },
  getContact: (req, res) => {
    Contact.findById(req.params.id).lean()
      .then((result) => res.json(result))
      .catch((err) => {
        console.error(err)
        res.sendStatus(500)
      })
  },
  updateContact: (req, res) => {
    Contact.findByIdAndUpdate(req.params.id, req.body)
      .then((contact) => res.json(contact))
      .catch((err) => {
        console.error(err)
        res.sendStatus(500)
      })
  },
  deleteContact: (req, res) => {
    Contact.findByIdAndDelete(req.params.id)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.error(err)
        res.sendStatus(500)
      })
  }
}

module.exports = controller
