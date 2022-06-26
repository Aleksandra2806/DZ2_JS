let game = document.querySelector('.game'),
	result = document.querySelector('.result'),
	btnGame = document.querySelector('.new_game'),
	fields = document.querySelectorAll('.field'),
	step = true,
	count = 0,
	circle = `<svg class="circle">
				<circle r="40" cx="50" cy="50" stroke="blue" stroke-width="10" fill="none" stroke-linecap="round" />
			  </svg>`,
	cross = `<svg class="cross">
				<line x1="15" y1="15" x2="90" y2="90" stroke="red" stroke-width="10" stroke-linecap="round" />
				<line x1="90" y1="15" x2="15" y2="90" stroke="red" stroke-width="10" stroke-linecap="round" />
			</svg>`;

function ticTacToe(elem) {
	if(step) stepCross(elem.target);
	else stepCircle(elem.target);
	step = !step;
	win();
}

function stepCross(target) {
	target.innerHTML = cross;
	target.classList.add('x')
	count ++
}

function stepCircle(target) {
	target.innerHTML = circle;
	target.classList.add('o')
	count ++
}

function newGame() {
	step = true;
	count = 0;
	result.innerText = '';
	fields.forEach(item => {
		item.innerHTML = '';
		item.classList.remove('x', 'o');
	});
	game.addEventListener('click', ticTacToe);
}

function win() {
	let version  = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < version.length; i++) {
		if (fields[version [i][0]].classList.contains('x') &&
			fields[version [i][1]].classList.contains('x') &&
			fields[version [i][2]].classList.contains('x')) {
			{
			result.innerText = 'Выиграли X';
			}
			game.removeEventListener('click', ticTacToe);
		}
		else if (fields[version[i][0]].classList.contains('o') &&
			fields[version[i][1]].classList.contains('o') &&
			fields[version[i][2]].classList.contains('o')) {
			{
			result.innerText = 'Выиграли O';
			}
			game.removeEventListener('click', ticTacToe);
		}
		else if (count == 9) {
			result.innerText = 'Ничья';
			game.removeEventListener('click', ticTacToe);
		}
	}
}

game.addEventListener('click', ticTacToe)
btnGame.addEventListener('click', newGame)
			