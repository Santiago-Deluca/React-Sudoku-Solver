function returnEmpty(board){
	for (let i = 0; i < board.length; i += 1)
		for (let j = 0; j < board[0].length; j += 1)
			if (board[i][j] === 0)
				return [i,j];
	return null;
}

function checkAvailable(board, no, rc){
	for (let i = 0; i < board[0].length; i += 1)
		if (board[rc[0]][i] === no && i !== rc[1])
			return false;

	for (let i = 0; i < board.length; i += 1)
		if (board[i][rc[1]] === no && i !== rc[0])
			return false;

	let x = Math.floor(rc[0]/3);
	let y = Math.floor(rc[1]/3);

	for (let i = x * 3; i < (x*3) + 3; i += 1)
		for (let j = y * 3; j < (y*3) + 3; j += 1)
			if ([i, j].join('') !== rc.join('') && board[i][j] === no)
				return false;

	return true;
}

export function solveBoard(board, logger = []){
	let empty = returnEmpty(board);
	if (empty === null)
		return true;
	let [r, c] = [...empty];
	logger.push(`Rows ${r+1}, Column ${c+1} is empty`);
	for (let i = 1; i < 10; i += 1){
		if (checkAvailable(board, i, [r, c]) === true){
			board[r][c] = i;
			logger.push(`Trying to fix ${i} at Row ${r+1} Column ${c+1}`);
			if (solveBoard(board, logger) === true){
				logger.push(`Fixed ${i} at Row ${r+1} Column ${c+1}`);
				return true;
			}
			board[r][c] = 0;
			logger.push(`Resetting ${i} at Row ${r+1} Column ${c+1}`);
		}
	}
	return false;
}