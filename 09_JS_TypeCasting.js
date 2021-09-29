//명시적 형 변환

//String()

console.log(String(123));  //123
console.log(1 / 0); //infinity
console.log(String(1 / 0));  //infinity
console.log(String(-1 / 0));  //-infinity
console.log(String(NaN) + String(undefined)); //NaNundefined
console.log(String(null));  //null

//Number()

console.log(Number(""));  //0
console.log(Number("123")); //123
console.log(Number("hello"));  //NaN
console.log(Number("123hello")); //NaN
//**true, false, null 은 숫자로 변환 가능
console.log(Number(true));  //1
console.log(Number(false));  //0
console.log(Number(null));  //0
console.log(Number(undefined));  //NaN

//parseInt(), parseFloat()
console.log(parseInt("123.123"));  //123
console.log(parseFloat("123.123"));  //123.123


//Boolean()
//false
console.log(Boolean(""));  //false
console.log(Boolean(0));  //false
console.log(Boolean(NaN));  //false
console.log(Boolean(null));  //false
console.log(Boolean(undefined));  //false

//true
console.log(Boolean("123"));  //true
console.log(Boolean("hello"));  //true
console.log(Boolean("0"));  //true
//-> 빈 문자열이 아닌 문자열은 true
console.log(Boolean(123));  //true
console.log(Boolean(123.123));  //true
console.log(Boolean(-1));  //true




