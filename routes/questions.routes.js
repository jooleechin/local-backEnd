const router = require('express').Router()
const { questionsController } = require('../controllers')

router.get('/', questionsController.getAllQuestions)
router.get('/users/:id', questionsController.getOneByUser)

module.exports = router
