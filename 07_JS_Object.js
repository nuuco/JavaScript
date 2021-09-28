//객체

let user = {
    name: 'john',
    age: 27,
}

console.log(typeof user);  //object
console.log(typeof user.name);  //string
console.log(typeof user.age);  //number

console.log(user.name);  //john
//키값으로 접근 가능
console.log(user["name"]);  //john


user.age = 30;
console.log(user.age);  //30

//객체 내 개체 추가 삭제
let user2 = {
    name: "john",
    age: 27,
};

console.log(user2);  //{ name: 'john', age: 27 }

user2.weight = 72;  //or user2["weight"] = 72;
console.log(user2);  //{ name: 'john', age: 27, weight: 72 }

delete user2.age;
console.log(user2);  //{ name: 'john', weight: 72 }

