//method
//함수의 저장
let list = [ "john", 27, function hello_func(){console.log("hello_arr");} ];

let obj = {
    name: "john",
    age: 27,
    hello_func() {
        console.log("hello_obj");
    },
};

function hello_func() { console.log("hello");}

hello_func(); //hello
obj.hello_func();  //hello_obj
list[2]();  //hello_arr

console.log(typeof hello_func);  //function
console.log(typeof obj.hello_func);  //function
console.log(typeof list[2]);  //function

console.log(Object.getOwnPropertyDescriptor(obj));  //undefined
console.log(Object.getOwnPropertyDescriptor(list));  //undefined

function hello_func(){
    console.log("hello!");
}

function hi_func(){
    console.log("hi!");
}

let func_obj = {
    name: "john",
    age: 27,
    func: hi_func,
}

hi_func();  //hi!
func_obj.func();  //hi!

func_obj.func = hello_func;
func_obj.func();  //hello!


//this 예제
let user = {name: "John"};
let admin = {name: "admin"};

//hello_func2 내 this 값은 런타임에 결정
function hello_func2(){
    console.log("hello " + this.name);
}

user.func = hello_func2;  //user.func 수행할 때, (this === user.name_)
admin.func = hello_func2; //admin.func 수행할 때, (this == admin.name)

user.func();  //hello John
admin.func();  // hllo admin

user["func"]();  //hello John
admin["func"]();  //hello admin

console.log(user);  //{ name: 'John', func: [Function: hello_func2] }
console.log(admin);  //{ name: 'admin', func: [Function: hello_func2] }
