const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth")
const ParentsInfo = require('../model/parentsInfo')
const adds = require('../model/addressInfo')

const User = require("../model/userInfo");
const jwt = require('jsonwebtoken');

router.post("/parentsinfo", auth, (req, res, next) => {

    const parentsInfo = new ParentsInfo({
        _id: new mongoose.Types.ObjectId(),
      mother_name: req.body.mother_name,
      father_name: req.body.father_name,
      Parent_email: req.body.Parent_email
     
    });


    parentsInfo
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "saved successfully",
          savedInfo: {
            mother_name: req.body.mother_name,
            email: req.body.email,
            _id: result._id,
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

  router.post("/addressinfo", auth, (req, res, next) => {
    const addsInfo = new adds({
        _id: new mongoose.Types.ObjectId(),
        parma_address: req.body.parma_address,
        parma_comm: req.body.parma_comm,
        parma_buss: req.body.parma_buss
     
    });
    addsInfo
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "saved successfully",
          savedInfo: {
            parma_address: req.body.parma_address,
            _id: result._id,
          }
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