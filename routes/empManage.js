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
		res.render('empManage', {
			// emps: req.cookies['emps'],
			emps: [
			    {
			 		EMP_ID: 1,
			 		EMP_NAME: '홍길동',
                    EMP_BIRTH_DATE: '1999-12-31',
                    DEPT_NAME: '부서1',
                    EMP_STATUS: 'T',
			    },
                {
                    EMP_ID: 2,
			 		EMP_NAME: '김철수',
                    EMP_BIRTH_DATE: '2000-01-01',
                    DEPT_NAME: '부서2',
                    EMP_STATUS: 'T',
               },
		    ],
		});
	// } else {
	//     res.redirect('/signIn');
	// }
});

router.get('/:empID', function (req, res, next) {
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
                CAREER_NAME:'경력2',
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

module.exports = router;
