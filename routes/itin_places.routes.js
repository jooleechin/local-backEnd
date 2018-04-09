const router = require('express').Router()
const { itinPlacesController } = require('../controllers')

router.post('/', itinPlacesController.create)
router.get('/', itinPlacesController.all)
router.get('/user/:id', itinPlacesController.oneByUserId)
router.get('/:id', itinPlacesController.oneById)
router.put('/:id', itinPlacesController.edit)
router.delete('/:id', itinPlacesController.erase)

module.exports = router
