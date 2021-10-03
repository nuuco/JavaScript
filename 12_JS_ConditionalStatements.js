//if else
/*
* 알고리즘에서 논리적 비교를 할 때 사용되는 조건식
* if, else if, else 키워드를 통해 구성되며, 조건식에 맞을 경우 중괄호{} 내에 있는 명령문을 수행
* 단, 실행 문장이 단일 문장일 경우에는 {}생략가능
*/

let apple_price = 9;

if(apple_price >= 10) {
    //10이상인 경우
    console.log("very expensive :(");
} else if(apple_price < 5) {
    //5 미만인 경우
    console.log("very cheep :)");
} else {
    //5이상 9이하
    console.log("nice!");
}
//결과 : nice!

let age = 10;

if(age < 10)
    console.log("young!");
else
    console.log("old!");
//결과 : old!


//3항 연산자
/*
* 3항 연산자를 통해 if-else 를 대체하여 사용 가능
* 변수 = (조건식) ? 참일 때 값 : 거짓일 때 값
*/
//let const var 없이 변수 쓰면 전역 변수 된다?

let age2 = 20;

//조건문: if-else
if(age2 < 19){
    msg = "not adult";
} else {
    msg = "adult";
}

console.log(msg);
//adult

//조건문: 3항 연산자
msg_another = age2 < 19 ? "not adult" : "adult";
console.log(msg_another);
//adult


//switch
/*
* switch는 표현식을 평가하여 그 값이 일치하는 case 문을 실행하는 조건문
* switch, case, break, default 키워드를 통해 구성되며, switch 의 조건에 맞는 case 구분 실행
* 일반적으로 하나의 case 만 수행되도록 case 끝을 break 로 끝맺음.
 */

let day_number = 1;
let day;

switch(day_number){
    case 0:
        day = "Sunday"; break;
    case 1:
        day = "Monday"; break;  
    case 2:
        day = "Tuesday"; break;
    case 3:
        day = "Wednesday"; break;
    case 4:
        day = "Thursday"; break;  
    case 5:
        day = "Friday"; break;
    case 6:
        day = "Saturday"; break;
    default:
        day = "error"; break;
}

console.log(day);
//Monday

//break 없는 경우
switch(day_number){
    case 0:
        day = "Sunday";
    case 1:
        day = "Monday";  
    case 2:
        day = "Tuesday";
    case 3:
        day = "Wednesday";
    case 4:
        day = "Thursday";  
    case 5:
        day = "Friday";
    case 6:
        day = "Saturday";
    default:
        day = "error";
}

console.log(day);
//error <- day 가 계속 덧씌워져서 가장 마지막 코드인 error로 값을 가진다.

//break 없이 이런식으로 응용 가능
let browser = "Chrome";
switch (browser){
    case "Explorer":
        msg = "ActiveX installation required.";
        break;
    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
        msg = "Support browser!";
        break;

    default:
        msg = "Unsupported browsers!";
        break;
}

console.log(msg);
//Support browser!

//연습 문제
//1(월요일) ~ 7(일요일)로 맵핑된다.

const days = 5;
let weekend = "";

switch (days) {
    case 1:
        weekend = "월요일";
        break;
    case 2:
        weekend = "화요일";
        break;
    case 3:
        weekend = "수요일";
        break;
    case 4:
        weekend = "목요일";
        break;
    case 5:
        weekend = "금요일";
        break;
    case 6:
        weekend = "토요일";
        break;
    case 7:
        weekend = "일요일";
        break;
    default:
        weekend = "잘못된 숫자입니다.";
        break;
}
console.log(weekend);
//수요일