var express = require('express');
var router = express.Router();
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

router.get('/', async function (req, res, next) {
	if (req.cookies['user'] !== undefined) {
		const ep_id = req.query.ep_id;
		const emp_id = req.query.emp_id;
		const ep_result = await emp_proj.findOne({
			raw: true,
			include: [
				{
					model: role,
					atrributes: ['ROLE_NAME'],
				},
				{
					model: project,
					atrributes: ['PRO_TITLE'],
				},
			],
			where: { EP_ID: ep_id },
		});
		console.log(ep_result);
		res.render('evaluate', {
			user: req.cookies['user'],
			ep_id: ep_id,
			emp_id: emp_id,
			ep_result: ep_result,
		});
	} else {
		res.redirect('/signIn');
	}
});
router.post('/write', async function (req, res, next) {
	if (req.cookies['user'] !== undefined) {
		const new_data = await emp_proj_eval.update({
			EVALUATOR: req.cookies['user'].EMP_ID,
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
					[
						sequelize.fn('avg', sequelize.col('PROJ_COM_SCORE')),
						'avg_com_score',
					],
					[
						sequelize.fn('max', sequelize.col('PROJ_COM_SCORE')),
						'max_com_score',
					],
					[
						sequelize.fn('min', sequelize.col('PROJ_COM_SCORE')),
						'min_com_score',
					],
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
			console.log(ep_result);
			ep_results.push(ep_result);
		}
		console.log(ep_results);
		res.render('result', {
			user: req.cookies['user'],
			ep_results: ep_results,
		});
	} else {
		res.redirect('/signIn');
	}
});
router.get('/list/:projID', async function (req, res, next) {
	if (req.cookies['user'] !== undefined) {
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
		const proj_title = await project
			.findOne({
				raw: true,
				where: {
					PRO_ID: req.params.projID,
				},
			})
			.then((proj) => {
				return proj.PRO_TITLE;
			});
		res.render('eval_list', {
			user: req.cookies['user'],
			proj_name: proj_title,
			employees: emp_result,
		});
	} else {
		res.redirect('/signIn');
	}
});

module.exports = router;
