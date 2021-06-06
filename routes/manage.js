const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
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

router.get('/emp/:sortCondition', async function (req, res, next) {
	if (
		req.cookies['user'] !== undefined &&
		req.cookies['user'].DEPT_NAME == '경영진'
	) {
		const emp_name = req.query.emp_name;
		const dept_name = req.query.dept_name;
		let search_result;
		if (!emp_name) {
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
				search_result = await employee.findAll({
					raw: true,
					include: {
						model: dept,
					},
				});
			}
		} else {
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
		search_result = search_result.sort(function (a, b) {
			return a[`${req.params.sortCondition}`] < b[`${req.params.sortCondition}`]
				? -1
				: 1;
		});
		// console.log(search_result);
		res.render('empManage', {
			user: req.cookies['user'],
			emp_name,
			dept_name,
			sortCondition: req.params.sortCondition,
			search_result,
		});
	} else {
		res.redirect('/main'); // 임원이 아니면 메인 페이지로 이동
	}
	res.render('empManage', {
		user: req.cookies['user'],
		projs: req.cookies['projs'],
		emps: [
			{
				EMP_ID: 1,
				EMP_NAME: '홍길동',
				dept: {
					DEPT_NAME: '부서1',
				},
				data: {
					ROLE_NAME: '개발자',
					PRO_TITLE: '테스트프로젝트',
					CUS_SCORE: 5.6,
					EMP_SCORE: 7.8,
				},
			},
		],
	});
});

router.get('/emp/detail/:empID', async function (req, res, next) {
	// if (
	// 	req.cookies['user'] !== undefined &&
	// 	req.cookies['user'].DEPT_NAME == '경영진'
	// ) {
	// 	emp_data = await employee.findOne({
	// 		raw: true,
	// 		where: {
	// 			EMP_ID: req.params.empID,
	// 		},
	// 		incloud: [
	// 			{
	// 				model: career,
	// 			},
	// 			{
	// 				model: skill,
	// 			},
	// 			{
	// 				model: project,
	// 			},
	// 		],
	// 	});
	// 	res.render('empManage', emp_data);
	// } else {
	// 	res.redirect('/main'); // 임원이 아니면 메인 페이지로 이동
	// }
	res.render('empDetail', {
		user: req.cookies['user'],
		projs: req.cookies['projs'],
		// user: '홍길동',
		// emp: emp_result,
		emp: {
			EMP_ID: '1',
			DEPT_NAME: '부서1',
			EMP_NAME: '홍길동',
			EMP_EDU: '명지대학교',
			EMP_BIRTH_DATE: '1999-12-31',
			EMP_STATUS: 'T',
			EMP_HIRE_DATE: '2020-01-01',
			EMP_RETIRE_DATE: null,
			EMP_WORK_YEAR: 1,
		},
		careers: [
			{
				CAREER_NAME: '경력1',
				CAREER_FROM_DATE: '2020-01-01',
				CAREER_TO_DATE: '2020-01-02',
			},
			{
				CAREER_NAME: '경력2',
				CAREER_FROM_DATE: '2021-01-01',
				CAREER_TO_DATE: '2021-01-02',
			},
		],
		skills: [
			{
				SKILL_NAME: '기술1',
				SKILL_GRADE: 'A',
			},
			{
				SKILL_NAME: '기술2',
				SKILL_GRADE: 'B',
			},
		],
		projects: [
			{
				PRO_ID: '1',
				PRO_TITLE: '프로젝트1',
				PRO_TYPE: '타입1',
				PRO_START_DATE: '1999-12-31',
				PRO_END_DATE: '2000-01-01',
			},
			{
				PRO_ID: '2',
				PRO_TITLE: '프로젝트2',
				PRO_TYPE: '타입2',
				PRO_START_DATE: '1999-12-31',
				PRO_END_DATE: '2000-01-01',
			},
		],
	});
});

router.get('/proj', async function (req, res, next) {
	if (
		req.cookies['user'] !== undefined &&
		req.cookies['user'].DEPT_NAME == '경영진'
	) {
		const proj_name = req.query.proj_name;
		const results = [];
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
			proj_data = await project.findAll({
				raw: true,
			});
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
			user: req.cookies['user'],
			results: results,
			// projs: [
			// 	{
			// 		PRO_ID: 1,
			// 		PRO_TITLE: '이름1',
			// 		PRO_TYPE: '종류1',
			// 		PRO_PM: '홍길동',
			// 		PRO_NUM: 10,
			// 		PRO_START_DATE: '2222.02.22',
			// 		PRO_START_DATE: '3333.03.30',
			// 	},
			// 	{
			// 		PRO_ID: 2,
			// 		PRO_TITLE: '이름2',
			// 		PRO_TYPE: '종류2',
			// 		PRO_PM: '김철수',
			// 		PRO_NUM: 5,
			// 		PRO_START_DATE: '2222.02.22',
			// 		PRO_START_DATE: '3333.03.30',
			// 	},
			// ],
		});
	} else {
		res.redirect('/main'); // 임원이 아니면 메인 페이지로 이동
	}
});

router.get('/proj/detail/:projID', async function (req, res, next) {
	if (
		req.cookies['user'] !== undefined &&
		req.cookies['user'].DEPT_NAME == '경영진'
	) {
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
		const ep_result = {};
		let pe_avg_sum = 0;
		let pe_max = 0;
		let pe_min = 10;
		let pe_cnt = 0;
		let com_avg_sum = 0;
		let com_max = 0;
		let com_min = 10;
		let com_cnt = 0;

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
			if (pe_result_array.length > 0) {
				pe_avg_sum += pe_result_array[0].avg_pe_score;
				pe_max =
					pe_max > pe_result_array[0].max_pe_score
						? pe_max
						: pe_result_array[0].max_pe_score;
				pe_min =
					pe_min > pe_result_array[0].min_pe_score
						? pe_result_array[0].min_pe_score
						: pe_min;
			} else {
				pe_cnt += 1;
			}
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
				com_avg_sum += com_result_array[0].avg_com_score;
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
		ep_result.pe_avg = pe_avg_sum / (proj_emp_result.length - pe_cnt);
		ep_result.com_avg = com_avg_sum / (proj_emp_result.length - com_cnt);
		ep_result.pe_max = pe_max;
		ep_result.pe_min = pe_min;
		ep_result.com_max = com_max;
		ep_result.com_min = com_min;
		res.render('projManageDetail', {
			user: req.cookies['user'],
			proj: project_result,
			cus: cus_result,
			pPlans: pPlan_result,
			employees: proj_emp_result,
			ep_result: ep_result,
		});
	} else {
		res.redirect('/signIn');
	}
	// res.render('projManageDetail', {
	// 	user: req.cookies['user'],
	// 	projs: req.cookies['projs'],
	// 	// user: '홍길동',
	// 	// proj: project_result,
	// 	proj: {
	// 		PRO_ID: 1,
	// 		ORDER_ID: 1,
	// 		PRO_TITLE: '안드로이드 앱 개발',
	// 		PRO_TYPE: 'android',
	// 		PRO_START_DATE: '2021-01-01',
	// 		PRO_END_DATE: '2022-01-01',
	// 	},
	// 	// order: order_result,
	// 	order: {
	// 		ORDER_ID: 1,
	// 		CUS_ID: 1,
	// 		ORDER_DATE: '2021.01.01',
	// 		ORDER_COMMENT: '이렇게 하시면 아주 큰일납니다.',
	// 		customer: {
	// 			CUS_ID: 1,
	// 			CUS_NAME: '전종훈',
	// 		},
	// 	},
	// 	// pPlans: pPlan_result,
	// 	pPlans: [
	// 		{
	// 			PP_ID: 1,
	// 			PRO_ID: 1,
	// 			PLAN_TYPE: '프로젝트 설계',
	// 			START_DATE: '2021-03-01',
	// 			END_DATE: '2021-06-30',
	// 			PERIOD: '3개월',
	// 			DEPENDENCY: null,
	// 			STATUS: '진행중',
	// 		},
	// 		{
	// 			PP_ID: 2,
	// 			PRO_ID: 1,
	// 			PLAN_TYPE: '프로젝트 개발',
	// 			START_DATE: '2021-07-01',
	// 			END_DATE: '2022-02-15',
	// 			PERIOD: '8개월',
	// 			DEPENDENCY: null,
	// 			STATUS: '시작 전',
	// 		},
	// 		{
	// 			PP_ID: 3,
	// 			PRO_ID: 1,
	// 			PLAN_TYPE: '프로젝트 테스트',
	// 			START_DATE: '2022-02-16',
	// 			END_DATE: '2022-05-01',
	// 			PERIOD: '3개월',
	// 			DEPENDENCY: '프로젝트 개발',
	// 			STATUS: '시작 전',
	// 		},
	// 	],
	// 	// employees: proj_emp_result,
	// 	employees: [
	// 		{
	// 			EP_ID: 1,
	// 			EMP_ID: 1,
	// 			PRO_ID: 1,
	// 			ROLE_ID: 1,
	// 			EP_START_DATE: '2021-01-01',
	// 			EP_END_DATE: '2022-01-01',
	// 			role: {
	// 				ROLE_ID: 1,
	// 				ROLE_NAME: '개발자',
	// 			},
	// 		},
	// 		{
	// 			EP_ID: 2,
	// 			EMP_ID: 2,
	// 			PRO_ID: 1,
	// 			ROLE_ID: 1,
	// 			EP_START_DATE: '2021-03-01',
	// 			EP_END_DATE: '2022-01-01',
	// 			role: {
	// 				ROLE_ID: 1,
	// 				ROLE_NAME: '개발자',
	// 			},
	// 		},
	// 		{
	// 			EP_ID: 3,
	// 			EMP_ID: 3,
	// 			PRO_ID: 1,
	// 			ROLE_ID: 1,
	// 			EP_START_DATE: '2021-03-01',
	// 			EP_END_DATE: '2021-07-01',
	// 			role: {
	// 				ROLE_ID: 1,
	// 				ROLE_NAME: '개발자',
	// 			},
	// 		},
	// 	],
	// });
});

module.exports = router;
