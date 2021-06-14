const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const { isLoggedIn } = require('./middlewares');
const {
	employee,
	sequelize,
	dept,
	proj_plan,
	customer,
	project,
	emp_proj,
	role,
	emp_proj_eval,
} = require('../models');

// 정렬 기준을 통한 직원 리스트 정렬
router.get('/emp/:sortCondition', isLoggedIn, async function (req, res, next) {
	// 경영진인 경우에만 이용 가능
	if (req.user.DEPT_NAME == '경영진') {
		const emp_name = req.query.emp_name;
		const dept_name = req.query.dept_name;
		let search_result;
		// 고객 명이 없는 검색일 경우
		if (!emp_name) {
			// 특정 부서가 지칭된 경우
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
				// 전체 부서인 경우
				search_result = await employee.findAll({
					raw: true,
					include: {
						model: dept,
					},
				});
			}
			//특정 직원명이 입력된 경우
		} else {
			// 특정 부서인 경우
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
				// 전체 부서인 경우
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
		// 조건에 맞는 결과를 가져온 뒤 정렬 기준에 따라 정렬하여 데이터 전송
		search_result = search_result.sort(function (a, b) {
			return a[`${req.params.sortCondition}`] < b[`${req.params.sortCondition}`]
				? -1
				: 1;
		});
		res.render('empManage', {
			user: req.user,
			emp_name,
			dept_name,
			sortCondition: req.params.sortCondition,
			search_result,
		});
	} else {
		// 경영진이 아니라면 메인으로 이동시키기
		res.redirect('/main');
	}
});

// 프로젝트 정보 화면 렌더링
router.get('/proj', isLoggedIn, async function (req, res, next) {
	// 경영진만 이용 가능
	if (req.user.DEPT_NAME == '경영진') {
		const proj_name = req.query.proj_name;
		const results = [];
		// 특정 프로젝트만 찾는 경우
		if (proj_name) {
			const result = {};
			proj_data = await project.findOne({
				raw: true,
				where: {
					PRO_TITLE: proj_name,
				},
			});
			result.proj = proj_data;
			const emp_proj_data = await emp_proj.findAll({
				raw: true,
				attributes: [
					'PRO_ID',
					[sequelize.fn('count', sequelize.col('EMP_ID')), 'NUM_EMP'],
				],
				where: { PRO_ID: proj_date.PRO_ID },
				group: ['PRO_ID'],
			});
			result.NUM_EMP = emp_proj_data[0].NUM_EMP;
			result.TOTAL_TIME = emp_proj_data[0].TOTAL_WORKING_TIME;
			results.push(result);
		} else {
			// 모든 프로젝트를 찾는 경우
			proj_data = await project.findAll({
				raw: true,
			});
			// 모든 프로젝트에 대해서 다시 참여 직원에 대한 정보 가져오기
			// 근무 시간 등을 계산을 이ㅜ해 분리
			for (const pd of proj_data) {
				const result = {};
				result.proj = pd;
				const emp_proj_data = await emp_proj.findAll({
					raw: true,
					attributes: [
						'PRO_ID',
						[sequelize.fn('count', sequelize.col('EMP_ID')), 'NUM_EMP'],
						[
							sequelize.fn('sum', sequelize.col('WORKING_TIME')),
							'TOTAL_WORKING_TIME',
						],
					],
					where: { PRO_ID: pd.PRO_ID },
					group: ['PRO_ID'],
				});
				result.NUM_EMP = emp_proj_data[0].NUM_EMP;
				result.TOTAL_TIME = emp_proj_data[0].TOTAL_WORKING_TIME;
				results.push(result);
			}
		}
		console.log(results);
		res.render('projManage', {
			user: req.user,
			results: results,
		});
	} else {
		// 경영진이 아닐 경우 메인으로 이동
		res.redirect('/main');
	}
});

// 프로젝트 상세보기 페이지 렌더링
router.get('/proj/detail/:projID', isLoggedIn, async function (req, res, next) {
	// 경영진 확인
	if (req.user.DEPT_NAME == '경영진') {
		// 특정 프로젝트에 대한 결과 가져오기
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
		// 평가 결과 초기화
		const ep_result = {};
		let pe_avg_sum = 0;
		let pe_max = 0;
		let pe_min = 10;
		let pe_cnt = 0;
		let com_avg_sum = 0;
		let com_max = 0;
		let com_min = 10;
		let com_cnt = 0;

		// 프로젝트 참여 직원에 대한 결과를 처리하기
		for (const ep of proj_emp_result) {
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
			// 실제 평가가 존재한다면
			if (pe_result_array.length > 0) {
				pe_avg_sum += parseFloat(pe_result_array[0].avg_pe_score);
				console.log(pe_result_array[0].avg_pe_score);
				pe_max =
					pe_max > pe_result_array[0].max_pe_score
						? pe_max
						: pe_result_array[0].max_pe_score;
				pe_min =
					pe_min > pe_result_array[0].min_pe_score
						? pe_result_array[0].min_pe_score
						: pe_min;
			} else {
				// 허수라면 체크
				pe_cnt += 1;
			}
			//직원 평가 처리
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
			if (com_result_array.length > 0) {
				com_avg_sum += parseFloat(com_result_array[0].avg_com_score);
				com_max =
					com_max > com_result_array[0].max_com_score
						? com_max
						: com_result_array[0].max_com_score;
				com_min =
					com_min > com_result_array[0].min_com_score
						? com_result_array[0].min_com_score
						: com_min;
			} else {
				com_cnt += 1;
			}
		}
		// 평가 요약 처리
		ep_result.pe_avg = pe_avg_sum / (proj_emp_result.length - pe_cnt);
		ep_result.pe_avg = Math.round(ep_result.pe_avg * 100) / 100;
		ep_result.com_avg = com_avg_sum / (proj_emp_result.length - com_cnt);
		ep_result.com_avg = Math.round(ep_result.com_avg * 100) / 100;
		ep_result.pe_max = pe_max;
		ep_result.pe_min = pe_min;
		ep_result.com_max = com_max;
		ep_result.com_min = com_min;
		res.render('projManageDetail', {
			user: req.user,
			proj: project_result,
			cus: cus_result,
			pPlans: pPlan_result,
			employees: proj_emp_result,
			ep_result: ep_result,
		});
	} else {
		res.redirect('/main');
	}
});

module.exports = router;
