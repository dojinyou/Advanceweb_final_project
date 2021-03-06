const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('./middlewares');
const { emp_proj, project } = require('../models');

// / url 을 main으로 redirect 처리
router.get('/', isLoggedIn, function (req, res, next) {
	res.redirect('/main');
});

// main page 렌더링
router.get('/main', isLoggedIn, async function (req, res, next) {
	const projs = await emp_proj.findAll({
		raw: true,
		include: [
			{
				model: project,
			},
		],
		where: {
			EMP_ID: req.user.EMP_ID,
		},
	});
	res.render('main', {
		user: req.user,
		projs,
	});
});

module.exports = router;
