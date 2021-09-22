//생성자 함수

function A() {}

const a = new A();
//new A()를 통해 객체가 만들어져서 그 객체가 a 변수에 할당됨.

console.log(a, typeof a);
//A {} object

console.log(A());
//객체를 생성하는 게 아니기 때문에
//그냥 A() 함수를 실행하고 return 값을 받아온다.

//생성하면서 데이터 넣기
function B(name, age){
    console.log(name, age);
}

const b = new B();
//인자를 넣지 않으면, undefined undefined 가 찍힘.

const b2 = new B('Mark', 37);
//인자를 넣으면 그 데이터가 들어감.
//Mark 37

console.log(B());
//객체를 만들지 않고 그냥 함수 실행시
/*
undefined undefined  <- 비어있는 name, age 값 찍힘.
undefined <- B() 의 return 값이 없어서 undefined로 찍힘.
*/

//객체에 속성 추가하기 (property)

//1. 값을 속성으로 넣기
function Value(){
    this.name = 'Mark'
}

const value = new Value();
console.log(value);
//Value { name: 'Mark' }

//2. 함수를 속성으로 넣기
function Func() {
    this.hello = function() {
        console.log('hello');
    }
}

new Func().hello();
//hello

//new Function() 에서 Function 이 생성자 함수인 것이다.
//표준 내장 객체


console.log('< new Object() 로 객체 만들기 >');
//Object : 기초가 되는 객체

const o = new Object();

console.log(o, typeof o);
//{} object

const o2 = new Object(true);

console.log(o2, typeof o2);
//[Boolean: true] object

const o3 = new Object({name : 'Mark'});
console.log(o3, typeof o3);
//{ name: 'Mark' } object


console.log('< 프로토타입 체인 .prototype>');

function Person(name, age){
    this.name = name;
    this.age = age;
    this.hello = function(){
        console.log('hello', this.name, this.age);
    };
}

const p = new Person('Mark', 37);

p.hello();
//hello Mark 37

console.log(p.toString());
//[object Object]
//우리가 작성하지 않은 함수도 객체에 있다?

console.log(Person.prototype);
//{}
console.log(Person.prototype.toString);
//[Function: toString]
console.log(Person.prototype.constructor);
//[Function: Person] <- constructor 는 이 함수 자체를 의미.
console.log(Person.hello);
//undefined
//객체로 생성이 되야지, hello 함수를 쓸 수 있다.
console.log(Person.prototype.hello);
//undefined

Person.prototype.hi = function() {
    console.log('hi', this.name, this.age);
}
console.log(Person.prototype.hi);
//[Function (anonymous)]
//객체를 생성했을 때, 사용할 수 있는 무언가.

console.log(Object.prototype);
// [Object: null prototype] {}
console.log(Object.prototype.toString);
// [Function: toString]
console.log(Object.prototype.constructor);
// [Function: Object]


console.log(p instanceof Person);
//true
console.log(p instanceof Object);
//true

//instanceof
//p가 Person 에서 나온 인스턴스 인지 boolean 값으로 알려줌.
// -> p 객체는 Person이라는 함수에서 나왔는데,
// 그 Person 은 Object로 부터, 프로토타입 체인을 받아온 후에
// 내가 설정한 프로퍼티를 가지고 있는 형태가 되는 것.


//프로토타입을 이용한 객체 확장

function Person2(){}

Person2.prototype.hello = function() {
    console.log('hello');
}

function Korean(region){
    this.region = region;
    this.where = function() {
        console.log('where', this.region);
    };
}

Korean.prototype = Person2.prototype;

const k = new Korean('Seoul');

k.hello();
k.where();
// hello
// where Seoul

console.log(k instanceof Korean);
console.log(k instanceof Person2);
console.log(k instanceof Object);
//Object > Person2 > Korean > k
/*
true
true
true
*/


console.log('< 객체 리터럴 object literal >');
const literal = {};

console.log(literal, typeof literal);
//{} object

const li = {
    name : 'Mark'
}

console.log(li, typeof li);
//{ name: 'Mark' } object

//프로퍼티엔 당연히 함수도 넣어줄 수 있다.
const li2 = {
    name : 'Mark',
    hello1() {
        console.log('hello1~!', this.name);
    },
    hello2: function() {
        console.log('hello2~!', this.name);
    },
    hello3: () => {
        console.log('hello3~!', this.name);
    }
};

li2.hello1();
li2.hello2();
li2.hello3();
//arrow function 을 사용했을 때는 this 가 그 객체를 가리키지 못한다.
//주의!

/*
hello1~! Mark
hello2~! Mark
hello3~! undefined
*/

//표준 내장 객체
//1. Array
const arr = new Array('red', 'black', 'white');

console.log(arr, typeof arr);
//[ 'red', 'black', 'white' ] object
console.log(arr instanceof Array);
console.log(arr instanceof Object);
//true
//true


const arr2 = ['red', 'green', 'yellow'];
console.log(arr2, typeof arr2);

console.log(arr2.slice(0, 1));
console.log(Array.prototype.slice, Object.prototype.slice);
//[Function: slice] undefined



