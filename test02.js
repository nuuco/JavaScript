console.log("< else if >");
let n1 = 21;

const multipleOfThree = n1 % 3 === 0;
const multipleOfFive = n1 % 5 === 0;

if (multipleOfThree && multipleOfFive) {
    console.log("n은 15의 배수 입니다.");
} else if (multipleOfThree){
    console.log("n은 3의 배수 입니다.");
} else if (multipleOfFive) {
    console.log("n은 5의 배수 입니다.");
} else {
    console.log("n은 3의 배수도 아니고, 5의 배수도 아닙니다.");
}

console.log("---중첩을 이용한 표현----");
if (multipleOfThree && multipleOfFive) {
    console.log("n은 15의 배수입니다.");
} else{
    if (multipleOfThree){
        console.log("n은 3의 배수 입니다.");
    } else if (multipleOfFive) {
        console.log("n은 5의 배수 입니다.");
    } else {
        console.log("n은 3의 배수도 아니고, 5의 배수도 아닙니다.");
    }
}

console.log("\n< 논리 연산자 && >");

if (true && true) {
    console.log("두 개 모두 참이면 참");
}

if (true && false) {
    console.log("한 개만 참이면 거짓");
}

if (false && false) {
    console.log("두 개 모두 거짓이면 거짓");
}

console.log("\n< 논리 연산자 || >");

if (true || true) {
    console.log("두 개 모두 참이면 참");
}

if (true || false) {
    console.log("한 개만 참이면 참");
}

if (false || true) {
    console.log("한 개만 참이면 참");
}

if (false || false) {
    console.log("두 개 모두 거짓이면 거짓");
}

console.log("\n< 논리 연산자 ! >");

if (!true) {
    console.log("참이면 거짓");
}

if (!false) {
    console.log("거짓이면 참");
}

console.log("\n< 논리 연산자를 이용한 조건부 실행 >");

let n2 = 5;

n2 % 5 === 0 && console.log("5로 나누어 떨어지면 실행");
n2 % 7 === 0 && console.log("7로 나누어 떨어지면 실행");

n2 % 5 === 0 || console.log("5로 나누어 떨어지지 않으면 실행");
n2 % 7 === 0 || console.log("7로 나누어 떨어지지 않으면 실행");

console.log("\n< 삼항 연산자를 이용한 조건부 실행 >");

let n3 = 5;

const msg = n3 % 5 === 0 ? "5의 배수입니다." : "5의 배수가 아닙니다.";
console.log(msg);

console.log("\n< switch 조건문 >");

let n4 = 16;

switch (n4 % 5) {
    case 0 : {
        console.log('5의 배수입니다.');
        break;
    }
    case 1 : 
    case 2 :
    case 3 :
    case 4 :
        console.log('5의 배수가 아닙니다.')

    default:
        console.log(n4);
}

console.log("\n< for 반복문 >");
for (let i = 0; i < 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i + "번 반복 중")
}

let n5 = 1;
for (;;){
    console.log(n5 + "안녕하세요.");
    n5 = n5 + 1;
    if(Math.random()*10 > 8){
        break;
    }
}


console.log("\n< while 반복문 >");

let n6 = 1;
while (true){
    console.log(n6 + "안녕하세요.");
    n6++;
    if(Math.random()*10 > 8){
        break;
    }
}

console.log("\n< do while 반복문 >");

let n7 = 1;
do {
    console.log(n7 + "처음은 반드시 실행");
    n7++;
} while(Math.random()*10 < 8);


console.log("\n< for of 반복문 >");

for (const i of [1, 2, 3]) {
    console.log(i);
}

console.log("\n< for in 반복문 >");

Object.prototype.test = function(){};

for (const i in {a: 1, b: 2, c: 3}) {
    console.log(i);
}