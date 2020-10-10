const express = require("express")
const todoRouter = express.Router()
const Todo = require('../models/todo.js')

//FIND ONE
user.put("/user", (req, res, next) =>{
  user.findOne(
      {username: req.params.username},
      req.body,
      {new: true},
      (err, updatedusername) => {
          if(err){
              res.status(500)
              return next(err)
          }
          return res.status(201).send(updatedusername)
      }

  )
})

//FIND ALL

user.put("/user", (req, res, next) =>{
  user.findAll(
      {username: req.params.username},
      req.body,
      {new: true},
      (err, allusername) => {
          if(err){
              res.status(500)
              return next(err)
          }
          return res.status(201).send(allusername)
      }

  )
})

//CREATE

user.post("/user", (req, res, next) => {
  const newUser = new user(req.body)
  newUser.save((err, saveUser) => {
      if(err) {
          res.status(500)
          return next(err)
      }
      return res.status(201).send(saveUser)
      })
  })

  // DELTE

  user.delete("/user", (req, res) => {
    user.findOneAndDelete({ username: req.params.username}, (err, deletedUser) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send("User deleted.")
    })
})

//UPDATE

user.put("/user", (req, res, next) =>{
  user.findOneAndUpdate(
      {username: req.params.username},
      req.body,
      {new: true},
      (err, updatedusername) => {
          if(err){
              res.status(500)
              return next(err)
          }
          return res.status(201).send(updatedusername)
      }

  )
})