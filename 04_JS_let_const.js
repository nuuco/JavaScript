//변수
let a = 22; //상수 선언 및 값 초기화
console.log(a); //결과 : 22

a = 452; //값 재할당
console.log(a); //결과 : 452

//let a = 785; //재 선언 -> 에러
//SyntaxError: Identifier 'a' has already been declared


//상수
const b = 123; //상수 선언 및 값 초기화
console.log(b); //결과 : 123

//b = 224; //값 재할당 -> 에러
//TypeError: Assignment to constant variable.

const c; //초기화 없이 상수 선언 -> 에러
//SyntaxError: Missing initializer in const declaration



//변수 상수 예제 코드

//선언 후 할당
let hi;
hi = "hello";

//선언과 동시에 초기화
let halo = "hello!";

//한 줄에 여러 변수 선언과 초기화
let name = "join", age = 13, msg = 'hello';

//상수는 보통 대문자로 표기
const TESTCASE = 5;
const BIRTYDAY = '2000.1.1';