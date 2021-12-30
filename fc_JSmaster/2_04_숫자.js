Number(undefined);  //NaN
Number(null);  //0
Number('');  //0
Number('String');  //NaN
Number(true);  //1
Number(false);  //0
Number(3.141592);  //3.141592

//NaN
Number(undefined);  //NaN
parseInt('숫자로 변환 불가능한 문자열');  //NaN
Math.log(-1);   //NaN
10 + NaN;   //NaN
'가나다라' / 10;    //NaN
0*Infinity;
7**NaN;
"가" / 3;

NaN == NaN;     // false
NaN === NaN;     // false
//이때문에 NaN 은 isNaN() 으로 판별해야함.

//isNaN() vs Number.isNaN()
//느슨하게 검사
// 강제로 매개변수를 숫자로 변환해서 검사
isNaN("NaN");    //true
isNaN(undefined);    //true
isNaN({});    //true
isNaN('문자열');    //true

//비교적 최신, ES2015+ (엄격하게 검사) -> 이거 쓰자!
//Number 이면서, NaN 이면 true
//강제로 매개변수를 숫자로 변환하지 않음
Number.isNaN("NaN");  //false
Number.isNaN(undefined);    //false
Number.isNaN({});    //false
Number.isNaN('문자열');    //false



isNaN('안녕');  //true
//-> 신기한 건, 오류는 아니라는 거!

//Infinity
//너무 크거나 작다. 지수 1023까지만 허용
Math.pow(2, 1024)   //Infinity
7 / 0;  //Infinity
isFinite(NaN);    //false
isFinite(7 / 0);    //false
Number.isFinite(7 / 0); //false
//-> 이것도 오류는 아니다!


//BigInt
//안정적인 범위의 정수
console.log(12345465456481325454138941);    //1.2345465456481326e+25
console.log(12345465456481325454138941n);    //12345465456481325454138941n
console.log(BigInt(12345465456481325454138941));    //12345465456481325713195008n

typeof 1n;   //bigint
typeof BigInt(12354566);    //bigint

//BigInt는 Number와 완전히 동일하지 않다.
0n === 0;   //false
0n == 0;    //true

//정수
Number.MAX_SAFE_INTEGER;    //안전한 정수의 최대값
Number.MIN_SAFE_INTEGER;    //안전한 정수의 최소값

//소수점을 다루는 방법
Math.floor(4.7); //4  소수점 내림
Math.cell(4.7);  //5  소수점 올림
Math.round(4.7); //5  소수점 반올림

//정수로 변환
parseInt('123.3', 10); //123
parseInt(123.3, 10); //123
Number('123.3');  //123.3
Number(123.3);  //123.3
Number.isInteger(); //들어온 값이 정수인지 판단
Number.isSafeInteger(); //들어온 값이 안전한 정수인지 판단
parseInt('안녕');   //NaN


//parseInt 변환 시 주의할 점.
//두번째 인자(몇진수로 변환할 지)를 꼭 같이 넘기자.
parseInt('12', 10); //10진수로 변환하겠다.


//산술 연산자



