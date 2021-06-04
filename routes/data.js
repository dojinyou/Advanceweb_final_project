const express = require('express');
const router = express.Router();
const { employee } = require('../models');

router.get('/employee', async function (req, res, next) {
	const result = employee.find;
});

/* GET login page */
router.get('/signIn', function (req, res, next) {
	res.render('signIn');
});
module.exports = router;
