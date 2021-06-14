const passport = require('passport');
const local = require('./localStrategy');
const { employee, dept } = require('../models');

module.exports = () => {
	passport.serializeUser((user, done) => {
		done(null, user.EMP_WEB_ID);
	});

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
