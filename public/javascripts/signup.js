window.onload = function () {
	const input_userId = document.getElementById('sign-up_userId');
	const userId_check = document.getElementById('userId_check');

	async function getEmpId() {
		try {
			const datas = await axios.get('/data/employee/emp_id');
			return datas.data;
		} catch (e) {
			return false;
		}
	}
	getEmpId().then((data) => {
		if (data) {
			userId_check.addEventListener('click', () => {
				const result = data.find((e) => e == Number(input_userId.value));
				alert(
					result ? '가입 가능한 사번입니다' : '가입이 불가능한 사번입니다.'
				);
				if (result) {
					input_userId.readOnly = true;
				}
			});
		}
	});

	const input_webId = document.getElementById('sign-up_id');
	const webId_check = document.getElementById('webId_check');

	async function getEmpWebId() {
		try {
			const datas = await axios.get('/data/employee/emp_web_id');
			return datas.data;
		} catch (e) {
			return false;
		}
	}
	getEmpWebId().then((data) => {
		if (data) {
			webId_check.addEventListener('click', () => {
				if (input_webId.value.length < 5) {
					alert('아이디가 너무 짧습니다');
				} else {
					const result = data.find((e) => e == input_webId.value);
					alert(
						result
							? '가입 불가능한 아이디입니다'
							: '가입이 가능한 아이디입니다.'
					);
				}
			});
		}
	});

	const input_pw = document.getElementById('sign-up_pw');
	const icon_pw = document.getElementById('icon_pw');
	icon_pw.addEventListener('mouseover', (e) => {
		if (input_pw.type == 'password') {
			input_pw.type = 'text';
		}
	});
	icon_pw.addEventListener('mouseout', (e) => {
		if (input_pw.type == 'text') {
			input_pw.type = 'password';
		}
	});

	const input_pw_check = document.getElementById('sign-up_pw_check');
	const icon_pw_check = document.getElementById('icon_pw_check');
	icon_pw_check.addEventListener('mouseover', (e) => {
		if (input_pw_check.type == 'password') {
			input_pw_check.type = 'text';
		}
	});
	icon_pw_check.addEventListener('mouseout', (e) => {
		if (input_pw_check.type == 'text') {
			input_pw_check.type = 'password';
		}
	});

	input_pw_check.addEventListener('keyup', (e) => {
		console.log('변경발생');
		if (input_pw.value == input_pw_check.value) {
			input_pw_check.style.borderColor = 'green';
		} else {
			input_pw_check.style.borderColor = 'red';
		}
	});

	if (document.getElementById('sign-up_img')) {
		document
			.getElementById('sign-up_img')
			.addEventListener('change', function (e) {
				const formData = new FormData();
				console.log(this, this.files);
				formData.append('img', this.files[0]);
				axios
					.post('/auth/img', formData)
					.then((res) => {
						document.getElementById('img-url').value = res.data.url;
						document.getElementById('img-preview').src = res.data.url;
						document.getElementById('img-preview').style.display = 'inline';
					})
					.catch((err) => {
						console.error(err);
					});
			});
	}
};
