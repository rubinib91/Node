import path from 'path';

const absolutePath = path.resolve("server.js");
const filename = "newfile.txt";
const extension=path.extname(filename)
console.log(`The absolute path is ${absolutePath}`);
console.log(`The extension for the file ${filename} is ${extension}`);
