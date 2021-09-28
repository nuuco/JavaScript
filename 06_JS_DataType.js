//자료형

//typeof x
console.log(typeof undefined);  //undefined
console.log(typeof 123);  //number
console.log(typeof 456n);  //bigint
console.log(typeof true);  //boolean
console.log(typeof "hello");  //string
console.log(typeof Symbol("id"));  //symbol
console.log(typeof Math);  //object
console.log(typeof null);  //object
console.log(typeof console.log);  //function

//typeof(x)
console.log(typeof(123));  //number


//boolean
let name_check = true; //네, name 입력이 확인되었습니다.

let value_check = 10 > 3 //비교 결과 -> 참 : true 값 할당 됨
console.log(value_check);  //true


//null & undefined
console.log(typeof null) //object <- 하위 버전 호환성으로 object 표기

const null_check = null;
console.log(null_check === null)  //true

let name;  //할당 후 초기화 하지 않음.
console.log(name);  //undefined


//number
let num_1 = 123.0;
let num_2 = 123.456; 
let num_3 = 1/ 0;    //infinity
let num_4 = 123456n;  //Bigint("123456")

console.log(num_1 - num_2); //-0.45600000000000307
console.log((num_1 - num_2).toFixed(3)); // -0.456
console.log(num_3);  //infinity
console.log(num_1 / "hello");  //NaN
console.log(typeof num_4);  //bigint


//string
let my_name = "John";
let text = `hello ${my_name}`;  

console.log(text);
//hello John

