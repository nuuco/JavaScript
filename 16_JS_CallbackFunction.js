//콜백 함수 Callback Function
//인자로 넘겨지는 함수
//좋은 콜백 함수의 예
function add(x, y){
    return x + y;
}

function sub(x, y){
    return x - y;
}

function mul(x, y){
    return x * y;
}

function div(x, y){
    return x / y;
}

function calculator(callback, x, y){
    return callback(x, y);
}

console.log(calculator(add, 7, 3));  //10
console.log(calculator(sub, 7, 3));  //4
console.log(calculator(mul, 7, 3));  //21
console.log(calculator(div, 7, 3));  //2.3333333333


//call by value
let a = 1;
let add1 = function (b) {b = b + 1;};  //callee
add1(a);  //caller
console.log(a);  // 1


//call by reference
var c = {v: 1};
var add2 = function (d) {d.v = d.v + 1;};  //callee
add2(c); //caller
console.log(c.v);  //2