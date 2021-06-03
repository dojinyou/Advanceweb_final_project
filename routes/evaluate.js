var express = require('express');
var router = express.Router();
const {
	role,
	project,
	employee,
	emp_proj,
	emp_proj_eval,
} = require('../models');

router.get('/', async function (req, res, next) {
	if (req.cookies['user'] !== undefined) {
		// emp_id=req.query.emp_id,
		// proj_id=req.query.proj_id,
		// const proj = await project
		// 	.findOne({
		// 		where: { PRO_ID: req.query.proj_id },
		// 	})
		// 	.then((result) => {
		// 		return result.dataValues;
		// 	});
		// const emp = await employee
		// 	.findOne({
		// 		include: [
		// 			{
		// 				model: emp_proj,
		// 				atrributes: [ROLE_ID],
		// 				include: [
		// 					{
		// 						model: role,
		// 					},
		// 				],
		// 			},
		// 		],
		// 		where: { EMP_ID: req.query.emp_id },
		// 	})
		// 	.then((result) => {
		// 		return result.dataValues;
		// 	});
		res.render('evaluate', {
			user: req.cookies['user'],
			// proj: proj,
			proj: {
				PRO_TITLE: '안드로이드 앱 개발',
				PRO_ID: 1,
			},
			// emp: emp,
			emp: {
				EMP_NAME: '박선진',
				EMP_ID: 2,
				role: { ROLE_NAME: '개발자' },
			},
		});
	} else {
		res.redirect('/signIn');
	}
});
router.post('/write', async function (req, res, next) {
	if (req.cookies['user'] !== undefined) {
		const new_data = await emp_proj_eval.create({
			EVALUATOR: req.cookies['user'].EMP_ID,
			EP_ID: req.query.ep_id,
			PROJ_PE_SCORE: req.params.pe_score,
			PROJ_PE_COMMENT: req.params.pe_comment,
			PROJ_COM_SCORE: req.params.com_score,
			PROJ_COM_COMMENT: req.params.com_comment,
		});
		res.redirect(`/eval/list/${req.query.proj_id}`);
	} else {
		res.redirect('/signIn');
	}
});
router.get('/result/:userID', async function (req, res, next) {
	if (req.cookies['user'] !== undefined) {
		const emp_eval_result = await emp_proj
			.findAll({
				include: [
					{
						model: emp_proj_eval,
						include: [
							{
								model: project,
							},
						],
					},
				],
				where: { EMP_ID: req.query.userID },
			})
			.then((result) => {
				return result.dataValues;
			});
		res.render('result', {
			user: req.cookies['user'],
			emp_evals: emp_eval_result,
		});
	} else {
		res.redirect('/signIn');
	}
});
router.get('/list/:projID', async function (req, res, next) {
	if (req.cookies['user'] !== undefined) {
		// const emp_result = await emp_proj
		// 	.findAll({
		// 		include: [
		// 			{
		// 				model: employee,
		// 				atrributes: [EMP_NAME],
		// 				include: [
		// 					{
		// 						model: role,
		// 					},
		// 				],
		// 			},
		// 		],
		// 		where: { PRO_ID: req.params.projID },
		// 	})
		// 	.then((result) => {
		// 		return result.dataValues;
		// 	});
		res.render('eval_list', {
			user: req.cookies['user'],
			proj_name: '안드로이드 앱 개발',
			// employees: emp_result,
			employees: [
				{
					EP_ID: 1,
					EMP_ID: 1,
					PRO_ID: 1,
					ROLE_ID: 1,
					EP_START_DATE: '2021-01-01',
					EP_END_DATE: '2022-01-01',
					employee: { EMP_NAME: '안동언' },
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
					employee: { EMP_NAME: '박선진' },
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
					employee: { EMP_NAME: '조현아' },
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
