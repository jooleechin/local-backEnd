const questionsModel = require('../models/questions.models')

let getAllQuestions = (req, res, next) => {
  questionsModel.getAllQuestions().then(questions => res.json({ questions }))
}

let getOneByUser = (req, res, next) => {
  questionsModel.getOneByUser(req.params.id).then(one => res.json({ one }))
}

module.exports = {
  getAllQuestions,
  getOneByUser
}
