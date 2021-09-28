//Hoisting

//using var
console.log(name); //결과 : undefined
var name = "jane";
console.log(name); //결과 : jane

//using let/const
console.log(name2);
let name2 = "jane";
//ReferenceError: Cannot access 'name2' before initialization