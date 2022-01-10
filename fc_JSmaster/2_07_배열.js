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
console.log(arr.length);    //10

//배열의 length 는 길이가 아니다.
//배열에서 가장 높은 인덱스를 추적

const arr3 = [1, 2, 3];
arr3[9] = undefined;

arr3.length;     //10
arr3.length = 20;    //이렇게 해도 length가 늘어버림...
console.log(arr3.length);    //20
console.log(arr3);   //[ 1, 2, 3, <6 empty items>, undefined, <10 empty items> ]

//배열 길이 다루는 건 조심!
arr3.length = 0;    //배열 초기화 됨
console.log(arr3);   //[]
//실제로 이렇게 length에 0을 넣어서 clear 하는 경우가 있다.

//배열 순회
const arr4 = ['a', 'b', 'c'];

for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}   //

let j = 0;
while(j < arr4.length) {
    console.log(arr4[j]);
    j = j + 1;
}   //

//객체 순회 - 배열도 객체니까 가능하지만, 배열 순회에는 좋지 않음.
//for ... in
for (let key in arr4){
    console.log("for of", key);
    console.log("for of", arr4[key]);
}

//for ... of
for (let x of arr4){
    console.log("for of", x);
}

let fruits = ["apple", "orange", "melon"]; 
//1. use for (index)
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//apple, orange, melon

//2. use for ... (element) of
for (let fruit of fruits) {
    console.log(fruit);
}
//apple, orange, melon

//3. use for ...(key) in
for (let key in fruits){
    console.log(key);
    console.log(fruits[key]);
}
//0, apple, 1, orange, 2, melon

//배열 다루기
const squidMembers = ['기훈', '상우', '일남', '준호', '새벽', '알리'];

//push() - 배열 끝에 요소 추가
//unshift() - 배열 앞에 요소 추가
squidMembers.push('덕수');
squidMembers.unshift('미녀');
squidMembers; //['미녀', '기훈', '상우', '일남', '준호', '새벽', '알리', '덕수'];

//pop() - 배열 끝 요소 제거
//shift() - 배열 앞 요소 제거
squidMembers.pop(); //덕수 반환
squidMembers.shift();   //미녀 반환
squidMembers;   //['기훈', '상우', '일남', '준호', '새벽', '알리'];

//배열에서 특정 인덱스 요소 지우기
let index = squidMembers.indexOf('일남'); 
squidMembers.splice(index, 2);  //['일남', '준호']
//splice(시작 인덱스, 지울 개수); -> 지운 배열 반환
console.log(squidMembers);  //['기훈', '상우', '새벽', '알리'];


//indexOf() - 위치 인덱스 반환, 없으면 -1
//0 번째 인덱스부터 찾음
squidMembers.indexOf('새벽');   //4
//lastIndexOf() - 위치 인덱스 반환, 없으면 -1
//끝 인덱스부터 찾음.

//includes() - 배열 요소 포함 여부 확인 - true, false
squidMembers.includes('미녀');  //false


//유사 배열 객체 (Array Like Object)
//argument, nodelist
//Array.isArray() 메서드를 활용해
//js 사용할 수 있는 진짜 배열인지 확인한다.
Array.isArray([]);      //true
Array.isArray(arguments);      //false
Array.isArray(nodeList);      //false

//유사 배열 객체를 진짜 배열로 바꾸고 싶을 때
//Array.from() 사용하면 된다.
const nl = Array.from(nodeList);
nl.push();     //이제 배열의 메서드들을 쓸 수 있다.



/**
🔹 원본 배열을 그대로 유지하는 메서드
Concat, Slice
🔸 원본 배열을 변경하는 메서드
Push, Pop, Shift, Unshift, Splice
 */