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
				PRO_TITLE: '안드로이드 앱 개발',
				PRO_TYPE: 'android',
				PRO_START_DATE: '2021-01-01',
				PRO_END_DATE: '2022-01-01',
			},
			// order: order_result,
			order: {
				ORDER_ID: 1,
				CUS_ID: 1,
				ORDER_DATE: '2021.01.01',
				ORDER_COMMENT: '이렇게 하시면 아주 큰일납니다.',
				customer: {
					CUS_ID: 1,
					CUS_NAME: '전종훈',
				},
			},
			// pPlans: pPlan_result,
			pPlans: [
				{
					PP_ID: 1,
					PRO_ID: 1,
					PLAN_TYPE: '프로젝트 설계',
					START_DATE: '2021-03-01',
					END_DATE: '2021-06-30',
					PERIOD: '3개월',
					DEPENDENCY: null,
					STATUS: '진행중',
				},
				{
					PP_ID: 2,
					PRO_ID: 1,
					PLAN_TYPE: '프로젝트 개발',
					START_DATE: '2021-07-01',
					END_DATE: '2022-02-15',
					PERIOD: '8개월',
					DEPENDENCY: null,
					STATUS: '시작 전',
				},
				{
					PP_ID: 3,
					PRO_ID: 1,
					PLAN_TYPE: '프로젝트 테스트',
					START_DATE: '2022-02-16',
					END_DATE: '2022-05-01',
					PERIOD: '3개월',
					DEPENDENCY: '프로젝트 개발',
					STATUS: '시작 전',
				},
			],
			// employees: proj_emp_result,
			employees: [
				{
					EP_ID: 1,
					EMP_ID: 1,
					PRO_ID: 1,
					ROLE_ID: 1,
					EP_START_DATE: '2021-01-01',
					EP_END_DATE: '2022-01-01',
					role: {
						ROLE_ID: 1,
						ROLE_NAME: '개발자',
					},
				},
				{
					EP_ID: 2,
					EMP_ID: 2,
					PRO_ID: 1,
					ROLE_ID: 1,
					EP_START_DATE: '2021-03-01',
					EP_END_DATE: '2022-01-01',
					role: {
						ROLE_ID: 1,
						ROLE_NAME: '개발자',
					},
				},
				{
					EP_ID: 3,
					EMP_ID: 3,
					PRO_ID: 1,
					ROLE_ID: 1,
					EP_START_DATE: '2021-03-01',
					EP_END_DATE: '2021-07-01',
					role: {
						ROLE_ID: 1,
						ROLE_NAME: '개발자',
					},
				},
			],
		});
	} else {
		res.redirect('/signIn');
	}
});

module.exports = router;
