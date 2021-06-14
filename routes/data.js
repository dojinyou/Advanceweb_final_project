const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { employee } = require('../models');

// 사번 form validation 시에 요청 처리
router.get('/employee/emp_id', async function (req, res, next) {
	// web id가 없는 전체 employee list 불러오기
	const employees = await employee.findAll({
		attributes: ['EMP_ID'],
		raw: true,
		where: {
			EMP_WEB_ID: null,
		},
	});
	// id만 담아서 보내기
	const emp_ids = [];
	for (const data of employees) {
		emp_ids.push(data['EMP_ID']);
	}
	res.json(emp_ids);
});

// web id 중복 방지를 위한 form validation 처리
router.get('/employee/emp_web_id', async function (req, res, next) {
	// web id를 가진 모든 employee들을 불러서
	const employees = await employee.findAll({
		attributes: ['EMP_WEB_ID'],
		raw: true,
		where: {
			EMP_WEB_ID: { [Op.ne]: null },
		},
	});
	// web id만 저장해서 보내기
	const emp_webids = [];
	for (const data of employees) {
		emp_webids.push(data['EMP_WEB_ID']);
	}
	res.json(emp_webids);
});

module.exports = router;
