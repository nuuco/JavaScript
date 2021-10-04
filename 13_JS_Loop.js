//for

for(let i = 0; i < 3; i++){
    console.log(i);
}
//0 1 2

for(let i = 10; i < 3; i++){
    console.log(i);
}
//실행안됨

let num = 0;
for(; num < 2; ) {
    console.log(num);
    num++;
}
//0 1

//2중 for문
for (let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        console.log(`${i} + ${j} = ${i + j}`);
    }
}

/*
0 + 0 = 0
0 + 1 = 1
0 + 2 = 2
1 + 0 = 1
1 + 1 = 2
1 + 2 = 3
2 + 0 = 2
2 + 1 = 3
2 + 2 = 4
*/


//for ... in
// for (key in object){
//     //code block to be executed
// }
const person = {fname: "Aric", lname: "John", age: 25};

let keys = ""
let text = "";
for(let x in person){
    keys += x + " ";
    text += person[x] + " ";
}
console.log(keys); //fname lname age 
console.log(text);  //Aric John 25 



//for ... of
//Syntax 구문
// for (variable of iterable){
//     //code block to be executed
// }

let language = "JavaScript";
let text2 = "";

for (let x of language) {
    text2 += x;
    console.log(text2);
}
/*
J
Ja
Jav
Java
JavaS
JavaSc
JavaScr
JavaScri
JavaScrip
JavaScript
*/


//반복문 while
let i = 0;
while(i < 3){
    console.log(i);
    i++;
}
//0 1 2

i = 0;
do{
    console.log(i);
    i++;
} while(i < 3);
//0 1 2 

i = 4
do {
    console.log(i);
    i++;
} while(i < 3);
//4


//반복문 제어
//break
let text3 = "";

for(let i = 0; i < 10; i++){
    if(i === 3) break;
    text3 = text3 + i;
}

console.log(text3); //012

//continue
text3 = "";

for(let i = 0; i < 10; i++) {
    if(i === 3) continue;
    text3 = text3 + i;
}

console.log(text3);  //012456789

//Label 예제
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        console.log(i + " * " + j + " = " + i * j);
        break;
    }
}
/*
0 * 0 = 0
1 * 0 = 0
2 * 0 = 0
*/

end: for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        console.log(i + " * " + j + " = " + i * j);
        break end;
        //end라는 반복문을 break 시켜라
    }
}
//0 * 0 = 0


//반복문 연습문제1
const UNTIL_NUM = 10;
let sum = 0;

for(let i = 0; i <= UNTIL_NUM; i++){
    if(i % 2 == 0) sum += i;
}

//0 ~ 10 : 10 8 6 4 2 -> 30
console.log(sum); //30

//반복문 연습문제2
for (let i = 2; i <= 9; i++){
    for(let j = 1; j <= 9; j++){
        console.log(i + " × " + j + " = " + i * j);
    }
}
/*
2 × 1 = 2
~
9 × 9 = 81
*/