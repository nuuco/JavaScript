

/*
	객체 : 여러개의 변수(속성)와 함수(메소드)를 지닌 것
	※ 객체 안에 있는 변수는 '속성', 함수는 '메소드' 로 표현해서 구분한다.
*/

var a = 10; //변수선언(변수: 특정한 값 하나를 저장) : 
var f = function () {}; //함수선언(함수: 여러 개의 실행문을 제공)
var o = {}; //객체선언

//객체선언
var object = {
	a: 20,
	b: 7,
	text: "안녕하세요.",
	sum: function (x, y) {
		return x + y;
	},
	printFunction: function () {
		console.log("객체 안의 함수!");
	}
};

//객체 안에 변수 호출
a = object.a + object.b;
console.log(a); //27
console.log(object.text); //안녕하세요.

//객체 안의 함수 호출
object.printFunction(); //객체 안의 함수!
a = object.sum(100, 26);
console.log(a); //126

//객체 안의 새로운 변수 추가
object.c = 13; //변수 추가 (간단! 없는 키 값에 값을 넣어주면 된다.)
console.log(object.c); //13

//객체 안의 새로운 함수 추가 
object.sub = function (x, y) { //역시나 없는 키 값에 함수를 넣어주면 된다.
	return x - y;
}
console.log(object.sub(10, 4)); //6
