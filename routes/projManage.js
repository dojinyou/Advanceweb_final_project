var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // if (req.cookies['user'] !== undefined) {
        /*
        if (// 임원인 경우) {
            // 여기에 기능 구현
        } else {
            res.redirect('/main'); // 임원이 아니면 메인 페이지로 이동
        }
        */
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

router.get('/:projID', async function (req, res, next) {
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
