const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth")

const User = require("../model/userInfo");
const jwt = require('jsonwebtoken');

router.post("/signup", (req, res, next) => {
  const mobileNumber = req.body.mobile_number
  User.find({ mobile_number:mobileNumber })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mobile no exists"
        });
      } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              mobile_number: mobileNumber,
              dob:req.body.dob,
              roll_number:req.body.roll_number,
              user_role:req.body.user_role,
              name:req.body.name
              
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
           }
    });
  }
)

router.post("/login", (req, res, next) => {
  User.find({ name: req.body.name })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
        if (req.body.mobile_number==user[0].mobile_number) {
          const token = jwt.sign(
            {
              mobile_number: user[0].mobile_number,
              userId: user[0]._id
            },
            "rohit",
            {
                expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token
          });
        }
        res.status(401).json({
          message: "Auth failed"
        });
      
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router