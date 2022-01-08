
const singleQuote = '';
const doubleQuote = "";

//ES2015+ 부터 백킷을 쓸 수 있다. (최신문법)
const backQuote = ``;

//여러행 입력시
const multiLine = 
'1\
2\
3'; //이렇게 \를 써줘야했다. 안 쓰면 오류남.

console.log(multiLine);    //123

///하지만 ES2015+ 부터 백킷을 쓸 수 있어 개행 넣기 편해짐
const multiLine2 =
`1
2
3`;

console.log(multiLine2);    
/*
1
2
3
*/

//빈문자열 만들 때 null 넣지말것. 연산할 때 문자열로 인식
let empty = null;
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


//문자열 병합
function genHello(name){
    const resultName = name || '이름없음'; //기본값 넣기
    return '안녕하세요. ' + resultName + '님 반갑습니다.';
}

genHello('nuuco');


//문자열과 배열
//문자열 -> 배열 = .split('');  괄호 안에 나누는 기준이 되는 문자열 넣어준다.
console.log('HELLO,WORLD'.split(''));   //['H', 'E', 'L', 'L', 'O', ',', 'W', 'O', 'R', 'L', 'D']
console.log('HELLO,WORLD'.split(','));  //[ 'HELLO', 'WORLD' ]
//또는 전개 연산자를 이용해 문자열 -> 배열 전환 가능
const helloWorld = 'HELLO WORLD';
console.log([...helloWorld]);   //['H', 'E', 'L', 'L', 'O', ',', 'W', 'O', 'R', 'L', 'D']


//배열 -> 문자열 = .join('');
console.log(['H', 'E', 'L', 'L', 'O', ',', 'W', 'O', 'R', 'L', 'D'].join(''));  //HELLO,WORLD
console.log(['H', 'E', 'L', 'L', 'O', ',', 'W', 'O', 'R', 'L', 'D'].join('-'));  //H-E-L-L-O-,-W-O-R-L-D


//배열과 문자열 모두 length 속성을 사용할 수 있다.
console.log('hello'.length); //5



/**ES2015+
 * Template Literals
 * 1. 멀티라인 (개행)이 자유로움
 * 2. Basic String Formatting => 보간법 활용 => 표현식을 문자열에 포함
 * 3. HTML Escaping: 안전하게 사용하도록 도움 (XSS, SQL, Injection)
 * 
 */
//보안에 취약한 예시
const htmlTemplate = '<div>안녕하세요</div>';
//body.innerHTML = htmlTemplate;

//보안이 좀 더 강화된 예시
function genHi(name){
    return `<div>안녕하세요. ${name}님 환영합니다.</div>`;
}
const divTag = genHi('nuuco');
//body.innerHTML = divTag;

