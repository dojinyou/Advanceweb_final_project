const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { employee } = require('../models');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const router = express.Router();

try {
	fs.readdirSync('uploads');
} catch (error) {
	console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
	fs.mkdirSync('uploads');
}

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, cb) {
			cb(null, 'uploads/');
		},
		filename(req, file, cb) {
			const ext = path.extname(file.originalname);
			cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
		},
	}),
	limits: { fileSize: 5 * 1024 * 1024 },
});

router.post('/img', upload.single('img'), (req, res) => {
	console.log(req.file);
	res.json({ url: `/img/${req.file.filename}` });
});

router.get('/signup', function (req, res, next) {
	res.render('signUp');
});
router.post('/signup', isNotLoggedIn, async (req, res, next) => {
	const { userID, username, password, url } = req.body;
	try {
		const hash = await bcrypt.hash(password, 12);
		await employee.update(
			{
				EMP_WEB_ID: username,
				EMP_WEB_PW: hash,
				EMP_WEB_IMG: url,
			},
			{
				where: {
					EMP_ID: userID,
				},
			}
		);
		return res.redirect('/auth/signin');
	} catch (error) {
		console.error(error);
		return next(error);
	}
});

router.get('/signin', function (req, res, next) {
	res.render('signIn');
});

router.post('/signin', isNotLoggedIn, (req, res, next) => {
	passport.authenticate('local', (authError, user, info) => {
		if (authError) {
			console.error(authError);
			return next(authError);
		}
		if (!user) {
			return res.redirect(`/?loginError=${info.message}`);
		}
		return req.login(user, (loginError) => {
			if (loginError) {
				console.error(loginError);
				return next(loginError);
			}
			return res.redirect('/');
		});
	})(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.get('/logout', isLoggedIn, (req, res) => {
	req.logout();
	req.session.destroy();
	res.redirect('/');
});

module.exports = router;
