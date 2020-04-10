const express = require('express')
const router = express.Router()

const controller = require('../controllers/collection')

router.post('/', controller.createCollection)
router.get('/', controller.getCollections)
router.get('/:collectionId', controller.getCollection)
router.put('/:collectionId', controller.updateCollection)
router.delete('/:collectionId', controller.deleteCollection)

router.post('/:collectionId/item', controller.addItem)
router.get('/:collectionId/item', controller.getItems)
router.get('/:collectionId/item/:itemId', controller.getItem)
router.put('/:collectionId/item/:itemId', controller.updateItem)
router.delete('/:collectionId/item/:itemId', controller.deleteItem)

module.exports = router
