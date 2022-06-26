
const express = require('express');
const router = express.Router();
const {Login} = require('../controllers/login.controller.js')
   
    
router.post('/' , Login )



module.exports = router;
