//재귀 함수
//1. basic recursive function
function recursive(num){
    if(num == 0) return;
    console.log(num);
    recursive(num - 1);
}
recursive(3); //3 2 1


//2. factorial function
function factorial(x){
    if(x == 0) return 1;
    return x * factorial(x - 1);
}

const num = 3;

let result = factorial(num);

console.log(`The factorial of ${num} is ${result}`);
//The factorial of 3 is 6
