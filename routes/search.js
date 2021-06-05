const express = require('express');
const router = express.Router();
const { employee, dept } = require('../models');
/* GET users listing. */
router.get('/result/:sortCondition', async function (req, res, next) {
	const emp_name = req.query.emp_name;
	const dept_name = req.query.dept_name;
	let search_result = [
		{
			EP_ID: 1,
			EMP_ID: 1,
			EMP_RANK: '사원',
			EMP_NAME: '홍길동3',
			PRO_ID: 1,
			ROLE_ID: 1,
			EP_START_DATE: '2021-01-01',
			EP_END_DATE: '2022-01-01',
			DEPT: {
				ROLE_ID: 1,
				DEPT_NAME: '테스트부서2',
			},
		},
		{
			EP_ID: 2,
			EMP_ID: 2,
			EMP_NAME: '홍길동2',
			EMP_RANK: '사원1',
			PRO_ID: 1,
			ROLE_ID: 1,
			EP_START_DATE: '2021-03-01',
			EP_END_DATE: '2022-01-01',
			DEPT: {
				ROLE_ID: 1,
				DEPT_NAME: '테스트부서1',
			},
		},
		{
			EP_ID: 3,
			EMP_ID: 3,
			EMP_RANK: '사원2',
			EMP_NAME: '홍길동1',
			PRO_ID: 1,
			ROLE_ID: 1,
			EP_START_DATE: '2021-03-01',
			EP_END_DATE: '2021-07-01',
			DEPT: {
				ROLE_ID: 1,
				DEPT_NAME: '테스트부서2',
			},
		},
	];
	// if (!emp_name) {
	// 	if (dept_name) {
	// 		search_result = await employee.findAll({
	// 			raw: true,
	// 			incloude: [
	// 				{
	// 					model: dept,
	// 					where: {
	// 						DEPT_NAME: dept_name,
	// 					},
	// 				},
	// 			],
	// 		});
	// 	} else {
	// 		search_result = await employee.findAll({
	// 			raw: true,
	// 			incloude: [
	// 				{
	// 					model: dept,
	// 				},
	// 			],
	// 		});
	// 	}
	// } else {
	// 	if (dept_name) {
	// 		search_result = await employee.findAll({
	// 			raw: true,
	// 			incloude: [
	// 				{
	// 					model: dept,
	// 					where: {
	// 						DEPT_NAME: dept_name,
	// 					},
	// 				},
	// 			],
	// 			where: {
	// 				EMP_NAME: emp_name,
	// 			},
	// 		});
	// 	} else {
	// 		search_result = await employee.findAll({
	// 			raw: true,
	// 			incloude: [
	// 				{
	// 					model: dept,
	// 				},
	// 			],
	// 			where: {
	// 				EMP_NAME: emp_name,
	// 			},
	// 		});
	// 	}
	// }
	search_result = search_result.sort(function (a, b) {
		return a[`${req.params.sortCondition}`] < b[`${req.params.sortCondition}`]
			? -1
			: 1;
	});
	// console.log(search_result);
	res.render('searchResult', {
		emp_name,
		dept_name,
		sortCondition: req.params.sortCondition,
		search_result,
	});
});
module.exports = router;
