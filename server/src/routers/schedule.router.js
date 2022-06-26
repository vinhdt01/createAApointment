
const express = require('express');
const router = express.Router();
const {CreateSchedule} = require('../controllers/schedule.controller.js')
const {Auth} = require('../middleware/auth.middleware.js')
    
router.post('/' , Auth, CreateSchedule)


module.exports = router;
