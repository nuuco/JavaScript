//요소 추가 삭제
let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set("Hello!");

console.log(set);
//Set(0) {}
console.log(num);
//Set(5) { 1, 2, 3, 4, 5 }
console.log(str);
//Set(5) { 'H', 'e', 'l', 'o', '!' }

/* 1. add */
set.add(1).add(1).add(10).add(20);
console.log(set);
//Set(3) { 1, 10, 20 }

/* 2. has */
console.log(set.has(10)); //true
console.log(set.has(2));  //false

/* 3. delete */
console.log(set.delete(1)); //true  - 삭제되면 true 반환
console.log(set.delete(-1));  //false - 없으면 false 반환(에러발생 안함!)
console.log(set);
//Set(2) { 10, 20 }


//set 반복문
let string = new Set("Hello!");

console.log(string);
//Set(5) { 'H', 'e', 'l', 'o', '!' }

for (let item of string) console.log(item);
//H e l o !
for (let item of string.keys()) console.log(item);
//H e l o !
for (let item of string.values()) console.log(item);
//H e l o !
for (let item of string.entries()) console.log(item);
//[ 'H', 'H' ] [ 'e', 'e' ] [ 'l', 'l' ] [ 'o', 'o' ] [ '!', '!' ]

console.log(string.keys());  // <- [value]  
//[Set Iterator] { 'H', 'e', 'l', 'o', '!' }
console.log(string.entries());  
/*[value, value] <-- Map 과의 호환성을 위해 존재
[Set Entries] {
  [ 'H', 'H' ],
  [ 'e', 'e' ],
  [ 'l', 'l' ],
  [ 'o', 'o' ],
  [ '!', '!' ]
}
*/