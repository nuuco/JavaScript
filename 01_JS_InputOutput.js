const fs = require("fs");
const input = fs.readFileSync("./text.txt", "utf8");
// "./" 현재 디렉토리
console.log(input);

//결과 :
//hello world!(text.txt 내용)