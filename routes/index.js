const express = require('express');
const router = express.Router();
// I am not sure of the routes 
router.use('/', require('./application.js'));
router.use('/user', require('./user'));
router.use('/recipe', require('./recipe'));

router.all('*', (req, res) => {
  res.status(400).send();
});

module.exports = router;