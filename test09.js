//async function 과 await- _1

//Promise 객체를 리턴하는 함수
function p(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}


//Promise 객체를 이용해서 비동기 로직을 수행할 때
p(1000).then(ms => {
    console.log(`${ms}ms 후에 실행됩니다.`)
})

//Promise 객체를 리턴하는 함수를 await 로 호출하는 방법

/*
const ms = await p(1000);
console.log(`${ms}ms 후에 실행됩니다.`);
*/
//rosolve 되었을 때 (= 정상적으로 끝났을 때) 리턴값으로 인자 받아옴


async function main() {
    const ms = await p(1000);
    console.log(`async - await ${ms}ms 후에 실행됩니다.`)
};

main();
/* 결과 : 
async - await 1000ms 후에 실행됩니다.
*/
//await 를 사용하는 경우, 항상 async 함수 안에서 사용되어야 한다.

//비동기 처리가 밑으로 흐르게 표현할 수 있다는 것이 장점.



//Promise 객체가 rejected 된 경우의 처리를 위해
//try catch 를 이용한다.

function p2(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('reason'));
        }, ms);
    });
}

async function main2() {
    try{
        const ms = await p2(2000);
    } catch(error){
        console.log(error);
    }
};

main2();
/* 결과 : 
Error: reason
*/

//(new Promise가 아니라) async function 에서 return 되는 값은
//Promise.resolve 함수로 감싸서 리턴된다.

function p3(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            //reject(new Error('reason'));
        }, ms);
    });
}

async function asyncP(){
    const ms = await p3(2000);
    return 'Mark ' + ms;
}

(async function main3() {
    try{
        const name = await asyncP();
        console.log(name);
    } catch(error){
        console.log(error);
    }
})();
//Mark 2000



//error의 전파

function p4(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve(ms);
            reject(new Error('p4_error'));
        }, ms);
    });
}

async function asyncP2(){
    const ms = await p4(3000);
    return 'Mark ' + ms;
}

(async function main4() {
    try{
        const name = await asyncP2();
        console.log(name);
    } catch(error){
        console.log(error);
    }
})();

//Error: p4_error

(async function main5() {
    try{
        const name = await asyncP2();
        console.log(name);
    } catch(error){
        console.log(error);
    } finally{
        console.log('end');
    }
})();

/*
Error: p4_error
    at Timeout._onTimeout (d:\00_SelfDev\NKLCB\programming\JavaScript\test09.js:101:20)
    at listOnTimeout (internal/timers.js:557:17)
    at processTimers (internal/timers.js:500:7)
end
*/



function p5(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

//체이닝
//연속된 Promise 처리
p5(3000)
    .then(() => p5(1000))
    .then(() => p5(1000))
    .then(() => {
    console.log('5000ms 후에 실행')
    });


//연속된 async await 처리
(async function main6() {
    await p5(6000);
    await p5(1000);
    await p5(1000);
    console.log('8000ms 후에 실행');
})();

//로직의 이동 인식이 쉽다.


//Promise.all 과 Promise.race 을 async - await 로 처리하기

function p6(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

//Promise.all
(async function main7() {
    const result = await Promise.all([p6(9000), p6(10000), p6(11000)]);
    console.log(`Promise.all을 async-await로 실행하기 ${result}`);
})();

//Promise.race
(async function main8() {
    const result = await Promise.race([p6(12000), p6(13000), p6(14000)]);
    console.log(`Promise.all을 async-await로 실행하기 ${result}`);
})();
