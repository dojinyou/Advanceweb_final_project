const express = require('express');
const router = express.Router();
const { employee, dept } = require('../models');
const { isLoggedIn } = require('./middlewares');

// 일반직원 검색 처리
router.get(
	'/result/:sortCondition',
	isLoggedIn,
	async function (req, res, next) {
		const emp_name = req.query.emp_name;
		const dept_name = req.query.dept_name;
		let search_result;
		if (!emp_name) {
			if (dept_name != '전체') {
				search_result = await employee.findAll({
					raw: true,
					include: {
						model: dept,
						where: {
							DEPT_NAME: dept_name,
						},
					},
				});
				console.log(search_result);
			} else {
				search_result = await employee.findAll({
					raw: true,
					include: {
						model: dept,
					},
				});
			}
		} else {
			if (dept_name != '전체') {
				search_result = await employee.findAll({
					raw: true,
					include: {
						model: dept,
						where: {
							DEPT_NAME: dept_name,
						},
					},
					where: {
						EMP_NAME: emp_name,
					},
				});
			} else {
				search_result = await employee.findAll({
					raw: true,
					include: {
						model: dept,
					},
					where: {
						EMP_NAME: emp_name,
					},
				});
			}
		}
		search_result = search_result.sort(function (a, b) {
			return a[`${req.params.sortCondition}`] < b[`${req.params.sortCondition}`]
				? -1
				: 1;
		});
		res.render('searchResult', {
			user: req.user,
			emp_name,
			dept_name,
			sortCondition: req.params.sortCondition,
			search_result,
		});
	}
);
module.exports = router;
