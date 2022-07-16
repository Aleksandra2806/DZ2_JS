let fields = document.querySelectorAll('.field');
let result = document.querySelector('.result')

tictactoe(fields);

function tictactoe(fields) {
  let i = 0;
  for (let field of fields) {
	field.addEventListener('click', function step() {
	  if (i % 2 == 0) {
	    this.innerHTML = 'X';
	  } else {
	    this.innerHTML = 'O';
	  }

	  this.removeEventListener('click', step);
			
	  if (winningGame(fields)) {
		result.innerHTML = 'Победили ' + this.innerHTML;
	  } else if (i == 8) {
	    result.innerHTML = 'Ничья';
	  }
	i++;
	});
  }
}

// Проверка на выход из игры

function winningGame(fields) {
	let combinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	]
	for (let i = 0; i < combinations.length; i++) {
		let comb = combinations[i];
		if (fields[comb[0]].innerHTML == fields[comb[1]].innerHTML &&
			fields[comb[1]].innerHTML == fields[comb[2]].innerHTML &&
			fields[comb[0]].innerHTML != '') {
				return true;
			}
	}
	return false;
}
// новая игра

function newGame() {
	result.innerHTML = '';
	fields.forEach(elem => {
		elem.innerHTML = '';
	});
	fields.addEventListener('click',tictactoe(fields));
}	