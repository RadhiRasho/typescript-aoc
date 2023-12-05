import { file } from "bun";

const data = await file("./dayone.txt").text();

function isNumber(n: string): boolean {
	return !isNaN(parseInt(n));
}

function getNumbers(line: string): number {
	const data = [
		...line.matchAll(
			/(?=(\d)|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)|(1)|(2)|(3)|(4)|(5)|(6)|(7)|(8)|(9))/gm
		),
	]
		.flat()
		.filter((x) => x);

	const numNames = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

	const parsedData = data?.map((x) => (isNumber(x) ? parseInt(x) : numNames.indexOf(x) + 1));

	if (!parsedData) return 0;

	let val = 0;
	if (parsedData.length > 1) val = parseInt(`${parsedData[0]}${parsedData.at(-1)}`);
	else val = parseInt(`${parsedData[0]}${parsedData[0]}`);

	console.log(val);
	return !val ? 0 : val;
}

const lines = data.split("\n");

let total = 0;
for (const line of lines) {
	if (line.length > 0) {
		total += getNumbers(line);
	}
}

console.log(total);
