const express = require('express');
const router = express.Router();
const { employee, dept, emp_proj, project } = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.redirect('/main');
});

router.get('/main', async function (req, res, next) {
	res.render('main', {
		user: {
			DEPT_NAME: '개발',
			EMP_NAME: '홍길동',
		},
		projs: {
			PRO_ID: '1',
			PRO_TITLE: 'TITLE',
			PRO_TYPE: 'TYPE',
			PRO_START_DATE: '1999-12-31',
		}
	});
});

/* GET login page */
router.get('/signIn', function (req, res, next) {
	res.render('signIn');
});
router.post('/signIn', async function (req, res, next) {
	const { userID, userPW } = req.body;
	const result = await employee
		.findOne({
			where: {
				EMP_WEB_ID: userID,
			},
		})
		.then((employee) => {
			return employee.dataValues;
		});
	if (result.EMP_WEB_PW == userPW) {
		// 로그인 성공
		const dept_name = await dept
			.findOne({
				where: {
					DEPT_ID: result.DEPT_ID,
				},
			})
			.then((dept) => {
				return dept.dataValues.DEPT_NAME;
			});
		result.DEPT_NAME = dept_name;
		const projs = await emp_proj.findAll({
			include: [
				{
					model: project,
				},
			],
			where: {
				EMP_ID: result.EMP_ID,
			},
		});
		console.log(projs);
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
		console.log(result);
		res.redirect('/signIn');
	} catch (err) {
		console.error(err);
		res.redirect('/signUp');
	}
});

module.exports = router;
