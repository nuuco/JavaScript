//배열 조작하기

//1. 배열 추가 삭제 (LIFO - Back)
let fruits = ["apple", "orange", "melon"];

ret = fruits.push("watermelon");
console.log(fruits);  //[ 'apple', 'orange', 'melon', 'watermelon' ]
console.log(ret);  //4

ret = fruits.pop();
console.log(fruits);  //[ 'apple', 'orange', 'melon' ]
console.log(ret);  //watermelon


//2. 배열 추가 삭제 (LIFO - Front)
let fruits_2 = ["apple", "orange", "melon"];

ret = fruits_2.shift();
console.log(fruits_2);  //[ 'orange', 'melon' ]
console.log(ret);  //apple

ret = fruits_2.unshift("watermelon");
console.log(fruits_2);  //[ 'watermelon', 'orange', 'melon' ]
console.log(ret);  //3


//배열 조작

let fruits_3 = ["apple", "orange", "melon"];

console.log(fruits_3.splice(1));  //[ 'orange', 'melon' ]
console.log(fruits_3);  //[ 'apple' ]

fruits_3 = ["apple", "orange", "melon", "strawberry"];
console.log(fruits_3.splice(1, 1));  //[ 'orange' ]
console.log(fruits_3);  //[ 'apple', 'melon', 'strawberry' ]

console.log(fruits_3.splice(1, 1, "mango", "kiwi"));  //[ 'melon' ]
console.log(fruits_3);  //[ 'apple', 'mango', 'kiwi', 'strawberry' ]


//배열 삭제 (index)
let fruits_4 = ["apple", "orange", "melon"];

console.log(fruits_4.slice(1));  //1번 부터 끝까지,[ 'orange', 'melon' ]
console.log(fruits_4);  //[ 'apple', 'orange', 'melon' ]

console.log(fruits_4.slice(1, 2));  //[ 'orange' ]
console.log(fruits_4.slice(-2));  //[ 'orange', 'melon' ]


//배열 병합
let fruits_5 = ["apple", "orange", "melon"]; 

console.log(fruits_5.concat("strawberry"));
//[ 'apple', 'orange', 'melon', 'strawberry' ]
console.log(fruits_5.concat("a", "b"));
//[ 'apple', 'orange', 'melon', 'a', 'b' ]
console.log(fruits_5.concat(["cherry", "banana"]));
//[ 'apple', 'orange', 'melon', 'cherry', 'banana' ]
console.log(fruits_5.concat(["cherry", "banana"], "mango"));
//[ 'apple', 'orange', 'melon', 'cherry', 'banana', 'mango' ]
console.log(fruits_5);
//[ 'apple', 'orange', 'melon' ] -> 원본 유지


//배열 반복문
let fruits_6 = ["apple", "orange", "melon"]; 


//1. use for (index)
for (let i = 0; i < fruits_6.length; i++) {
    console.log(fruits_6[i]);
}
//apple, orange, melon

//2. use for ... (element) of
for (let fruit of fruits_6) {
    console.log(fruit);
}
//apple, orange, melon

//3. use for ...(key) in
for (let key in fruits){
    console.log(key);
    console.log(fruits[key]);
}
//0, apple, 1, orange, 2, melon



