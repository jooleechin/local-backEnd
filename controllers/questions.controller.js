const questionsModel = require('../models/questions.models')

let getAllQuestions = (req, res, next) => {
  questionsModel.getAllQuestions()
    .then(questions => res.json({ questions }))
    .catch(err => {
      res.json({ err })
      console.log(err)
    })
}

let getOneByItinID = (req, res, next) => {
  questionsModel.getOneByItinID(req.params.id)
  .then(one => res.json({ one }))
  .catch(err => {
    res.json({ err })
    console.log(err)
  })
}

let getQuestionByUserAndItin = (req, res, next) => {
  questionsModel.getQuestionByUserAndItin(req.params.user_id, req.params.itin_id)
  .then(one => res.json({ one }))
  .catch(err => {
    res.json({ err })
    console.log(err)
  })
}

let getOneByUser = (req, res, next) => {
  questionsModel.getOneByUser(req.params.id)
    .then(one => res.json({ one }))
    .catch(err => {
      res.json({ err })
      console.log(err)
    })
}

let edit = (req, res, next) => {
  questionsModel.edit(req.params.id)
    .then(one => res.json({ one }))
    .catch(err => {
      res.json({ err })
      console.log(err)
    })
}

let create = (req, res, next) => {
  let { user_id, destination, lat_stay, lng_stay, q1_transport, q2_money, q3_time, q4_interests, itin_id } = req.body
  questionsModel.create(user_id, destination, lat_stay, lng_stay, q1_transport, q2_money, q3_time, q4_interests, itin_id)
    .then(question => res.json({ question }))
    .catch(err => {
      res.json({ err })
      console.log(err)
    })
}
module.exports = {
  getAllQuestions,
  getOneByUser,
  edit,
  create,
  getOneByItinID,
  getQuestionByUserAndItin
}
