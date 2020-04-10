const { Collection } = require('../models/collection')

const controller = {
  createCollection: (req, res) => {
    const newCollection = new Collection(req.body)
    newCollection.save()
      .then((newCollection) => res.status(201).json(newCollection))
  },
  getCollections: (req, res) => {
    Collection.find({}, { items: 0 })
      .lean()
      .then((collections) => res.json(collections))
  },
  getCollection: (req, res) => {
    Collection.findById(req.params.collectionId, { items: 0 })
      .lean()
      .then((collection) => res.json(collection))
  },
  updateCollection: (req, res) => {
    Collection.findByIdAndUpdate(req.params.collectionId, req.body, {
      new: true,
      select: { items: 0 }
    })
      .then((collection) => res.json(collection))
  },
  deleteCollection: (req, res) => {
    Collection.findByIdAndDelete(req.params.collectionId)
      .then(() => res.sendStatus(204))
  },
  addItem: (req, res) => {
    Collection.findById(req.params.collectionId)
      .then((collection) => {
        const newItem = collection.items.create(req.body)
        collection.items.push(newItem)
        return collection.save()
          .then(() => res.json(newItem))
      })
  },
  getItems: (req, res) => {
    Collection.findById(req.params.collectionId, { items: 1 })
      .lean()
      .then(({ items }) => res.json(items))
  },
  getItem: (req, res) => {
    Collection.findById(req.params.collectionId)
      .then((collection) => {
        res.json(collection.items.id(req.params.itemId))
      })
  },
  updateItem: (req, res) => {
    Collection.findById(req.params.collectionId)
      .then((collection) => {
        const item = collection.items.id(req.params.itemId)
        Object.assign(item, req.body)
        return collection.save()
          .then(() => res.json(item))
      })
  },
  deleteItem: (req, res) => {
    Collection.findById(req.params.collectionId)
      .then((collection) => {
        collection.items.pull(req.params.itemId)
        return collection.save()
          .then(() => res.sendStatus(204))
      })
  }
}

module.exports = controller
