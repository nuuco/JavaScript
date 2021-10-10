//배열 선언/접근/속성
let arr_1 = new Array(10);
let arr_2 = [];

console.log(arr_1);  //[ <10 empty items> ]
console.log(arr_2);  //[]

let fruits = ["apple", "orange", "melon"];
console.log(fruits);  //[ 'apple', 'orange', 'melon' ]
console.log(fruits.length);  //3
console.log(fruits[0]);  //apple
console.log(fruits[1]);  //orange
console.log(fruits[2]);  //melon
console.log(fruits.length);  //3

fruits[1] = "kiwi";
console.log(fruits);  //[ 'apple', 'kiwi', 'melon' ]


//배열의 실체
let nums = [];

nums.push("one");
nums.push("two");
console.log(nums.length);  //2
console.log(nums);  //[ 'one', 'two' 

nums["once"] = "once";
nums["twice"] = "twice";
console.log(nums.length);  //2
console.log(nums);  //[ 'one', 'two', once: 'once', twice: 'twice' ]

console.log(Object.getOwnPropertyDescriptors(nums));
/*
{
  '0': {
    value: 'one',
    writable: true,
    enumerable: true,
    configurable: true
  },
  '1': {
    value: 'two',
    writable: true,
    enumerable: true,
    configurable: true
  },
  length: { value: 2, writable: true, enumerable: false, configurable: false },
  once: {
    value: 'once',
    writable: true,
    enumerable: true,
    configurable: true
  },
  twice: {
    value: 'twice',
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/


//배열 타입 확인
let num = 123.456;
let str = "Here I am!";
let fruit = ["apple", "orange", "melon"];

console.log(Array.isArray(num));  //false
console.log(Array.isArray(str));  //false
console.log(Array.isArray(fruit));  //true


//배열 요소 삭제
let fruits_2 = ["apple", "orange", "melon"];

console.log(fruits_2);  //[ 'apple', 'orange', 'melon' ]
console.log(fruits_2.length);  //3

delete fruits_2[1]; 
console.log(fruits_2);  //[ 'apple', <1 empty item>, 'melon' ]
console.log(fruits_2.length);  //3
