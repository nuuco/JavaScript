//sort()
let nums = [1, -1, 4, 0, 2, 3, 10, 20, 12];

console.log(nums.sort());
//[ -1,  0, 1, 10, 12, 2, 20, 3,  4 ]
console.log(nums.reverse());
//[ 4, 3, 20,  2, 12, 10, 1,  0, -1 ]


//고차함수로 해결
let ascending_order = function (x, y) {return x - y;}
let descending_order = function (x, y) {return y - x;}

let nums_sol = [1, -1, 4, 0, 2, 3, 10, 20, 12];
console.log(nums_sol.sort(ascending_order));
//[ -1,  0,  1,  2, 3, 4, 10, 12, 20 ]
console.log(nums_sol.sort(descending_order));
//[ 20, 12, 10,  4, 3, 2,  1,  0, -1 ]



//sort() 는 대소문자 구분되어 정렬
let fruits = ["apple", "Orange", "orange", "melon"];

console.log(fruits.sort());
//[ 'Orange', 'apple', 'melon', 'orange' ]
console.log(fruits.reverse());
//[ 'orange', 'melon', 'apple', 'Orange' ]


//대소문자 구분 안하게 하기
let ascending_order_str = function (x, y) {
    x = x.toUpperCase();
    y = y.toUpperCase();

    if(x > y) return 1;
    else if (y > x) return -1;
    else return 0;
}

let descending_order_str = function (x, y) {
    x = x.toUpperCase();
    y = y.toUpperCase();

    if(x < y) return 1;
    else if (y < x) return -1;
    else return 0;
}

let fruits_sol = ["apple", "Orange", "orange", "melon"];
console.log(fruits_sol.sort(ascending_order_str));
//[ 'apple', 'melon', 'Orange', 'orange' ]
console.log(fruits_sol.sort(descending_order_str));
//[ 'Orange', 'orange', 'melon', 'apple' ]


//sort() 콜백 함수 ascending_order, descending_order 공용화

let ascending_order_all = function (x, y) {
    if(typeof x === "string") x = x.toUpperCase();
    if(typeof y === "string") y = y.toUpperCase();

    return x > y ? 1 : -1;
}

let descending_order_all = function (x, y) {
    if(typeof x === "string") x = x.toUpperCase();
    if(typeof y === "string") y = y.toUpperCase();

    return x < y ? 1 : -1;    
}

let nums_sol_all = [1, -1, 4, 0, 2, 3, 10, 20, 12];
console.log(nums_sol_all.sort(ascending_order_all));
//[ -1,  0,  1,  2, 3, 4, 10, 12, 20 ]
console.log(nums_sol_all.sort(descending_order_all));
//[ 20, 12, 10,  4, 3, 2,  1,  0, -1 ]


let fruits_sol_all = ["apple", "Orange", "orange", "melon"];
console.log(fruits_sol_all.sort(ascending_order_all));
//[ 'apple', 'melon', 'orange', 'Orange' ]
console.log(fruits_sol_all.sort(descending_order_all));
//[ 'Orange', 'orange', 'melon', 'apple' ]


//forEach()

//use for loop
//output : 1 2 3
let numbers = [1, 2, 3];
for(let i = 0; i < numbers.length; i++ ) {
    console.log(numbers[i]);
}

//use forEach
//output : 1 2 3
numbers.forEach(function (i) {
    console.log(i);
});


//map()
//use for loop
let nums_2 = [1, 2, 3, 4, 5];
let use_for_loop = [];
for (let i = 0; i < nums_2.length; i++){
    use_for_loop.push(nums_2[i] * 2);
}
console.log(use_for_loop);
//[ 2, 4, 6, 8, 10 ]

//use map
let nums_3 = [1, 2, 3, 4, 5];
let use_map = nums_3.map(function (item) {
    return item * 2;
});
console.log(use_map);
//[ 2, 4, 6, 8, 10 ]


//find()
let users = [
    { name: "bob", age: 17, job: false },
    { name: "alice", age: 20, job: false },
    { name: "john", age: 28, job: true },
];

let find_job = users.find(function (user) {
    return user.job == false;
});
console.log(find_job);
//{ name: 'bob', age: 17, job: false }

let find_age = users.find(function (user) {
    return user.age > 19;
});
console.log(find_age);
//{ name: 'alice', age: 20, job: false }



//filter()
let users_2 = [
    { name: "bob", age: 17, job: false },
    { name: "alice", age: 20, job: false },
    { name: "john", age: 28, job: true },
];

let filter_job = users_2.filter(function (user) {
    return user.job == false;
});
console.log(filter_job);
/* [
  { name: 'bob', age: 17, job: false },
  { name: 'alice', age: 20, job: false }
] */

let filter_age = users.filter(function (user) {
    return user.age > 19;
});
console.log(filter_age);
/* [
  { name: 'alice', age: 20, job: false },
  { name: 'john', age: 28, job: true }
] */


//reduce() - initial value = 0 일때
// let nums_4 = [1, 2, 3, 4, 5];
// let call_count = 0;

// console.log("result\tvalue\tindex");
// let sum = nums_4.reduce(function (accumulator, item, index, array) {
//     console.log(accumulator, "\t\t", item, "\t\t", index);
//     call_count++;
//     return accumulator + item;
// }, 0); //accumulator에 처음 넣는 index 번호가 0번
// //initial 번호가 없다면 index 1부터 시작한다.(루프 횟수를 줄이려고...)

// /* output
// result	value	index
// 0 		 1 		 0
// 1 		 2 		 1
// 3 		 3 		 2
// 6 		 4 		 3
// 10 		 5 		 4
// */

// console.log(call_count);  //5
// console.log(sum);  //15


//initial value = 1 (기본값) 일 때
let nums_4 = [1, 2, 3, 4, 5];
let call_count = 0;

console.log("result\tvalue\tindex");
let sum = nums_4.reduce(function (accumulator, item, index, array) {
    console.log(accumulator, "\t\t", item, "\t\t", index);
    call_count++;
    return accumulator + item;
}); //accumulator에 처음 넣는 index 번호가 1번
//initial 번호가 없다면 index 1부터 시작한다.(루프 횟수를 줄이려고...)

/* output
result	value	index
1 		 2 		 1
3 		 3 		 2
6 		 4 		 3
10 		 5 		 4
*/

console.log(call_count);  //4
console.log(sum);  //15

