
const singleQuote = '';
const doubleQuote = "";

//ES2015+ 부터 백킷을 쓸 수 있다. (최신문법)
const backQuote = ``;

//여러행 입력시
const multiLine = 
'1\
2\
3'; //이렇게 \를 써줘야했다. 안 쓰면 오류남.

///하지만 ES2015+ 부터 백킷을 쓸 수 있어 개행 넣기 편해짐
multiLine =
`1
2
3`;

console.log(multiLine);

//빈문자열 만들 때 null 넣지말것. 연산할 때 문자열로 인식
const empty = null;
console.log(empty + 'hi');  //'nullhi'
empty = '';  //빈 따옴표로 충분하다.