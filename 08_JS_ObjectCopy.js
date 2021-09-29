//객체 복사 문제점
let user1 = {
    name: "john",
    age: 23,
};

let admin = user1;

admin.name = "park";

console.log(admin.name);  //park
console.log(user1.name);  //(john이 아니라) park

user1.age = 30;
console.log(user1.age);  //30
console.log(admin.age);  //(2이 아니라) 30


console.log("< shallow copy >");
//shallow copy
//얕은 복사
//1. 반복문 for문을 통한 객체 복사
let user2 = {
    name: "john",
    age: 23,
};

let admin2 = {};

for (let key in user2){
    admin2[key] = user2[key]
};

admin2.name = "park";

console.log(admin2.name);  //park
console.log(user2.name);  //john

//2. Object.assign() 함수를 이용한 복사
let user3 = {
    name: "john",
    age: 23
};

let admin3 = Object.assign({}, user3);

admin3.name = "park";
user3.age = 30;

console.log(admin3.name);  //park
console.log(user3.name);  //john
console.log(admin3.age);  //23
console.log(user3.age);  //30


//ES6에서부터 지원하는 전개 연산자(spead operator)를 이용한 복사
let user4 = {
    name: "john",
    age: 23,
};

let admin4 = {...user4};

admin4.name = "park";
user4.age = 30;

console.log(admin4.name);  //park
console.log(user4.name);  //john
console.log(admin4.age);  //23
console.log(user4.age);  //30

//얕은 복사의 문제점
let user_shallow = {
    name: "john",
    age: 23,
    sizes: {
        height: 180,
        weight: 72,
    },
};

let admin_shallow = Object.assign({}, user_shallow);

admin_shallow.sizes.weight++;
--admin_shallow.sizes.height;

console.log(user_shallow.sizes.weight);  //73
console.log(admin_shallow.sizes.weight);  //179
console.log(user_shallow.sizes.height);  //73
console.log(admin_shallow.sizes.height);  //179




console.log("< deep copy >");
//깊은 복사 (Deep copy) 2가지 방법
//1. 재귀 함수를 이용한 깊은 객체 복사
let user5 = {
    name: "john",
    age: 23,
    sizes: {height: 180, weight: 72},
}

function copyObj(obj){
    let result = {};
    for (let key in obj){
        if(typeof obj[key] === "object") result[key] = copyObj(obj[key]);
        else result[key] = obj[key];
    }
    return result;
}

let admin5 = copyObj(user5);

admin5.sizes.weight++;

console.log(admin5.sizes.weight); //73
console.log(user5.sizes.weight);  //72


//2. .JSON 객체를 이용한 깊은 복사, stringify는 객체를 문자열로 변환하는데 이때 원본 객체와의 참조가 끊김
let user6 = {
    name: "john",
    age: 23,
    sizes: {
        height: 180,
        weight: 72,
    },
};
//stringify: js object -> string, parse: string -> js object
let admin_json = JSON.parse(JSON.stringify(user6));

admin_json.sizes.weight++;
--admin_json.sizes.height;

console.log(admin_json.sizes.weight);  //73
console.log(admin_json.sizes.height);  //179
console.log(user6.sizes.weight);  //72
console.log(user6.sizes.height);  //180

