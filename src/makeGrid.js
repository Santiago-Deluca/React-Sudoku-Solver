export default function makeGrid (){
	let grid = [];
	let row;
	for (let i = 0; i < 9; i += 1){
		row = [];
		for (let j = 0; j < 9; j += 1)
			row.push(0);
		grid.push(row);
	}
	return grid;
}