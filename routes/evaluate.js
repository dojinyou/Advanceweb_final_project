var express = require('express');
var router = express.Router();
const { isLoggedIn } = require('./middlewares');
const {
	role,
	project,
	employee,
	emp_proj,
	emp_proj_eval,
	cus_proj_eval,
	sequelize,
	Sequelize,
} = require('../models');

router.get('/', isLoggedIn, async function (req, res, next) {
	const ep_id = req.query.ep_id;
	const eval_id = await emp_proj.findOne({
		raw: true,
		where: {
			EMP_ID: req.user.EMP_ID,
			PRO_ID: req.query.proj_id,
		},
	});
	const ep_result = await emp_proj.findOne({
		raw: true,
		include: [
			{
				model: role,
				atrributes: ['ROLE_NAME'],
			},
			{
				model: project,
				atrributes: ['PRO_TITLE', 'PRO_ID'],
			},
			{
				model: employee,
				atrributes: ['EMP_NAME'],
			},
		],
		where: { EP_ID: ep_id },
	});
	const epe_result = await emp_proj_eval.findOne({
		raw: true,
		where: {
			EVALUATOR: eval_id.EP_ID,
			EP_ID: req.query.ep_id,
		},
	});
	console.log(epe_result);
	res.render('evaluate', {
		user: req.user,
		ep_id,
		ep_result,
		epe_result,
	});
});
router.post('/write', isLoggedIn, async function (req, res, next) {
	const eval_id = await emp_proj.findOne({
		raw: true,
		where: {
			EMP_ID: req.user.EMP_ID,
			PRO_ID: req.query.proj_id,
		},
	});
	const exEval = await emp_proj_eval.findOne({
		raw: true,
		where: {
			EVALUATOR: eval_id.EP_ID,
			EP_ID: req.query.ep_id,
		},
	});
	if (exEval) {
		await emp_proj_eval.update(
			{
				PROJ_PE_SCORE: req.body.pe_score,
				PROJ_PE_COMMENT: req.body.pe_comment,
				PROJ_COM_SCORE: req.body.com_score,
				PROJ_COM_COMMENT: req.body.com_comment,
			},
			{
				where: {
					EPE_ID: exEval.EPE_ID,
				},
			}
		);
	} else {
		await emp_proj_eval.create({
			EVALUATOR: eval_id.EP_ID,
			EP_ID: req.query.ep_id,
			PROJ_PE_SCORE: req.body.pe_score,
			PROJ_PE_COMMENT: req.body.pe_comment,
			PROJ_COM_SCORE: req.body.com_score,
			PROJ_COM_COMMENT: req.body.com_comment,
		});
	}
	res.redirect(`/eval/list/${req.query.proj_id}`);
});

router.get('/result/:userID', isLoggedIn, async function (req, res, next) {
	const eps = await emp_proj.findAll({
		raw: true,
		include: {
			model: project,
		},
		where: {
			EMP_ID: req.params.userID,
			EP_END_DATE: { [Sequelize.Op.ne]: null },
		},
	});
	const ep_results = [];
	for (const ep of eps) {
		const ep_result = { TITLE: ep['project.PRO_TITLE'] };
		const pe_result_array = await emp_proj_eval.findAll({
			raw: true,
			attributes: [
				'EP_ID',
				[sequelize.fn('avg', sequelize.col('PROJ_PE_SCORE')), 'avg_pe_score'],
				[sequelize.fn('max', sequelize.col('PROJ_PE_SCORE')), 'max_pe_score'],
				[sequelize.fn('min', sequelize.col('PROJ_PE_SCORE')), 'min_pe_score'],
			],
			where: { EP_ID: ep.EP_ID },
			group: ['EP_ID'],
		});
		ep_result.pe_agg = pe_result_array[0];
		const com_result_array = await emp_proj_eval.findAll({
			raw: true,
			attributes: [
				'EP_ID',
				[sequelize.fn('avg', sequelize.col('PROJ_COM_SCORE')), 'avg_com_score'],
				[sequelize.fn('max', sequelize.col('PROJ_COM_SCORE')), 'max_com_score'],
				[sequelize.fn('min', sequelize.col('PROJ_COM_SCORE')), 'min_com_score'],
			],
			where: { EP_ID: ep.EP_ID },
			group: ['EP_ID'],
		});
		ep_result.com_agg = com_result_array[0];
		const emp_eval_results = await emp_proj_eval.findAll({
			raw: true,
			where: { EP_ID: ep.EP_ID },
		});
		ep_result.results = emp_eval_results;
	}
	res.render('result', {
		user: req.user,
		ep_results: ep_results,
	});
});
router.get('/list/:projID', isLoggedIn, async function (req, res, next) {
	const emp_result = await emp_proj.findAll({
		raw: true,
		include: [
			{
				model: employee,
			},
			{
				model: role,
			},
		],
		where: { PRO_ID: req.params.projID },
	});
	const proj = await project.findOne({
		raw: true,
		where: {
			PRO_ID: req.params.projID,
		},
	});
	res.render('eval_list', {
		user: req.user,
		proj,
		employees: emp_result,
	});
});

router.get('/delete', isLoggedIn, async (req, res, next) => {
	await emp_proj_eval.destroy({
		where: {
			EPE_ID: req.query.epe_id,
		},
	});
	res.redirect(`/eval/list/${req.query.proj_id}`);
});
module.exports = router;
