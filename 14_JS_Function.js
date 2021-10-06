//함수 정의의 3가지 방식
/*
1. 함수 선언식(Function Declarations)
function func (arg1, arg2, ...argN){
    expression;
}
*/
function add1(x,y){
    return x + y;
};

/*
2. 함수 표현식(Function Expressions)
const func = function (arg1, arg2, ...argN){
    expression;
}
*/
const add2 = function (x, y){
    return x + y;
};


/*
3. 화살표 함수(Arrow Function)
const func = (arg1, arg2, ...argN) => expression; 
*/
const add3 = (x, y) => x + y;
//바로 리턴할 경우 이렇게


//함수 호출
//1. default value (기본값)
//y = 10 은 y 값이 안들어 오면 기본값으로 10을 설정하겠다는 의미
function print_add(x, y = 10) {
    console.log(`${x} + ${y} = ${x + y}`);
};
print_add(10, 20, 30); //10 + 20 = 30
print_add(10, 20); //10 + 20 = 30
print_add(10); //10 + 10 = 20
print_add(); //undefined + 10 = NaN


//2. dynamic parameters
//매개변수가 없어도 넘어온 값을 핸들링 가능
function print_min() {
    //console.log(arguments);
    console.log(arguments[0] - arguments[1]);
};
print_min(10, 20, 30); //-10
print_min(10, 20);  //-10
print_min(10);  //NaN
print_min();  //NaN

//arguments 를 출력하면 이렇게 나옴.
//[Arguments] { '0': 10, '1': 20, '2': 30 }


//함수 반환
function add4(x, y) {
    return x + y;
    console.log("Hello!"); //실행되지 않음!
};

function dummy(){}
//이 경우 리턴값은 undefined

function checkAge(age){
    if(age >= 18){
        return true;
    }else{
        return false;
    }
}

console.log(add4(10, 20));  //30
console.log(dummy());  //undefined
console.log(checkAge(14));  //false
console.log(checkAge(28));  //true

