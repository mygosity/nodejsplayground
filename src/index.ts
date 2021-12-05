import fs from 'fs';
import path from 'path';

const rootFilePath = path.resolve(__dirname, '../');

function readFile(path: string) {
	return fs.readFileSync(path).toString();
}

function handleInput001() {
	const inputText = readFile(rootFilePath + '\\inputs\\mygosity\\input001.txt');
	const list = inputText.split('\n').map((e) => parseInt(e));
	let answer = 0;
	for (let i = 1; i < list.length; ++i) {
		if (list[i] > list[i - 1]) {
			answer++;
		}
	}
	console.log({ list, answer });
}

function main() {
	handleInput001();
}
main();
