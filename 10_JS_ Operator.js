//산술 연산자

//나눗셉 연산자 : /
console.log(34 / 10);  //3.4
//몫만 구하고 싶을 때 parseInt() 사용
console.log(parseInt(34 / 10));  //3


//나머지 연산자 : %
console.log(28 % 5);  //3

//거듭제곱 연산자 : **
console.log(2 ** 3);  //8



//대입 연산자 : =
let num1 = 123;
let num2 = 456;
let str1 = "hello";
let str2 = " world!";

let num3, str3;
num3 = num1 + num2;
str3 = str1 + str2;

console.log(num3);  //579
console.log(str3);  //hello world!


//복합 대입 연산자

let num = 10;
let result1, result2, result3, result4, result5;
result1 = result2 = result3 = result4 = result5 = 31;

let result6 = 2;

//+=
result1 += num;
console.log(result1);  //41

//-=
result2 -= num;
console.log(result2);  //21

//*=
result3 *= num;
console.log(result3);  //310

///=
result4 /= num;
console.log(result4);  //3.1

//%=
result5 %= num;
console.log(result5);  //1

// **=
result6 **= 3;
console.log(result6);  //8


//증가 감소 연산자 ++, --
let number = 10;

++number;
console.log(number);  //11
--number;
console.log(number);  //10

number++;
console.log(number);  //11
number--;
console.log(number);  //10

//증감 연산자를 사용하면, 그 값이 변수에 대입된다.
//++num, num++ => num += 1
//--num, num-- => num -= 1

//연산자 앞 뒤에 붙은 것의 차이는
//result = ++num 일 때, 이번 행부터 증감연산자 반영한 값 대입
//result = num++ 일 때, 다음 행부터 증감연산자 반영한 값 대입
let result;

num = 10;
result= 0;
result = ++num;
console.log(result);  //11
console.log(num);  //11

num = 10;
result = 10;
result = num++;
console.log(result);  //10
console.log(num);  //11

num = 10;
result= 0;
result = --num;
console.log(result);  //9
console.log(num);  //9

num = 10;
result = 10;
result = num--;
console.log(result);  //10
console.log(num);  //9


//비교논리 연산자

//비교 연산자 예제
console.log("z" > "A");  //true
console.log("ZA" > "AZZZ");  //true <- 이미 첫 문자부터 논리 연산 끝. 판단 되버림.
console.log("Hello" < "Hi");  //true
console.log("Hello" >= "Helloo");  //false
console.log("5" <= 10);  //true
console.log(true == 1);  //true
console.log(false != 123);  //true
console.log(true === 1);  //false (자료형이 다르니까)
console.log(false !== 123);  //true

//논리 연산자 예제
console.log(true || false);  //true
console.log(Boolean(0 || false));  //false  -> Boolean(0) === false;
console.log(Boolean(123 || false));  //true
console.log(Boolean(123 && 0));  //false
console.log(Boolean(false && true));  //false
console.log(Boolean(true && 3));  //true
console.log(Boolean(0 && false));  //false
console.log(!false);  //true
console.log(!123);  //false

