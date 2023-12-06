import { file } from "bun";

const text = await file(`${import.meta.dir}/daytwo.txt`).text();

const daytwo = text.split("\n");

const RED = 12;
const GREEN = 13;
const BLUE = 14;

const colors = {
	red: RED,
	green: GREEN,
	blue: BLUE,
};

function parseData(sets: string[] | undefined): boolean {
	if (!sets) return false;

	for (const set of sets) {
		const cubes = set.split(",").map((x) => x.trim());

		for (const cube of cubes) {
			const [number, color] = cube.split(" ");
			const num = parseInt(number);

			switch (color) {
				case "red":
					if (num > colors.red) {
						return false;
					}
					break;
				case "green":
					if (num > colors.green) {
						return false;
					}
					break;
				case "blue":
					if (num > colors.blue) {
						return false;
					}
					break;
				default:
					break;
			}
		}
	}

	return true;
}

let total = 0;

for (const g of daytwo) {
	const game = g.split(":");
	const gameID = game.at(0)?.replace(/\D/g, "");
	const sets = game
		.at(-1)
		?.split(";")
		.map((x) => x.trim());

	if (parseData(sets)) {
		if (!gameID) continue;

		console.log(`======================== ${gameID} ========================`);
		total += parseInt(gameID);
	}
}

console.log(total);
