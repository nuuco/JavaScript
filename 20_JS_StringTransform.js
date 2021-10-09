let text = "helLo, world!!!";
let changed_text = "";

changed_text = text.replace("world", "earth");  

console.log(changed_text);  //helLo, earth!!!
console.log(text);  //helLo, world!!!

console.log(text.replace("!","?"));  //helLo, world?!!
console.log(text.replace("l", "i"));  //heiLo, world!!!

//정규표현식 : /치환문자열/g(전체)i(대소문자 구분X)
console.log(text.replace(/l/g, "i"));  //heiLo, worid!!!
console.log(text.replace(/l/gi, "i"));  //heiio, worid!!!



//문자열 추출
let txt = "hello, world!!!";

console.log(txt.slice(0, 5));  //hello
//end 인덱스 바로 앞까지만 추출
console.log(txt.slice(4, 5));  //o
console.log(txt.slice(4));  //o, world!!!
console.log(txt.slice(-4));  //d!!!
//인덱스 하나 : 그 인덱스 부터 끝까지 추출


//substring: end > start -> start > end
//즉 시작, 끝 인덱스 순서 상관 없이 빠른 인덱스에서 잘림.
console.log(txt.slice(2, 6));  //llo,
console.log(txt.slice(6, 2));  //
console.log(txt.substring(2, 6));  //llo,
console.log(txt.substring(6, 2));  //llo,

//substr(start, length) 길이 기반 추출
console.log(txt.substr(2, 6));  //llo, w
console.log(txt.substr(-5, 3));  //ld!
//-1은 맨 끝 문자.


//문자열 분할
let fruits = "apple banana melon";

result = fruits.split(" ");
console.log(result);  //[ 'apple', 'banana', 'melon' ]

console.log(result[0]);  //apple
console.log(result[1]);  //banana
console.log(result[2]);  //melon

let sample = "hello kid!"

result = sample.split("");  // <- 구분자 없이 자를 한 글자씩 자를 때
console.log(result);
/*
[
  'h', 'e', 'l', 'l',
  'o', ' ', 'k', 'i',
  'd', '!'
]
*/
console.log(result.length);  //10
console.log(result[0]);  //h

result = sample.split("", 3);  // <- 3개 까지만 잘라서 넣겠다.
console.log(result);  //[ 'h', 'e', 'l' ]
console.log(result.length);  //3


