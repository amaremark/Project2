const express = require('express');
const router = express.Router();
// I am not sure of the routes 
router.use('/', require('./application.js'));
router.use('/tasks', require('./tasks'));
// router.use('/taskes', require('./taskes'));
router.use('/users', require('./users'));

router.all('*', (req, res) => {
  res.status(400).send();
});

module.exports = router;