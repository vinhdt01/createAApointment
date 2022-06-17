// const express = require('express');  
// const controller = require('../controllers/user.controller.js')
// const router = express()
// router.get('/hello' , (req , res) => {
//     res.send('Hello')
// })
// module.exports = router;
const express = require('express');
const router = express.Router();
const {Register} = require('../controllers/register.controller.js')
   
    
router.post('/' , Register)



module.exports = router;

