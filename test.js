console.log('>>>>>>test01<<<<<<');

let age = 12;
{
    age = 15;
    console.log(age);
}

console.log(age);


console.log('>>>>>>test02<<<<<<');

const a = 'a';

if (a === 'a'){
    console.log(a);
}

{
    var foo = 'foo';
    console.log(foo);
}

console.log(foo);

function bar() {
    var baz = 'baz';
    console.log(baz);
    console.log(foo);
}

bar();

console.log('>>>>>>test03<<<<<<');

console.log(text);

var text = 'hello world!';

console.log('>>>>>>test04<<<<<<');

const year = 2021;
const sung = 'Kim';

console.log(year - sung);

console.log('>>>>>>test05<<<<<<');
const nu = null;
let d;
console.log(nu == d); //값만 비교
console.log(nu === d); //값 뿐만 아니라 타입까지 비교

console.log('>>>>>>test06<<<<<<');
const c = 37;
console.log(c, typeof c);

const e = 96.7;
console.log(e, typeof e);

const f = NaN;
console.log(f, typeof f);

console.log('>>>>>>test07<<<<<<');

const name = 'David';
//이 때 따옴표가 아니라 tab 위의 backtick(`) 씀
const st = `${name} Lee`;
console.log(st);

console.log('>>>>>>test08<<<<<<');
const number = 0;
const isActive = false;

console.log(number == isActive);

console.log('>>>>>>test09<<<<<<');
const s1 = Symbol('hi');
const s2 = Symbol('hi');

console.log(s1 == s2);

console.log('>>>>>>test10<<<<<<');
const firstName = 'Jin';
const lastName = 'Kim';

console.log(`${firstName}-${lastName}`);

console.log('>>>>>>test11<<<<<<');
const result = 15 / 3;

if (result > 0) {
    console.log('양수');
} else if (result === 0) {
    console.log('0');
} else {
    console.log('음수');
}

console.log('>>>>>>test12<<<<<<');

const n = 18;
const isMultipleOfThree = n % 3 === 0;
const isMultipleOfFive = n % 5 === 0;

if (isMultipleOfThree && isMultipleOfFive) {
    console.log('15의 배수');
} else {
    if(isMultipleOfThree) {
        console.log('3의 배수');
    } else if (isMultipleOfFive){
        console.log('5의 배수');
    }
}

console.log('>>>>>>test13<<<<<<');
const num13 = 15 / 3;

console.log(n % 4 === 0 && '5의 배수입니다.');

console.log('>>>>>>test14<<<<<<');
const aged = 20;
const canDrink = aged >= 20 ? true : false;

console.log(canDrink);

console.log('>>>>>>test15<<<<<<');
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('>>>>>>test16<<<<<<');
for (let i = 0; i < 10; i++) {
    if(i % 2 === 0){
        console.log(i);
    }
}

console.log('>>>>>>test17<<<<<<');
let test17 = 0;

while (test17 < 10){
    console.log(test17 + ' : n is less than 10');
    test17 += 1;
}

console.log('>>>>>>test18<<<<<<');
greeting('Jin');

function greeting (name){
    console.log(`Hi ${name}!`);
}


console.log('>>>>>>test19<<<<<<');
function Person(name, age){
    this.name = name;
    this.age = age;
}

const person = new Person('Jin', 99);
console.log(person.age);


console.log('>>>>>>test20<<<<<<');
function Person2(name) {
    this.name = name;
}

Person2.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}.`);
}

const me = new Person2('Jin', 99);
me.sayHello();


console.log('>>>>>>test20<<<<<<');

class Person3 {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    sayHello2(){
        console.log(`Hi! My name is ${this.fullName}`);
    }
}

const me1 = new Person3('Jin', 'Kim');
me1.sayHello2();

console.log('>>>>>>test20<<<<<<');
class Animal {
    constructor(name) {
        this.name = name;
    }

    attack() {
        console.log('attack');
    }
}

class Lion extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    attack() {
        console.log('attack!!');
    }
}

const lion = new Lion('leo', 'white');
lion.attack();