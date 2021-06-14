// 로그인 체크
exports.isLoggedIn = (req, res, next) => {
	console.log('isLoggedIn');
	console.log(req.isAuthenticated());
	if (req.isAuthenticated()) {
		next();
	} else {
		res.redirect('/auth/signIn');
	}
};
// 비로그인 체크
exports.isNotLoggedIn = (req, res, next) => {
	if (!req.isAuthenticated()) {
		next();
	} else {
		const message = encodeURIComponent('로그인한 상태입니다.');
		res.redirect(`/?error=${message}`);
	}
};
