import { file } from "bun";

const text = await file(`${import.meta.dir}/daytwo.txt`).text();

const daytwo = text.split("\n");

type Color = { [key: string]: number };

function parseData(sets: string[]): number {
	const colors: Color = {
		red: 0,
		green: 0,
		blue: 0,
	};

	for (const set of sets) {
		const cubes = set.split(",").map((x) => x.trim());

		for (const cube of cubes) {
			const [number, color] = cube.split(" ");
			const num = parseInt(number);

			colors[color] = Math.max(colors[color], num);
		}
	}

	console.log(colors);
	const max = colors.red * colors.green * colors.blue;

	return max;
}

const total = daytwo.reduce((acc, curr) => {
	const game = curr.split(":");
	const sets = game
		.at(-1)
		?.split(";")
		.map((x) => x.trim());

	if (!sets) return acc;

	const max = parseData(sets);

	return max + acc;
}, 0);

console.log(total);
