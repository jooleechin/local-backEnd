const router = require('express').Router()
const { questionsController } = require('../controllers')

router.get('/', questionsController.getAllQuestions)
router.get('/users/:id', questionsController.getOneByUser)
router.get('/itin/:id', questionsController.getOneByItinID)
router.get('/user/:user_id/itin/:itin_id', questionsController.getQuestionByUserAndItin)
router.put('/:id', questionsController.edit)
router.post('/', questionsController.create)

module.exports = router
