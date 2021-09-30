//global scope
let x = 1;
let y = 2;

console.log(x);  //1
console.log(y);  //2

{
    //local scope
    let x = 3;
    let y = 4;
    console.log(x);  //3
    console.log(y);  //4
}

function scope(){
    //local scope
    let x = 5;
    let y = 6;
    console.log(x);  //5
    console.log(y);  //6
}

scope();

console.log(x);  //1
console.log(y);  //2


//지역 변수를 scope 밖에서 접근하면 에러

//global scope
let A = 1;
let B = 2;

{
    //local scope
    let C = 3;
    let D = 4;

    console.log(A);  //1
    console.log(B);  //2
}

//console.log(C);  //ReferenceError: C is not defined


//local scope 내에 local scope 가 겹쳐있으면?

//global scope
let a = 1;

{
    //local scope
    let C = 3;
    let D = 4;

    console.log(C);  //3

    {
        //local scope (in local scope)
        let C = 5;
        let D = 6;

        console.log(C);  //5
    }

    console.log(D);  //4
}

//local scope -> Block Level Scope / Funtion Level Scope

let index = 1000;
function local_func() {
    //function level scope
    let index = 100;

    for(let index = 0; index < 10; index++){
        console.log(index);  //0 ~ 9
    }

    console.log(index);  //100
}

local_func();
console.log(index);  //1000