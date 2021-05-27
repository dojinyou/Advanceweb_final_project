var express = require('express');
var router = express.Router();
const {
	role,
	project,
	cus_order,
	customer,
	proj_plan,
	emp_proj,
} = require('../models');

/* GET project page. */
router.get('/', function (req, res, next) {
	if (req.cookies['user'] !== undefined) {
		res.render('project', {
			user: req.cookies['user'],
			projs: req.cookies['projs'],
			// projs: [
			// 	{
			// 		PRO_ID: 1,
			// 		PRO_TITLE: '테스트 이름',
			// 		PRO_TYPE: '테스트 종류',
			// 		PRO_START_DATE: '2222.02.22',
			// 		PRO_START_DATE: '3333.03.30',
			// 	},
			// ],
		});
	} else {
		res.redirect('/signIn');
	}
});

router.get('/:projID', async function (req, res, next) {
	if (req.cookies['user'] !== undefined) {
		// const project_result = await project
		// 	.findOne({
		// 		where: {
		// 			PRO_ID: req.params.projID,
		// 		},
		// 	})
		// 	.then((result) => {
		// 		return result.dataValues;
		// 	});
		// const order_result = await cus_order.findAll({
		// 	include: [
		// 		{
		// 			model: customer,
		// 		},
		// 	],
		// 	where: { ORDER_ID: project_result.ORDER_ID },
		// });
		// const pPlan_result = await proj_plan.findAll({
		// 	where: { PRO_ID: project_result.PRO_ID },
		// });
		// const proj_emp_result = await emp_proj.findAll({
		// 	include: [
		// 		{
		// 			model: role,
		// 		},
		// 	],
		// 	where: { PRO_ID: project_result.PRO_ID },
		// });
		res.render('projectDetail', {
			user: req.cookies['user'],
			// proj: project_result,
			proj: {
				PRO_ID: 1,
				ORDER_ID: 1,
				PRO_TITLE: '테스트 프로젝트',
				PRO_TYPE: '테스트 타입',
				PRO_START_DATE: '2222.02.02',
				PRO_END_DATE: '2233.02.22',
			},
			// order: order_result,
			order: {
				ORDER_ID: 1,
				CUS_ID: 1,
				ORDER_DATE: '2222.02.02',
				ORDER_COMMENT: '테스트코멘트',
				customer: {
					CUS_ID: 1,
					CUS_NAME: '테스트고객',
				},
			},
			// pPlans: pPlan_result,
			pPlans: [
				{
					PP_ID: 1,
					PRO_ID: 1,
					PLAN_TYPE: '요구사항정의서',
					START_DATE: '2222.02.22',
					END_DATE: '3333.03.30',
					PERIOD: '3개월',
					DEPENDENCY: null,
					STATUS: 1,
				},
			],
			// employees: proj_emp_result,
			employees: [
				{
					EP_ID: 1,
					EMP_ID: 1,
					PRO_ID: 1,
					ROLE_ID: 1,
					EP_START_DATE: '2222.02.02',
					EP_END_DATE: '2323.02.03',
					role: {
						ROLE_ID: 1,
						ROLE_NAME: '테스트개발자',
					},
				},
			],
		});
	} else {
		res.redirect('/signIn');
	}
});

module.exports = router;
