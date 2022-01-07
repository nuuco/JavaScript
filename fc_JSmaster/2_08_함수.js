//함수의 종류
//1. 함수 선언문
function func() {

}

const obj = {
    //2. 메서드 : 객체의 프로퍼티로 들어간 함수
    prop: function() {

    }
}

//3. 생성자 함수 : 특정 인스턴스를 만들어 낼 수 있다.
//파스칼 케이스(= 카멜케이스: 첫글자, 중간글자 대문자)로 쓰는 암묵적 규칙 있음
function MyObj() {

}
new MyObj();

//4. 화살표 함수 ES2015+, ES6
const arrowFunc = () => {}


//함수는 일반적으로 반환문 생략가능
//생략해도 내부적으로는 undefined 가 리턴되고 있다.

//파라미터(매개 변수) - 함수 만들 때 받는 변수
//아규먼트(인자) - 함수 호출시 넘기는 변수

//<함수 선언문의 문제>
//1. 중복선언 - 함수를 중복으로 만들 수 있다. 아래 쓴게 오버라이딩
//2. 호이스팅

//그래서 함수 표현식이 더 안정적
//함수 표현식 - 함수를 변수에 할당한 방식
//기명 함수 표현식
const funcEx = function func() {

}
//익명 함수 표현식
const funcEx2 = function() {

}

//<화살표 함수>
//function 키워드 없음
//(파라미터) => {함수내용}
function name(){return '문자열'};
//=
const arrowFunc2 = () => '문자열';

//화살표 함수는 생긴것만 다른게 아니다!
//기존 함수가 가진 것들이 배제되어 있음
// 1. argument
// 2. this
// 두 부분이 다르다.

//<매개변수와 인자 다루기>
//parameter 매개변수는 함수 내의 지역변수
//매개변수 숫자는 꼭 지킬 것, 안 넘기면 undefined
//-> 이 경우, 객체로 넘기는게 유리!







