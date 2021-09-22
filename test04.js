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


// hello8();

// const hello8 = function() {
//     console.log('hello8');
// }
//결과 :
//ReferenceError: Cannot access 'hello8' before initialization

//생성자 함수
const sum = new Function('a', 'b', 'c', 'return a + b + c');

console.log(sum(1, 2, 3));

//매개변수 a, b, c를 받아서 마지막 코드내용을 실행
//호출 먼저하면 정의되지 않았다고 뜬다.
//ReferenceError: Cannot access 'sum' before initialization

console.log('< function 과 new Function() 차이점 >');


global.a = 0;
{
    const a = 1;
    const test = new Function('return a');

    console.log(test());
}
//결과 : 0
//const a 에는 접근 못함
//new Function 상위 범위의 변수에 접근할 수 없다.
//단, global 변수에는 접근 가능.

{
    const a = 1;
    const test = function() {
        return a;
    }
    console.log(test());
}
//결과 : 1
//global.a 가 아닌 스코프 안의 상위 const a 에 접근한다.

console.log('< arrow function >');

const hello9 = () => {
    console.log('hello9');
}
//선언적 방식으로 쓸 수는 없다. 항상 익명 함수

//매개 변수가 하나일 때, 괄호 생략 가능.
//매개 변수가 하나가 아닐 때는 항상 괄호 필요!
const hello10 = text => {
    console.log('hello10', text);
} 

//함수 리턴
//리턴 값만 있을 경우 중괄호{}를 생략하고 쓸 수 있다.
// const hello11 = age => {
//     return `hello11 ${age}`;
// };

//위와 동일
const hello11 = age => `hello11 ${age}`;

console.log(hello11(22));

console.log('< 생성자 함수 >');
//생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법

function Person(name, age){
    this.name = name;
    this.age = age;
    //인자로 넣어준 값을 객체가 프로퍼티로 가지고 있게 만드는 것.
}

const p = new Person('Dave', 37);
console.log(p, p.name, p.age);
//결과 :
//Person { name: 'Dave', age: 37 } Dave 37

const p2 = new Person('Anna', 25);
//여러 객체를 만들 수 있다.

//함수는 객체이기 때문에, 함수 안에서 함수를 만들어 리턴 가능하다.
function plus(base) {
    return function(num) {
        return base + num;
    }
}

const plus5 = plus(5);  //plus5 = num => 5 + num;
console.log(plus5(10)); //결과 : 15

const plus7 = plus(7);  //plus7 = num => 7 + num;
console.log(plus7(10)); //결과 : 17


console.log('< 인자로 함수를 가진 함수, 콜백 함수 >');
//함수를 호출할 때, 인자로 함수를 사용 가능

function hello(callback){
    console.log('hello');
    callback()
;}

hello(function(){
    console.log('콜백');
})
//결과 :
/*
hello
콜백
*/