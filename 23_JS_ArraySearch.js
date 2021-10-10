let fruits = ["apple", "orange", "banana", "orange", "melon"]; 

console.log(fruits.indexOf("orange"));  //1
console.log(fruits.indexOf("Orange"));  //-1
console.log(fruits.indexOf("orange", 2));  //3

console.log(fruits.lastIndexOf("orange")); //3
console.log(fruits.lastIndexOf("orange", -3)); //1
console.log(fruits.lastIndexOf("orange", 2));  //1
console.log(fruits.lastIndexOf("orange", 0));  //-1
//0번 부터 역방향으로 찾으면 당연히 아무것도 없으니까 -1

console.log(fruits.includes("banana"));  //true
console.log(fruits.includes("Banana"));  //false
console.log(fruits.includes(0));  //false


//배열 정렬
let nums = [1, -1, 4, 5, 2, 0];

console.log(nums.sort());  //[ -1, 0, 1, 2, 4, 5 ]
console.log(nums.reverse());  //[ 5, 4, 2, 1, 0, -1 ]

let fruits_1 = ["apple", "orange", "banana", "melon"]; 
console.log(fruits_1.sort());  //[ 'apple', 'banana', 'melon', 'orange' ]
console.log(fruits_1.reverse());  //[ 'orange', 'melon', 'banana', 'apple' ]



//배열 변환
let str = fruits.join();
console.log(str);  //apple,orange,banana,orange,melon

let str_seperator = fruits.join(";")
console.log(str_seperator);  //apple;orange;banana;orange;melon
let result = str.split(";");
console.log(result);  //[ 'apple,orange,banana,orange,melon' ]
