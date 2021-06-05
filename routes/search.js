const express = require('express');
const router = express.Router();
const { employee, dept } = require('../models');
/* GET users listing. */
router.get('/result', async function (req, res, next) {
	const emp_name = req.query.emp_name;
	const dept_name = req.query.dept_name;
	let search_result;
	if (!emp_name) {
		if (dept_name) {
			search_result = await employee.findAll({
				raw: true,
				incloude: [
					{
						model: dept,
						where: {
							DEPT_NAME: dept_name,
						},
					},
				],
			});
		} else {
			search_result = await employee.findAll({
				raw: true,
				incloude: [
					{
						model: dept,
					},
				],
			});
		}
	} else {
		if (dept_name) {
			search_result = await employee.findAll({
				raw: true,
				incloude: [
					{
						model: dept,
						where: {
							DEPT_NAME: dept_name,
						},
					},
				],
				where: {
					EMP_NAME: emp_name,
				},
			});
		} else {
			search_result = await employee.findAll({
				raw: true,
				incloude: [
					{
						model: dept,
					},
				],
				where: {
					EMP_NAME: emp_name,
				},
			});
		}
	}
	res.render('searchResult', {
		emp_name,
		dept_name,
		search_result,
	});
});
// router.get('/result/:emp_id', async function (req, res, next) {

// };
module.exports = router;
