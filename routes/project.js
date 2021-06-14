var express = require('express');
var router = express.Router();
const { isLoggedIn } = require('./middlewares');
const {
	role,
	project,
	employee,
	customer,
	proj_plan,
	emp_proj,
} = require('../models');

// 프로젝트 페이지 렌더링
router.get('/', isLoggedIn, async function (req, res, next) {
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
	res.render('project', {
		user: req.user,
		projs: projs,
	});
});

// 프로젝트 상세보기 페이지 렌더링
router.get('/:projID', async function (req, res, next) {
	const project_result = await project.findOne({
		raw: true,
		where: {
			PRO_ID: req.params.projID,
		},
	});
	const cus_result = await customer.findOne({
		where: { CUS_ID: project_result.CUS_ID },
	});
	const pPlan_result = await proj_plan.findAll({
		raw: true,
		where: { PRO_ID: project_result.PRO_ID },
	});
	const proj_emp_result = await emp_proj.findAll({
		raw: true,
		include: [
			{
				model: role,
			},
			{
				model: employee,
			},
		],
		where: { PRO_ID: project_result.PRO_ID },
	});
	res.render('projectDetail', {
		user: req.user,
		proj: project_result,
		cus: cus_result,
		pPlans: pPlan_result,
		employees: proj_emp_result,
	});
});

module.exports = router;
