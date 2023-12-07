import { file } from "bun";

const data = await file(`${import.meta.dir}/dayone.txt`).text();

const daythree = data.split("\n");
