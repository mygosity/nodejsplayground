import fs from 'fs';
import path from 'path';

const rootFilePath = path.resolve(__dirname, '../');

function readFile(path: string) {
	return fs.readFileSync(path).toString();
}

function handleInput001() {
	const inputText = readFile(rootFilePath + '\\inputs\\mygosity\\input001.txt');
	const list = inputText.split('\n').map((e) => parseInt(e));

	const list2 = inputText.split('\n');
	const diffs = [];
	for (let i = 0; i < list2.length; ++i) {
		//@ts-ignore
		if (list2[i] != list[i]) {
			diffs.push(list2[i]);
		}
	}

	let answer = 0;
	for (let i = 1; i < list.length; ++i) {
		if (list[i] > list[i - 1]) {
			answer++;
			if (list2[i] <= list2[i - 1]) {
				diffs.push([i, list2[i], list2[i - 1]]);
			}
		}
	}
	console.log({
		diffs,
		list1len: list.length,
		list2len: list2.length,
	});
	console.log('test string:: ', '1015' > '995');
	console.log({ list, answer });
}

function main() {
	// handleInput001();
}
main();
