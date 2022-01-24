/**
 - 원본 배열을 그대로 유지하는 메서드 : Concat, Slice
 - 원본 배열을 변경하는 메서드 : Push, Pop, Shift, Unshift, Splice
 */



//배열 - 요소의 추가 제거
//array, element
const arr = ['one', 'two', 'three'];
const copyArr = arr;
/**
 * unshift => 배열의 앞에 요소 추가
 * shift => 배열의 앞에 요소 제거
 * push => 배열의 끝에 요소 추가
 * pop => 배열의 끝에 요소 제거
 * splice => 배열의 인덱스를 기반으로 요소 추가 및 삭제
 */
//추가
arr.push(1);
arr.unshift(0);
//제거
arr.pop();
arr.shift()
console.log(arr);   //
//삽입(중간에) - splice 배열의 내용을 변경, 삽입 교체 제거 가능
//- splice(시작 인덱스, 지울 개수); → 지운 배열 반환
//- 지울 개수 안정해주면 시작 인덱스부터 끝까지
//- 기본값 -1 이라고 생각 = splice(시작 인덱스, -1))
arr.splice(0, 1);       //['one']
console.log(arr);   //['two', 'three'];
//splice 는 삭제된 위치에서 요소 추가까지 할 수 있다.
arr.splice(0, 0, "kiwi");
console.log(arr);   //['kiwi', 'two', 'three'];

//얘네는 원본 배열을 훼손시킨다....
//즉 copyArr 도 바뀌어 있다.
console.log(copyArr);   //['kiwi', 'two', 'three'];



//배열 - 요소 병합
//concat() 배열의 값들을 기존 배열에 합쳐서 새 배열 반환(원본 비훼손)
//concat()의 인자로 배열을 주든, 요소를 주든 그냥 다 병합 된다.
//concat 인자로 들어온게 뒤에 붙는다.


const array = ['JS', 'HTML', 'CSS'];

const newArr = array.concat('JAVA', 'TS');
//['JAVA', 'TS'].ocncat(array); 해도 결과 같음 단, 요소 순서만 바뀜

console.log(array);    //[ 'JS', 'HTML', 'CSS']
console.log(newArr);    //[ 'JS', 'HTML', 'CSS', 'JAVA', 'TS' ]

//배열 구조 분해 ... (concat 처럼 쓸 수 있음)
const newArr2 = [
    ...array,
    'JAVA',
    'TS'
]

console.log(newArr2);   //[ 'JS', 'HTML', 'CSS', 'JAVA', 'TS' ]


//배열 - 고차함수로 조작(내장 메서드)
/**
 * map
 * filter
 * reduce
 */

//map() - 배열을 조작해서 새로운 배열을 만들때 사용.
const langs = ['JS', 'HTML', 'CSS'];

const newLangs = langs.map(function(lang){
    //배열 요소마다 이 함수가 실행
    return lang + '언어';
    //그 결과가 newLangs에 저장
});

console.log(newLangs);  //[ 'JS언어', 'HTML언어', 'CSS언어' ]

//filter() - 특정조거에 맞는 배열을 만들 수 있음.
const count = ['하나', '둘', '셋', 0, 1, 2, 3];

const newCount = count.filter(function(element) {
    ////배열 요소마다 이 함수가 실행
    if(typeof element === 'number') {
        //return element;
        return true;
        //true 만 넣어도 ok
    }
});

console.log(newCount);    //[ 1, 2, 3 ]
//왜 return element; 는 0이 안들어가질까?
//

const newCount2 = count.filter(function(element) {
    ////배열 요소마다 이 함수가 실행
    if(typeof element === 'string') {
        //return element;
        return true;
    }
});

console.log(newCount2);     //[ '하나', '둘', '셋' ]
