window.onload = (e) => {
	const pe_text = document.getElementById('pe_score_text');
	const pe_score = document.getElementById('pe_score');
	const com_text = document.getElementById('com_score_text');
	const com_score = document.getElementById('com_score');
	pe_score.addEventListener('input', (e) => {
		pe_text.innerText = pe_score.value;
	});
	com_score.addEventListener('input', (e) => {
		com_text.innerText = com_score.value;
	});
};
