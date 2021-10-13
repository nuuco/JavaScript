//생성자
function FishBread(flavor, price){
    if(!new.target){
        return new FishBread(flavor, flavor);
    }
    
    this.flavor = flavor;
    this.price = price;
    this.base = "flour"; //기본값 설정
}

let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1);
//FishBread { flavor: 'cream', price: 1200, base: 'flour' }
console.log(bread_2);
//FishBread { flavor: 'redbean', price: 1000, base: 'flour' }
console.log(bread_3);
//FishBread { flavor: 'milk', price: 1500, base: 'flour' }

// //new.target
// function User(name) {
//     console.log(new.target);
//     this.name = name;
// }

// let result_1 = User("john");
// console.log(result_1);
// /*
// undefined
// undefined
// */

// let result_2 = new User("john");
// console.log(result_2);
// /*
// [Function: User]
// User { name: 'john' }
// */

function User(name) {
    if (!new.target) {
        return new User(name);
    }
    this.name = name;
}

let result_1 = User("john");
console.log(result_1);
/*
User { name: 'john' }
*/

let result_2 = new User("john");
console.log(result_2);
/*
User { name: 'john' }
*/

