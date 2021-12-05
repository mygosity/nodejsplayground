import { dirSlash, readFile } from '../utils';

export function handleAnswerPart2() {
	const inputText = readFile(`${dirSlash}inputs${dirSlash}mygosity${dirSlash}input001.txt`);
	const list = inputText.split('\n').map((e) => parseInt(e));

	let answer = 0;
	for (let i = 1; i < list.length; ++i) {
		//
	}
	console.log({ list, answer });
}

export function handleAnswerPart1() {
	const inputText = readFile(`${dirSlash}inputs${dirSlash}mygosity${dirSlash}input001.txt`);
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
