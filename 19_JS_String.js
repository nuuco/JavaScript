//문자열 정의

let str_1 = "hello_1", str_2 = String('hello_2');
let num = 3, str_3 = `hello_${num}`;

console.log(str_1);  //hello_1
console.log(str_2);  //hello_2
console.log(str_3);  //hello_3
console.log(`hello_${2 * 2}`); //hello_4

//문자열 표기
console.log("line\nfeed");  //line <newLine> feed
console.log("carriage\rreturn");  // carriage <newLine> return
console.log("backslach\\");  //backslash\
console.log("tab\ttab");  //tab	tab
console.log("smile: \u{1F60D}");  //smile: 😍


//문자열 길이
let str = `hello
world
!!!`;
let newline_string = "hello\nworld\n!!!";

console.log(str.length);  //15
console.log(newline_string.length);  //15
//\n 은 문자 하나로 인식

//문자 접근
let str_4 = "hello, world!!!";

console.log(str_4.charAt(1));  //e
//index 는 0번 부터 시작
console.log(str_4.charCodeAt(1));  //101
console.log(str_4[0]);  //h



//문자열 검색
let text = "hello, world!!!";

console.log(text.indexOf("l"));  //2
console.log(text.indexOf("l", 3));  //3
console.log(text.lastIndexOf("l"));  //10

console.log(text.includes("Hello"));  //false
console.log(text.startsWith("ello", 1));  //true
console.log(text.endsWith("world"));  //false

//대소문자 변환
let str_ul = "HellO!!";
console.log(str_ul.toUpperCase());  //HELLO!!
console.log(str_ul.toLowerCase());  //hello!!















