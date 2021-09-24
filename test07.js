//Promise1

/*
생성자를 통해서 프로미스 객체를 만들 수 있다.
생성자의 인자로 executor 라는 함수를 이용한다.
*/

//new Promise(/* executor*/);
/*
excutor 함수는 resolve 와 reject 를 인자로 가진다.
(resolve, reject) => {...}

resolove 와 reject 는 함수 입니다.
resolve(), reject()
*/

//new Promise(/* executor */(resolve, reject) => {});

/*
생성자를 통해서 프로미스 객체를 만드는 순간 pending (대기) 상태라고 합니다.
*/

//new Promise((resolve, reject) => {});  //pending

/*
executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled (이행) 상태가 된다.
*/

// new Promise((resolve, reject) => {
//     //
//     // ...
//     resolve(); //fulfilled
// })

/*
executor 함수 인자 중 하나인 reject 함수를 실행하면, reject (거부) 상태가 된다.
*/

// new Promise((resolve, reject) => {
//     //
//     // ...
//     reject(); //rejected
// });


// new Promise((resolve, reject) => {
//     /* pending */
//     setTimeout(() => {
//         resolve(); /* fulfilled */
//     }, 1000);
// })

//Promise 객체 사용 법.

/*
p라는 프로미스 객체가 fulfiled 되는 시점에, p.then 안에 설정한 callback 함수가 실행된다.
*/



const p2 = new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve(); /* fulfilled  -> p.then 으로 넘어감.*/
    }, 1000);
});

p2.then(() => {
    console.log('1000ms 후에 fulfilled 됩니다.');
});


//실무에서는 객체를 바로 만들어 사용하기 보다는 
//실제로 사용하는 곳에서 객체를 만들어서 .then 과 엮어주는 방식으로 사용

function p3(){
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            resolve(); /* fulfilled  -> p.then 으로 넘어감.*/
        }, 2000);
    });
}
//p3 함수가 호출될 때, Promise 객체가 만들어지면서 리턴됨.

/*
then 을 설정하는 시점을 명확히하고,
함수의 실행과 동시에 프로미스 객체를 만들면서 pending 이 시작하도록 하기 위해
프로미스 객체를 생성하면서 리턴하는 함수 (p3) 를 만들어 함수 (p3) 실행과 동시에 then을 설정합니다.
*/
p3().then(() => {
    //정상적으로 fulfilled 상태로 넘어갔을 때, 실행할 코드 작성
    console.log('p3_2000ms 후에 fulfilled 됩나다.')
});


setTimeout(() => {
    console.log('--- p3 작업 종료 ---')
}, 2000);
////
//마찬가지로 프로미스 객체가 rejected 되는 시점에 p4.catch 안에 실행한 callback 함수가 실행됩니다.

function p4(){
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            reject(); /* rejected */
        }, 2000);
    });
}

p4().then(() => {
    //정상적으로 fulfilled 상태로 넘어갔을 때, 실행할 코드 작성
    console.log('p4_2000ms 후에 fulfilled 됩나다.')
}).catch(() => {
    console.log('p4_2000ms 후에 rejectde 됩니다.')
})



setTimeout(() => {
    console.log('--- p4 작업 종료 ---')
}, 2000);

/*
executor 의 resolve 함수를 실행할 때 인자를 넣어 실행하면, then 의 callback 함수의 인자로 받을 수 있다.
    resolve('hello');
    then((message) => {...})
*/

function p5(){
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            resolve('hello'); /* 메세지, 객체 등등 보낼 수 있음. */
        }, 2000);
    });
}

p5().then((message) => {
    //정상적으로 fulfilled 상태로 넘어갔을 때, 실행할 코드 작성
    console.log('p5_2000ms 후에 fulfilled 됩나다.', message)
}).catch(() => {
    console.log('p5_2000ms 후에 rejectde 됩니다.')
})
//p5_2000ms 후에 fulfilled 됩나다. hello


setTimeout(() => {
    console.log('--- p5 작업 종료 ---')
}, 2000);


/*
마찬가지로, executor 의 reject 함수를 실행할 때 인자를 넣어 실행하면, catch 의 callback 함수의 인자로 받을 수 있다.
    reject('error');
    then((reason) => { ... })
*/

function p6(){
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            reject('error'); /* 주로 에러 이유를 보냄 */
        }, 2000);
    });
}

p6().then((message) => {
    //정상적으로 fulfilled 상태로 넘어갔을 때, 실행할 코드 작성
    console.log('p6_2000ms 후에 fulfilled 됩나다.', message)
}).catch((reason) => {
    console.log('p6_2000ms 후에 rejectde 됩니다.', reason)
})
//p6_2000ms 후에 rejectde 됩니다. error


setTimeout(() => {
    console.log('--- p6 작업 종료 ---')
}, 2000);


//하지만 보통 이렇게 메시지를 보내기 보단
//에러 객체를 넘긴다!

function p7(){
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            reject(new Error('bad')); /* 에러 객체 */
        }, 2000);
    });
}

p7().then((message) => {
    //정상적으로 fulfilled 상태로 넘어갔을 때, 실행할 코드 작성
    console.log('p5_2000ms 후에 fulfilled 됩나다.', message)
}).catch((error) => {
    console.log('p5_2000ms 후에 rejectde 됩니다.', error)
})

/*
p5_2000ms 후에 rejectde 됩니다. Error: bad
    at Timeout._onTimeout (d:\00_SelfDev\NKLCB\programming\JavaScript\test07.js:190:20)
    at listOnTimeout (internal/timers.js:557:17)
    at processTimers (internal/timers.js:500:7)
*/

setTimeout(() => {
    console.log('--- p7 작업 종료 ---')
}, 2000);