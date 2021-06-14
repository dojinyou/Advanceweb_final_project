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

// 평가 페이지 렌더링 처리
router.get('/', isLoggedIn, async function (req, res, next) {
	const ep_id = req.query.ep_id;
	// 평가 하기 위한 직원의 프로젝트 참여 정보 확인
	const eval_id = await emp_proj.findOne({
		raw: true,
		where: {
			EMP_ID: req.user.EMP_ID,
			PRO_ID: req.query.proj_id,
		},
	});

	//위에서 구한 ep id 정보를 이용한 여러 table의 정보 통합해서 모으기
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

	// 이전에 평가가 있다면 평가 결과 가져오기
	const epe_result = await emp_proj_eval.findOne({
		raw: true,
		where: {
			EVALUATOR: eval_id.EP_ID,
			EP_ID: req.query.ep_id,
		},
	});
	res.render('evaluate', {
		user: req.user,
		ep_id,
		ep_result,
		epe_result,
	});
});

// 평가 추가 및 업데이트 요청에 대한 처리
router.post('/write', isLoggedIn, async function (req, res, next) {
	// 직원과 프로젝트 정보를 이용한 프로젝트 직원 참여 아이디 가져오기
	const eval_id = await emp_proj.findOne({
		raw: true,
		where: {
			EMP_ID: req.user.EMP_ID,
			PRO_ID: req.query.proj_id,
		},
	});

	// 사전에 평가 정보가 있는 지 확인
	const exEval = await emp_proj_eval.findOne({
		raw: true,
		where: {
			EVALUATOR: eval_id.EP_ID,
			EP_ID: req.query.ep_id,
		},
	});
	// 평가가 있다면 update 실행
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
		// 평가가 없다면 새로운 평가 생성
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
	// 평가 완료 후 다시 평가자 리스트로 돌아가기
	res.redirect(`/eval/list/${req.query.proj_id}`);
});

// 내 평가 결과 확인을 위한 페이지 렌더링
router.get('/result', isLoggedIn, async function (req, res, next) {
	// 내가 참여한 프로젝트들 전부 확인하기
	const eps = await emp_proj.findAll({
		raw: true,
		include: {
			model: project,
		},
		where: {
			EMP_ID: req.user.EMP_ID,
			EP_END_DATE: { [Sequelize.Op.ne]: null },
		},
	});
	// 참여 프로젝트에 대해서 평가 결과 모으기
	const ep_results = [];
	for (const ep of eps) {
		const ep_result = { TITLE: ep['project.PRO_TITLE'] };
		// 참여프로젝트 하나에 대한 평가 결과 가져오기
		// 가져오는 과정에서 해당 평가 결과 요약
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
		// 요약된 정보를 추가하기
		ep_result.pe_agg = pe_result_array[0];

		// 고객 평가 정보 가져오기
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
		// 평가정보 모은 객체를 다시 리스트에 추가하기
		ep_results.push(ep_result);
	}
	// 모든 평가 정보를 보내기
	res.render('eval_result', {
		user: req.user,
		ep_results: ep_results,
	});
});

// 평가를 위한 참여 프로젝트 리스트 페이지 렌더링
router.get('/list/:projID', isLoggedIn, async function (req, res, next) {
	// 해당 프로젝트에 참여한 직원 정보 가져오기
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
	// 프로젝트 정보 가져오기
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

// 평가 삭제 요청에 대한 처리
router.get('/delete', isLoggedIn, async (req, res, next) => {
	// 삭제 요청에 대한 삭제 처리
	await emp_proj_eval.destroy({
		where: {
			EPE_ID: req.query.epe_id,
		},
	});
	res.redirect(`/eval/list/${req.query.proj_id}`);
});
module.exports = router;
