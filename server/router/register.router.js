const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user.model');


router.post("/", (req, res , next) => {
    console.log(req.body);
    res.status(200).json
    ({
        message:"message received successfully from post on api/register "
    })

});


module.exports = router;
