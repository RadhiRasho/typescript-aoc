import { file } from "bun";

const text = await file("./daytwo.txt").text();

const daytwo = text.split("\n");

const RED = 12;
const GREEN = 13;
const BLUE = 14;

function parseData(sets: string[] | undefined): boolean {
	if (!sets) return false;

	const total = RED + GREEN + BLUE;

	for (const set of sets) {
		const s = set.split(",").map((x) => x.trim());

		for (const cube of s) {
			const [number, color] = cube.split(" ");
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

	console.log(`======================== ${gameID} ========================`);

	if (parseData(sets)) {
		if (!gameID) continue;

		total += parseInt(gameID);
	}
}
