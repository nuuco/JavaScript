//1. 할당 연산자 =
const arr = [];
arr[0] = 3;
arr[1] = 4;
arr[2] = 5;

arr[0] = 6;
arr;    //[6, 4, 5]

//변수 선언 시 할당까지 해주기 (=초기화)
let x = '';
//const는 선언만 하면 오류 -> 반드시 초기화 까지
const y = 'hi';

//2. 삼항 연산자 - 3개의 피연산자, 조건 연산자
const val = (10>5) ? '참이다' : '거짓이다.';
val;    //참이다

//3. 비교 연산자
//이상 / 초과
//이하 / 미만
//주로 '대상' <= or >= '비교할 값' 을 넣어주는 게 좋다.
if(age >= 10) {

}

//4. typeof - primitive 값을 타입 확인할 때 사용
//primitive => string, number, bigint, boolean, undefined, symbol, null

typeof 'string';    //string
typeof 123;    //number
typeof 1n;    //bigint
typeof Symbol();    //symbols
//reference 값인 배열, 객체, null 은 object 로 나오는 것에 주의!
typeof [];  //object
typeof {};  //object
typeof null;  //object
//또한 wrapper 객체로 만든 것도 object 로 나온다.
typeof new Boolean(true);   //object

//typeof null 이 object 타입으로 나오는 이유 => JS 초기 설계 오류
//이미 만들어진 프로그램이 많아서 그냥 두기로 합의



//5. instanceof - 객체의 인스턴스가 어떤 생성자로 생성된 것인지
//reference 타입의 값인지 검사할 때 쓴다. 
//{} instanceof Object; -> true or false
const obj = {};
const arr = [];
const func = function () {};

obj instanceof Object;  //true
arr instanceof Array;   //true
arr instanceof Object;   //true
func instanceof Function;   //true
//reference 타입의 최상위인 Object 로 검사하면 다 true

undefined instanceof Object;    //false
//null 은 원시값이기 때문에 false
null instanceof Object; //false
