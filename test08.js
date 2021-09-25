///1
/*
.finally()
fulfilled 되거나 rejected 된 후에 최종적으로 실행할 것이 있다면
.finally() 를 설정하고, 함수를 인자로 넣는다.
*/

function p(){
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            reject(new Error('bad'));
        }, 1000);
    });
}

p()
    .then(message => {
        console.log('1000ms 후에 fufilled 됩니다.', message);
    })
    .catch(error => {
        console.log('1000ms 후에 rejected 됩니다.', error);
    })
    .finally(() => {
        console.log('end');
    });

//결과
/*
1000ms 후에 rejected 됩니다. Error: bad
    at Timeout._onTimeout (d:\00_SelfDev\NKLCB\programming\JavaScript\test08.js:11:20)
    at listOnTimeout (internal/timers.js:557:17)
    at processTimers (internal/timers.js:500:7)
end
*/

///2
/*
보통 비동기 작업을 할 때, callback 함수를 인자로 넣어
로직이 끝나면 callback 함수를 호출한다.
이런 경우 함수가 아래로 진행되지 않고, callback 함수 안으로 진행된다.
*/

function c(callback){
    setTimeout(() => {
        callback();
    }, 1000);
}

c(() => {
    console.log('1000ms 후에 callback 함수가 실행됩니다.');
})

c(() => {
    c(() => {
        c(() => {
            console.log('3000ms 후에 callback 함수가 실행됩니다.');
        })
    })
})

function p2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}

///3
/*
then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면,
비동기 작업을 순차적으로 아래로 표현할 수 있습니다.
then 에 함수를 넣는 여러 방법을 확인해봅시다.
*/

function p3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

p3().then(() => {
    return p3();
})
.then(() => p3())
.then(p3)
.then(() => {
    console.log('4000ms 후에 fulfilled 됩니다.')
});


///4 _ 프로미스 생성하는 또다른 방법
/*
promise.resolve()
Promise.resolve(value);
value 가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행.
    value 가 프로미스 객체 -> resolve 된 then 메서드 실행
    value 가 프로미스 객체가 아님 -> value 를 인자로 보내면서 then 메서드를 실행
*/

Promise.resolve(new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve('foo');
   }, 5000);
})).then((data) => {
    console.log('프로미스 객체인 경우, resolve 된 결과를 받아 then 이 실행됩니다.')
})
//프로미스 객체인 경우, resolve 된 결과를 받아 then 이 실행됩니다.

Promise.resolve('bar').then(data => {
    console.log('then 메서드가 없는 경우, fulfilled 됩니다.', data);
})
//(먼저 실행) then 메서드가 없는 경우, fulfilled 됩니다. bar


///5
/*
Promise.reject 를 사용하면, catch 로 연결된 rejected 상태로 변경됩니다.
*/

Promise.reject(new Error('reason'))
    .then(error => {})
    .catch(error => {
        console.log(error);
    });

//Error: reason


///6_ Promise.all
/*
프로미스 객체 여러개를 생성하며,
배열로 만들어 인자로 넣고, Promise.all 을 실행하면,
배열의 모든 프로미스 객체들이 fulfilled 되었을 때, then 의 함수가 실행됩니다.
then 의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려줍니다.
*/
//비동기 작업 여러 개를 동시에 시작해서, 다 끝낸 후 처리해 줄 것이 있을 때 활용 

//Promise.all([프로미스 객체들]);

function p4(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${ms}ms 후에 실행됨.`)
            resolve(ms);
        }, ms);
    })
}

Promise.all([p4(5000), p4(6000), p4(7000)]).then((message) => {
    console.log('모두 fullfilled 된 다음에 실행됩니다.', message)
})

/* 결과 : 
5000ms 후에 실행됨.
6000ms 후에 실행됨.
7000ms 후에 실행됨.
모두 fullfilled 된 다음에 실행됩니다. [ 5000, 6000, 7000 ]
*/


///7_ Promise.race

/*
프로미스 객체 여러개를 생성하며,
배열로 만들어 인자로 넣고, Promise.race 을 실행하면,
배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled 된 것으로, then 의 함수가 실행됩니다.
then 의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 객체의 resolve 인자값을 돌려줍니다.

즉, Promise.all 과 달리, 여러 비동기 작업 중 하나가 먼저 fullied 되면
그 때, then 실행
*/
function p5(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${ms}ms 후에 실행됨.`)
            resolve(ms);
        }, ms);
    })
}

Promise.race([p5(8000), p5(9000), p5(10000)]).then((message) => {
    console.log('가장 빠른 하나가 fullfilled 된 다음에 실행됩니다.', message)
})
/* 결과 :
8000ms 후에 실행됨.
가장 빠른 하나가 fullfilled 된 다음에 실행됩니다. 8000
9000ms 후에 실행됨.
10000ms 후에 실행됨.
*/
