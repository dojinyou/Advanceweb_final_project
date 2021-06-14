const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { employee } = require('../models');

module.exports = () => {
	passport.use(
		new LocalStrategy(
			{
				usernameField: 'EMP_WEB_ID',
				passwordField: 'EMP_WEB_PW',
			},
			async (EMP_WEB_ID, EMP_WEB_PW, done) => {
				try {
					const exUser = await employee.findOne({
						raw: true,
						where: { EMP_WEB_ID },
					});
					if (exUser) {
						const result = await bcrypt.compare(EMP_WEB_PW, exUser.EMP_WEB_PW);
						if (result) {
							done(null, exUser);
						} else {
							done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
						}
					} else {
						done(null, false, { message: '가입되지 않은 회원입니다.' });
					}
				} catch (error) {
					console.error(error);
					done(error);
				}
			}
		)
	);
};
