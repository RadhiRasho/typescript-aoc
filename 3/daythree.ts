import { file } from "bun";

const data = await file(`${import.meta.dir}/daythree.txt`).text();

const daythree = data.split("\n");

const dir = [
	// Top, top right, top left
	[-1, 0],
	[-1, 1],
	[-1, -1],
	// Bottom, bottom right, bottom left
	[1, 0],
	[1, 1],
	[1, -1],
	// Left, right
	[0, -1],
	[0, 1],
];

function isNumber(char: string): boolean {
	return !Number.isNaN(parseInt(char));
}

function isDot(char: string): boolean {
	return char === ".";
}

for (let i = 0; i < daythree.length; i++) {
	const grid = daythree[i];
	let currNum = "";

	for (let j = 0; j < grid.length; j++) {
		if (isNumber(grid[j])) {
			currNum += grid[j];
		}
	}

	console.log(currNum);
}
