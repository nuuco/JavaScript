/**
 * 배열
 * 1. 객체이다.
 * 2. 딕셔너리 형태 index: value
 * 3. index 는 0번 부터 시작
 */

//리터럴로 만들기
const arr = [1, 2, 3];
//인스턴스로 만들기
const arr2 = new Array(1, 2, 3);

//접근하기
//1. 인덱스로
arr[0];     //1

//추가하기
arr[3] = 4;
arr.push(5);

//건너 뛰어서 추가하면 가운데 빈 요소가 생김 
arr[9] = 10;
console.log(arr.length);    //10
console.log(arr);   //[ 1, 2, 3, 4, 5, <4 empty items>, 10 ]
console.log(arr[7]);    //undefined

//배열은 객체이다.
arr.prop = [6, 7];
console.log(arr);   //[ 1, 2, 3, 4, 5, <4 empty items>, 10, prop: [ 6, 7 ] ]
