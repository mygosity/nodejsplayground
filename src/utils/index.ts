import fs from 'fs';
import path from 'path';

export const rootFilePath = path.resolve(__dirname, '../../');

export function readFile(path: string): string {
	return fs.readFileSync(rootFilePath + path).toString();
}
