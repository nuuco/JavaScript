

//함수선언
function slidy_1(ob) { //매개변수ob : 하나의 값을 가지는 변수일 때
	console.log("slidy_1 함수실행");
	var value = ob + 5; //ob는 값으로써 연산되어야 한다.
	console.log("slidy_1의 value값 : " + value);

}


//함수선언
function slidy_2(ob) { //매개변수ob : 함수타입(변수x) 일 때, ()로 함수 실행.
	console.log("slidy_2 함수실행");
	ob(); //ob()는 함수로써 호출된다.
}


//함수선언
function slidy_3(ob) { //매개변수ob : 객체타입일 때, .으로 속성 접근 가능
	console.log("slidy_3 함수실행");
	var value = ob.width + ob.height;
	console.log("slidy_3의 value값 : " + value);
}


//객체선언
var object = {
	width: 100,
	height: 66
};


//함수호출(객체가 인수)
slidy_3(object);
slidy_3({
	width: 40,
	height: 33
}); //호출할 때 객체타입 매개변수를 넣어주는 것! 


//함수호출(하나의 값이 인수)
slidy_1(10); 

function printText() {
	console.log("printText함수");
}

//함수호출(함수가 인수)
slidy_2(printText);

slidy_2(function () {
	console.log("익명함수를 인수로 넣음!");
});
