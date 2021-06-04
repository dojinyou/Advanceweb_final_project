window.onload = function () {
	input_pw = document.getElementById('sign-up_pw');
	icon_pw = document.getElementById('icon_pw');
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

	input_pw_check = document.getElementById('sign-up_pw_check');
	icon_pw_check = document.getElementById('icon_pw_check');
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
};
