const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { employee, sequelize } = require('../models');

router.get('/employee/emp_id', async function (req, res, next) {
	const employees = await employee.findAll({
		attributes: ['EMP_ID'],
		raw: true,
		where: {
			EMP_WEB_ID: null,
		},
	});
	const emp_ids = [];
	for (const data of employees) {
		emp_ids.push(data['EMP_ID']);
	}
	res.json(emp_ids);
});
router.get('/employee/emp_web_id', async function (req, res, next) {
	const employees = await employee.findAll({
		attributes: ['EMP_WEB_ID'],
		raw: true,
		where: {
			EMP_WEB_ID: { [Op.ne]: null },
		},
	});
	const emp_webids = [];
	for (const data of employees) {
		emp_webids.push(data['EMP_WEB_ID']);
	}
	res.json(emp_webids);
});

module.exports = router;
