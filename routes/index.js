const express = require('express');
const router = express.Router();
const { employee, dept, emp_proj, project } = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
	if (req.cookies['user'] !== undefined) {
		res.redirect('/main');
	} else {
		res.redirect('/signIn');
	}
});

router.get('/main', async function (req, res, next) {
	if (req.cookies['user'] !== undefined) {
		// console.log(req.cookies['user']);
		res.render('main', {
			user: req.cookies['user'],
			projs: req.cookies['projs'],
		});
	} else {
		res.redirect('/signIn');
	}
});

/* GET login page */
router.get('/signIn', function (req, res, next) {
	res.render('signIn');
});
router.post('/signIn', async function (req, res, next) {
	const { userID, userPW } = req.body;
	const result = await employee.findOne({
		raw: true,
		where: {
			EMP_WEB_ID: userID,
		},
	});
	if (result.EMP_WEB_PW == userPW) {
		// 로그인 성공
		const dept_name = await dept.findOne({
			raw: true,
			where: {
				DEPT_ID: result.DEPT_ID,
			},
		});
		result.DEPT_NAME = `${dept_name.DEPT_NAME}`;
		const projs = await emp_proj.findAll({
			raw: true,
			include: [
				{
					model: project,
				},
			],
			where: {
				EMP_ID: result.EMP_ID,
			},
		});
		// console.log(result);
		// console.log(projs);
		res.cookie('user', result, { maxAge: 600000 });
		res.cookie('projs', projs, { maxAge: 600000 });
		res.redirect('/');
	} else {
		// 로그인 실패
		res.redirect('/signIn');
	}
});

router.get('/signUp', function (req, res, next) {
	res.render('signUp');
});
router.post('/signUp', async function (req, res, next) {
	try {
		const result = await employee.update(
			{
				EMP_WEB_ID: req.body.username,
				EMP_WEB_PW: req.body.password,
			},
			{
				where: {
					EMP_ID: req.body.userID,
				},
			}
		);
		res.redirect('/signIn');
	} catch (err) {
		console.error(err);
		res.redirect('/signUp');
	}
});

module.exports = router;
