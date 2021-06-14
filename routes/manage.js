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

router.get('/emp/:sortCondition', isLoggedIn, async function (req, res, next) {
	if (req.user.DEPT_NAME == '경영진') {
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
			user: req.user,
			emp_name,
			dept_name,
			sortCondition: req.params.sortCondition,
			search_result,
		});
	} else {
		res.redirect('/main'); // 임원이 아니면 메인 페이지로 이동
	}
	res.render('empManage', {
		user: req.user,
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

router.get('/proj', isLoggedIn, async function (req, res, next) {
	if (req.user.DEPT_NAME == '경영진') {
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
			user: req.user,
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

router.get('/proj/detail/:projID', isLoggedIn, async function (req, res, next) {
	if (req.user.DEPT_NAME == '경영진') {
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
			user: req.user,
			proj: project_result,
			cus: cus_result,
			pPlans: pPlan_result,
			employees: proj_emp_result,
			ep_result: ep_result,
		});
	} else {
		res.redirect('/signIn');
	}
});

module.exports = router;
