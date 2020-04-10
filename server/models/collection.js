const { Schema, model } = require('mongoose')

const CollectionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  items: {
    type: [Schema.Types.Mixed],
    validate: {
      validator: (items) => {
        console.log(items)
        return true
      }
    }
  }
}, { timestamps: true })

const Collection = model('Collection', CollectionSchema)

module.exports = { Collection, CollectionSchema }
