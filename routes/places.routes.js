const router = require('express').Router()
const { placesController } = require('../controllers')

router.get('/', placesController.all)
router.get('/:id', placesController.one)
router.post('/', placesController.add)
router.delete('/:id', placesController.erase)

module.exports = router
