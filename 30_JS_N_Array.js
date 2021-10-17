let array = [
	[101, 102, 103],
	[201, 202, 203],
	[301, 302, 303],
];

console.log(array);
//[ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 301, 302, 303 ] ]
console.log(array[0]);
//[ 101, 102, 103 ]
console.log(array[1][0]);  //201
console.log(array[2][2]);  //303

let arr_2 = array.pop();  
console.log(arr_2);  //[ 301, 302, 303 ]
console.log(array.length);  //2
console.log(array);  //[ [ 101, 102, 103 ], [ 201, 202, 203 ] ]

let array_num = array.push([401, 402, 403]);
console.log(array.length);  //3
console.log(array_num); //3  <- 객체의 length  반환
console.log(array);
//[ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ]


//이중 for loop를 사용한 2차원 배열 접근
let array_2 = [
	[101, 102, 103],
	[201, 202, 203],
	[301, 302, 303],
];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(array_2[i][j]);
    }
}
// 101 ... 303

let fruits = [
    ["strawberry", 50],
    ["banana", 100],
    ["ice", 150],
];

for (let i = 0; i < fruits.length; i++) {
    console.log(`fruit: ${fruits[i][0]}, amount: ${fruits[i][1]}`);
}

/*
fruit: strawberry, amount: 50
fruit: banana, amount: 100
fruit: ice, amount: 150
*/


