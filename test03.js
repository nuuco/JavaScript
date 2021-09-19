console.log('< 자바스크립트 함수 기본편 >');

console.log(undefined === null);

function sum(a, b) {
    return a + b;
}
console.log(sum(1, '2'));

const cat = {
    name: '고양이',
    sound: '야옹!',
    say() {
        console.log(this.sound);
    },
};

cat.say();



console.log('< test16 >');
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());

console.log('< test03 >');
function checkAge(data) {
    if (data === {age: 18}) {
        console.log('You are an adult!');
    } else if (data == {age: 18}) {
        console.log('You are still an adult.');
    } else {
        console.log('Hmm... You don\'t have an age I guess.');
    }
}

checkAge({age: 18});


console.log('< test04 >');
const user = {
    nickName: 'John',
    years: 30
};

const {nickName, years: age, isAdmin = false} = user;

console.log(nickName);
console.log(age);
console.log(isAdmin);

console.log('< test05 > ');
function getAge(...args){
    console.log(typeof args);
}
getAge(20);

console.log('< test06 > ');
let x = 1;

function func() {
    console.log(x);
}

func();

console.log('< test07 > ');

function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };

    this.down = function () {
        return --count;
    };
}

const counter = new Counter();

console.log(counter.up());
console.log(counter.up());
console.log(counter.down());



console.log('< test02 > ');
function test01(){
    for (var i = 0; i < 3; i++){
        setTimeout(() => console.log(i), 1);
    }

    for (let j = 0; j < 3; j++) {
        setTimeout(() => console.log(j), 1);
    }
};
test01();


