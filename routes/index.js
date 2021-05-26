const express = require('express');
const router = express.Router();
const { employee, project } = require('../models');
// const mysql_odbc = require('../db/db_conn')();
// const conn = mysql_odbc.init();

/* GET home page. */
router.get('/', function (req, res, next) {
	if (req.cookies['userID'] !== undefined) {
		res.redirect('/main');
	} else {
		res.redirect('/signIn');
	}
});

router.get('/main', function (req, res, next) {
	res.render('main');
});

/* GET login page */
router.get('/signIn', function (req, res, next) {
	res.render('signIn');
});

router.get('/signUp', function (req, res, next) {
	res.render('signUp');
});
router.post('/signUp', async function (req, res, next) {
	try {
		console.log(`web_id = ${req.body.username}`);
		console.log(`web_pw = ${req.body.password}`);
		console.log(`user_id = ${req.body.userID}`);
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
// router.get('/', function (req, res, next) {
// 	const dept = 'DEPT1';
// 	const name = '홍길동';
// 	const sql1 = 'SELECT idx, title FROM notice;';
// 	const sql2 = 'SELECT proj_id, proj_name, proj_start_date FROM project;';
// 	conn.query(sql1 + sql2, function (err, rows) {
// 		if (err) console.error('err: ' + err);
// 		res.render('index', {
// 			title: 'Prompt Solution',
// 			dept: dept,
// 			name: name,
// 			rows1: rows[0],
// 			rows2: rows[1],
// 		});
// 	});
// });

module.exports = router;
