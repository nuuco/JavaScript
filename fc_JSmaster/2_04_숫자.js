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
isNaN('안녕');
//-> 신기한 건, 오류는 아니라는 거!

//Infinity
//너무 크거나 작다. 지수 1023까지만 허용
Math.pow(2, 1024)   //Infinity
7 / 0;  //Infinity
isFinite(NaN);    //false
isFinite(7 / 0);    //false
Number.isFinite(7 / 0); //false
//-> 이것도 오류는 아니다!