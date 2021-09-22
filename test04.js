console.log('< 자바스크립트 함수 기본편2 >');
//함수 선언
function hello1(){
    console.log('hello1');
}

console.log(hello1, typeof hello1);

//매개변수
function hello2(name){
    console.log('hello2', name);
    //함수 호출할 때 값을 넘겨주면
    //함수 안에서 특정 이름으로 사용할 수 있다.
}

//리턴
function hello3(name){
    return `hello3 ${name}  !!`;
    //template string 활용한 예시
}

console.log(hello3('Mark'));

//변수에 함수 할당
const hello4 = function() {
    console.log('hello4');
}

console.log(hello4, typeof hello4);

const hello5 = function(name) {
    return `hello5 ${name}   !!`
}

console.log(hello5('Mark'));


console.log('선언적 함수와 익명 함수(변수 할당) 의 차이점');
hello6();

function hello6() {
    console.log('hello6');
}
//호출이 선언보다 위에 있어도 문제 없이 실행 된다.

// hello7();

// var hello7 = function() {
//     console.log('hello7');
// }
//결과 :
//TypeError: hello7 is not a function
/*
호이스팅

var 변수가 끌어올려지는 현상 (선언만 끌어올려짐) 
var 변수를 알긴 하지만 undefined 값이기 때문에 함수가 아니하고 한것.
*/


hello8();

const hello8 = function() {
    console.log('hello8');
}
//결과 :
//ReferenceError: Cannot access 'hello8' before initialization