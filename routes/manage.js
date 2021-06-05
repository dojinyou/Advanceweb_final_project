const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const {
	employee,
	sequelize,
	dept,
	salary,
	emp_pe,
	skill,
	career,
	project,
	emp_proj,
	cus_proj_eval,
	emp_proj_eval,
	role,
} = require('../models');

router.get('/emp', async function (req, res, next) {
	// if (
	// 	req.cookies['user'] !== undefined &&
	// 	req.cookies['user'].DEPT_NAME == '경영진'
	// ) {
	// 	const emp_name = req.query.emp_name;
	// 	const dept_name = req.query.dept_name;
	// 	let emp_data;
	// 	if (!emp_name) {
	// 		if (dept_name) {
	// 			emp_data = await employee.findAll({
	// 				raw: true,
	// 				incloude: [
	// 					{
	// 						attributes: ['DEPT_NAME'],
	// 						model: dept,
	// 						where: {
	// 							DEPT_NAME: dept_name,
	// 						},
	// 					},
	// 				],
	// 			});
	// 		} else {
	// 			emp_data = await employee.findAll({
	// 				rasw: true,
	// 				incloude: [
	// 					{
	// 						attributes: ['DEPT_NAME'],
	// 						model: dept,
	// 					},
	// 				],
	// 			});
	// 		}
	// 	} else {
	// 		if (dept_name) {
	// 			emp_data = await employee.findAll({
	// 				rasw: true,
	// 				incloude: [
	// 					{
	// 						attributes: ['DEPT_NAME'],
	// 						model: dept,
	// 						where: {
	// 							DEPT_NAME: dept_name,
	// 						},
	// 					},
	// 				],
	// 				where: {
	// 					EMP_NAME: emp_name,
	// 				},
	// 			});
	// 		} else {
	// 			emp_data = await employee.findAll({
	// 				rasw: true,
	// 				incloude: [
	// 					{
	// 						attributes: ['DEPT_NAME'],
	// 						model: dept,
	// 					},
	// 				],
	// 				where: {
	// 					EMP_NAME: emp_name,
	// 				},
	// 			});
	// 		}
	// 	}
	// 	for (const emp_info of emp_data) {
	// 		const other_data = await emp_proj.findAll({
	// 			raw: true,
	// 			where: {
	// 				EMP_ID: emp_info.EMP_ID,
	// 			},
	// 			incloude: [
	// 				{
	// 					attributes: ['PRO_TITLE'],
	// 					model: project,
	// 				},
	// 				{
	// 					attributes: ['ROLE_NAME'],
	// 					model: role,
	// 				},
	// 				{
	// 					attributes: [
	// 						[sequelize.fn('AVG', sequelize.col('PE_SCORE')), 'AVG_EMP_PE'],
	// 						[sequelize.fn('AVG', sequelize.col('COM_SCORE')), 'AVG_EMP_COM'],
	// 					],
	// 					model: emp_proj_eval,
	// 				},
	// 				{
	// 					attributes: [
	// 						[sequelize.fn('AVG', sequelize.col('PE_SCORE')), 'AVG_CUS_PE'],
	// 						[sequelize.fn('AVG', sequelize.col('COM_SCORE')), 'AVG_CUS_COM'],
	// 					],
	// 					model: cus_proj_eval,
	// 				},
	// 			],
	// 		});
	// 		const data_array = [];
	// 		for (const data of other_data) {
	// 			data_array.push({
	// 				PRO_TITLE: data.project.PRO_TITLE,
	// 				ROLE_NAME: data.role.ROLE_NAME,
	// 				CUS_SCORE:
	// 					(data.cus_proj_eval.AVG_CUS_PE + data.cus_proj_eval.AVG_CUS_COM) /2,
	// 				EMP_SCORE:
	// 					(data.emp_proj_eval.AVG_EMP_PE + data.emp_proj_eval.AVG_EMP_COM) /2,
	// 			});
	// 		}
	// 		emp_data.data = data_array;
	// 	}
	// 	res.render('empManage', emp_data);
	// } else {
	// 	res.redirect('/main'); // 임원이 아니면 메인 페이지로 이동
	// }

	res.render('empManage', {
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
		user: '홍길동',
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
	// if (
	// 	req.cookies['user'] !== undefined &&
	// 	req.cookies['user'].DEPT_NAME == '경영진'
	// ) {
	// 	const proj_name = req.query.proj_name;
	// 	let proj_data;
	// 	if (proj_name) {
	// 		proj_data = await project.findAll({
	// 			raw: true,
	// 			incloude: [
	// 				{
	// 					attributes: [
	// 						PRO_ID,
	// 						[sequelize.fn('count', sequelize.col('emp_id'))],
	// 						'PRO_NUM',
	// 					],
	// 					group: ['emp_proj.PRO_ID'],
	// 					model: emp_proj,
	// 					where: {
	// 						END_DATE: { [Op.eq]: null },
	// 					},
	// 				},
	// 			],
	// 			where: {
	// 				PRO_TITLE: proj_name,
	// 			},
	// 		});
	// 	} else {
	// 		proj_data = await project.findAll({
	// 			raw: true,
	// 			incloude: [
	// 				{
	// 					attributes: [
	// 						EMP_ID,
	// 						[sequelize.fn('count', sequelize.col('EMP_ID'))],
	// 						'PRO_NUM',
	// 					],
	// 					group: ['emp_proj.PRO_ID'],
	// 					model: emp_proj,
	// 					where: {
	// 						END_DATE: { [Op.eq]: null },
	// 					},
	// 				},
	// 			],
	// 		});
	// 	}
	// 	for (const proj_info of proj_data) {
	// 		const sum_working_hour = await emp_proj.findAll({
	// 			raw: true,
	// 			where: {
	// 				PRO_ID: proj_info.PRO_ID,
	// 			},
	// 			attributes: [
	// 				[sequelize.fn('sum', sequelize.col('WORKING_HOUR'))],
	// 				'SUM_WORKING_TIME',
	// 			],
	// 			group: ['emp_proj.PRO_ID'],
	// 		});
	// 		proj_info.SUM_WORKING_HOUR = sum_working_hour;
	// 	}
	// 	res.render('empManage', proj_data);
	// } else {
	// 	res.redirect('/main'); // 임원이 아니면 메인 페이지로 이동
	// }
	res.render('projManage', {
		// projs: req.cookies['projs'],
		projs: [
			{
				PRO_ID: 1,
				PRO_TITLE: '이름1',
				PRO_TYPE: '종류1',
				PRO_PM: '홍길동',
				PRO_NUM: 10,
				PRO_START_DATE: '2222.02.22',
				PRO_START_DATE: '3333.03.30',
			},
			{
				PRO_ID: 2,
				PRO_TITLE: '이름2',
				PRO_TYPE: '종류2',
				PRO_PM: '김철수',
				PRO_NUM: 5,
				PRO_START_DATE: '2222.02.22',
				PRO_START_DATE: '3333.03.30',
			},
		],
	});
	// } else {
	//     res.redirect('/signIn');
	// }
});

router.get('/proj/detail/:projID', async function (req, res, next) {
	// if (req.cookies['user'] !== undefined) {
	/*
            if (// 임원인 경우) {
                // 여기에 기능 구현
            } else {
                res.redirect('/main'); // 임원이 아니면 메인 페이지로 이동
            }
        */
	// } else {
	//     res.redirect('/signIn');
	// }
	res.render('projManageDetail', {
		user: '홍길동',
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
});

module.exports = router;
