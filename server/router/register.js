const express = require('express');
const router = express.Router();
router.post("/", (req, res , next) => {
    res.status(200).json
    ({
        message:"message received successfully from post on api/ signup "
    })

});


module.exports = router;
