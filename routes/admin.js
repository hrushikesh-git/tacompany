const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');

router.get('/',(req,res)=>{
    res.send("Testing");
})

module.exports = router;