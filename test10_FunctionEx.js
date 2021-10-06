//두 정수를 입력 받아 가장 큰 값을 출력해주는 함수를 작성하시오.
//1. if
function MAX(x, y){
    if(x > y) return x;
    else return y;
}

console.log(MAX(0, 3));  //3
console.log(MAX(-1, 5));  //5
console.log(MAX(100, 7));  //100

//2. 삼항연산자
function MAX2(x, y){
    return x > y ? x : y;
}

console.log(MAX2(0, 3));  //3
console.log(MAX2(-1, 5));  //5
console.log(MAX2(100, 7));  //100