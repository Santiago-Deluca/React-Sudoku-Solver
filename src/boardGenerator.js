const board1 = [
	"000260701","680070090","190004500",
	"820100040","004602900","050003028",
	"009300074","040050036","703018000"
].map(val => val.split('').map(Number));

const board2 = [
	"100489006","730000040","000001295",
	"007120600","500703008","006095700",
	"914600000","020000037","800512004"
].map(val => val.split('').map(Number));

const board3 = [
	"020608000","580009700","000040000",
	"370000500","600000004","008000013",
	"000020000","009800036","000306090"
].map(val => val.split('').map(Number));

const allBoards = [
	[...board1], [...board2], [...board3]
];

export default function boardGenerator() {
	let index = Math.floor(Math.random() * allBoards.length);
	return [...allBoards[index]];
}