const express = require('express');
const app = express();




app.use("/" , (req, res) => {
res.send("app is running");
});
module.exports=app;