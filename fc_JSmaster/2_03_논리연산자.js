//AND, OR 연산자를 조건문이 아닌 출력문이나, 대입문에 쓸 경우 
console.log(true && '앞조건이 참일 때 나올 값'); 
console.log(false || '기본값'); 

andValue = true && '앞조건이 참이다!';
orValue = false || '앞조건이 거짓이다!';


//OR 연산자는 기본값에 쓰기가 좋다.
function getName(firstName, lastName){
    //const fName = firstName === undefined ? '성 없음' : firstName;
    const fName = firstName || '성 없음';
    //const lName = lastName === undefined ? '이름 없음' : lastName;
    const lName = lastName || '이름 없음';
    
    

    return '저는 ' + fName + ' ' + lName + '입니다.'; 
}

console.log(getName('강', '나리'));

Number();  //0
Number(undefined);  //NaN
Number(null);  //0
Number('');  //0
Number('String');  //NaN


0 && 'dog';
0 && 'hi';
['11111']+'22222';
console.log([11111]+22222);

typeof Array;