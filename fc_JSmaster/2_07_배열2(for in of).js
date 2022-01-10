//객체 순회 - 배열도 객체니까 가능하지만, 배열 순회에는 좋지 않음.


const arr4 = ['a', 'b', 'c'];
//for ... in
console.log('for ... in');
for (let key in arr4){
    console.log("for of", key);
    console.log("for of", arr4[key]);
}

//for ... of
console.log('for ... of');
for (let x of arr4){
    console.log("for of", x);
}

let fruits = ["apple", "orange", "melon"]; 
//1. use for (index)
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//apple, orange, melon


//2. use for ... (element) of
console.log('for ... of');
for (let fruit of fruits) {
    console.log(fruit);
}
//apple, orange, melon

console.log('for ... in');
//3. use for ...(key) in
for (let key in fruits){
    console.log(key);
    console.log(fruits[key]);
}
//0, apple, 1, orange, 2, melon
