
/* 1 */
let numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.forEach(function(number) {
    console.log(number);
})
// 1 2 3 4 5 6 7
//넘겨준 파라미터에 배열의 요소값이 순서대로 들아간다.
// = numbers.forEach(number => console.log(number));


/* 2 */
let fruits = ['banana', 'apple', 'orange', 'grape'];
let fruits2 = ['cherry'];

fruits.forEach(item => fruits2.push(item));
console.log(fruits2);
//[ 'cherry', 'banana', 'apple', 'orange', 'grape' ]


/* 3 */
let sum = 0;
let scores = [20, 11, 33, 10, 7, 77];

scores.forEach(addTotal);
function addTotal(score){
    sum += score;
}
console.log(sum);
//158
// = scores.forEach(score => {sum += score;})


/* 4 */
let scores2 = [20, 11, 33, 10, 7, 77];
scores2.forEach((number, index, array) => {
    //(요소 값, 요소 인덱스, forEach() 호출한 배열)
    array[index] = number * 2; 
    //모든 요소를 * 2 해주는 방법
});
console.log('모든 요소 2배', scores2);
//모든 요소 2배 [ 40, 22, 66, 20, 14, 154 ]

/** forEach()
 * arr.forEach( callback(currentvalue[, index[, array]])[, thisArg] )
 * arr.forEach( 콜백함수(요소 값, [요소 인덱스], [호출한 배열]), [콜백 실행 시 this로 사용할 값] )
 * 콜백함수의
 *      첫 번째 인수 : 요소 값 = 현재 처리할 요소 (순서대로 요소를 빼온다.) = 이게 this 가 된다.
 *      두 번째 인수 : 요소 인덱스
 *      세 번째 인수 : forEach() 호출한 배열
 *      -> 보통 첫 번째 인수만 쓰는 편, 다른 인수는 [옵셔널]
 */

/* 예외를 던지지 않고는 forEach()를 중간에 멈출 수 없다. 
 * 중간에 멈춰야 한다면 forEach()가 적절한 방법이 아닐지도 모른다.
 */