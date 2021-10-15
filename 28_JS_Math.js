//최대 / 최소 / 절대값
/* 1. MAX/MIN */
console.log(Math.max(1, -1));  //1
console.log(Math.min(1, -1));  //-1

console.log(Math.max(1, -1, 5, 23, 17, -4));  //23
console.log(Math.min(1, -1, 5, 23, 17, -4));  //-4

//배열 받을 때
let nums = [1, -1, 5, 23, 17, -4];
//use apply
console.log(`Max : ${Math.max.apply(null, nums)}`);  //Max : 23
console.log(`Min : ${Math.min.apply(null, nums)}`);  //Min : -4

//use spread
console.log(`Max : ${Math.max(...nums)}`);  //Max : 23
console.log(`Min : ${Math.min(...nums)}`);  //Min : -4


/* 2. ABS */
console.log(Math.abs(1));  //1
console.log(Math.abs(-1));  //1
console.log(Math.abs(-Infinity));  //Infinity


/* 3. Math property */
console.log(Math.E);  //오일러상수 - 2.718281828459045
console.log(Math.PI);  //원주율 - 3.141592653589793

/* 4. Random */
for (let i = 0; i < 3; i++){
    console.log(Math.random());
}
/*
0.3447622084409825
0.9477793006080135
0.36542427141074985
*/

for (let i = 0; i < 3; i++){
    console.log(Number.parseInt(Math.random() * 10));
}
/* 0~9까지 랜덤값
8
0
6
*/


/* 5. pow */
console.log(Math.pow(2, 3));  //
console.log(2 ** 3);  //

/* 6. sprt */
console.log(Math.sqrt(4)); //
console.log(Math.sqrt(2));  //

/* 7. round, cell, floor */
//round = 반올림
console.log(Math.round(3.3));  //3
console.log(Math.round(3.5));  //4
console.log(Math.round(-2.3));  //-2
console.log(Math.round(-2.5));  //-2

//ceil = 올림
console.log(Math.ceil(3.3));  //4
console.log(Math.ceil(3.5));  //4
console.log(Math.ceil(-2.3));  //-2
console.log(Math.ceil(-2.5));  //-2

//floor = 내림
console.log(Math.floor(3.3));  //3
console.log(Math.floor(3.5));  //3
console.log(Math.floor(-2.3));  //-3
console.log(Math.floor(-2.5));  //-3









