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

// 이미지 업로드 처리
const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, cb) {
			// 저장 위치
			cb(null, 'uploads/');
		},
		filename(req, file, cb) {
			// 이름 바꿔주기
			const ext = path.extname(file.originalname);
			cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
		},
	}),
	// 사이즈 제한
	limits: { fileSize: 5 * 1024 * 1024 },
});

// 이미지 업로드 처리
router.post('/img', upload.single('img'), (req, res) => {
	console.log(req.file);
	res.json({ url: `/img/${req.file.filename}` });
});

// 회원가입 페이지 요청에 대한 화면 렌더링
router.get('/signup', function (req, res, next) {
	res.render('signUp');
});

// 회원가입 페이지에서 보낸 요청에 대한 처리
router.post('/signup', isNotLoggedIn, async (req, res, next) => {
	// 입력된 정보 받기
	const { userID, username, password, url } = req.body;

	try {
		// 비밀번호 암호화
		const hash = await bcrypt.hash(password, 12);
		// 기존에 등록된 직원만 가입이 가능하므로
		// update를 통해 web_id, pw, image url을 DB에 저장
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
		// 로그인 화면으로 이동
		return res.redirect('/auth/signin');
	} catch (error) {
		console.error(error);
		return next(error);
	}
});

// 로그인 화면 요청에 대한 화면 렌더링
router.get('/signin', function (req, res, next) {
	res.render('signIn');
});

// 로그인 화면에서 로그인 요청에 대한 처리
router.post('/signin', isNotLoggedIn, (req, res, next) => {
	// Local 로그인만 가능하여 local로 승인하기
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
	})(req, res, next);
});

// 로그아웃 버튼에 대한 처리
router.get('/logout', isLoggedIn, (req, res) => {
	req.logout();
	req.session.destroy();
	res.redirect('/');
});

module.exports = router;
