const router = require('express').Router()
const { usersController } = require('../controllers')

router.get('/', usersController.all)
router.get('/:id', usersController.one)
router.get('/:id/itin', usersController.userItin)
router.put('/:id', usersController.edit)
router.delete('/:id', usersController.erase)

module.exports = router
