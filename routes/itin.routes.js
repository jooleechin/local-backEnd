const router = require('express').Router()
const { itinController } = require('../controllers')

router.get('/', itinController.all)
router.get('/user/:id', itinController.oneByUserId)
router.get('/:id', itinController.oneById)
router.put('/:id', itinController.edit)
router.delete('/:id', itinController.erase)

module.exports = router
