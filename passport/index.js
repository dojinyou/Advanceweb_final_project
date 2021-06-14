const passport = require('passport');
const local = require('./localStrategy');
const { employee, dept } = require('../models');

module.exports = () => {
	// session에는 webid만 등록
	passport.serializeUser((user, done) => {
		done(null, user.EMP_WEB_ID);
	});

	// 로드시에는 emp와 더불어 dept 정보도 함께 추가하여 전달
	passport.deserializeUser(async (EMP_WEB_ID, done) => {
		const emp = await employee.findOne({
			raw: true,
			where: { EMP_WEB_ID },
		});

		const dept_name = await dept.findOne({
			raw: true,
			where: {
				DEPT_ID: emp.DEPT_ID,
			},
		});
		emp.DEPT_NAME = `${dept_name.DEPT_NAME}`;
		done(null, emp);
	});

	local();
};
