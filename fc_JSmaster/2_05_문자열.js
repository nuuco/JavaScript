
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

//표준내장객체
//String MDN 검색해서 표준내장객체 확인 가능
const str = "ABC";
str.toLowerCase();  //abc
//문자열 인덱스 - 0, 1, 2 ... 배열처럼 취급
str.charAt(2);  //C
str[1]; //B
//특정 문자 찾기
const paragraph = "The quick brown fox jumps over the lazy dog.";
const searchTerm = "dog";
//includes()-> 포함여부
paragraph.includes(searchTerm); //true
paragraph.includes('hi');   //false
//indexOf()-> 포함여부 + 인덱스 번호(없으면 -1)
paragraph.indexOf(searchTerm);  //40
paragraph.indexOf('hi');    //-1


//객체(배열)를 문자열로 바꾸면
String({name: 'john'}); //[object Object]
String([1, 2, 3]); //1, 2, 3[object Object]
//-> 이렇게 나오기 때문에 JSON 사용해야함
JSON.stringify({name: 'john'}); //{"name": "john"}
JSON.stringify([1, 2, 3]); //[1, 2, 3]

//toString() - Number, Object, Date 등 다양한 객체에 들어있는
//문자열로 변환시키는 메서드
['1', 123].toString();  //1,123

//그 외 상황에서는 문자열 변환은 String()만으로 충분!







