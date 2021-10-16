 /* 1. Default */
let date_now = new Date();
let date_now_str = Date();

console.log(date_now); 
//2021-10-16T10:38:02.224Z
console.log(date_now_str);
//Sat Oct 16 2021 19:38:02 GMT+0900 (GMT+09:00)
console.log(typeof date_now); //object
console.log(typeof date_now_str); //string

/* 2. willseconds (1/1000)sec */
let date_ms_1 = new Date(0);
let date_ms_2 = new Date(24 * 3600 * 1000);
console.log(date_ms_1);
//1970-01-01T00:00:00.000Z
console.log(date_ms_2);
//1970-01-02T00:00:00.000Z

/* 3. date string */
let date_str = new Date("2020-01-01");
console.log(date_str);
//2020-01-01T00:00:00.000Z

/* 4. year, month, ..., ms */
//month 값 범위는 1월(0) ~ 12월(11)

let date_params_1 = new Date(2021, 0, 1);
console.log(date_params_1);
//2020-12-31T15:00:00.000Z
//2021-1-1 에서 -9시간을 뺀 시간이 나온다.
//UCT 때문, 우리나라는 기본적으로 UCT+9
//Z가 붙은 건 UCT+0 을 뜻함.

let date_params_2 = new Date(Date.UTC(2021, 0, 1, 6, 12, 18, 24));
console.log(date_params_2);
//2021-01-01T06:12:18.024Z
//Date.UTC() 로 넣어주면 UTC 고정한 값을 매개변수로 변환시켜 반환해줌.

let date_params_3 = new Date(Date.UTC(2021, 0, 1));
console.log(date_params_3);
//2021-01-01T00:00:00.000Z


//날짜 정보 얻기
let date_day = new Date();
console.log(date_day);
//2021-10-16T11:36:06.830Z


/* 1. year, month, day : 0(sun) ~ 6(sat) */
console.log(date_day.getFullYear());  //2021
console.log(date_day.getMonth());  //9
console.log(date_day.getDay());  //6

/* 2. hours */
console.log(date_day.getHours());  //20 <- 현재 한국 시간
console.log(date_day.getUTCHours());  //11 <-UTC+0 시간

/* 3. 현재시간을 ms 로 반환
      getTime : (now - date(0)) milliseconds

      UTC+0 기준으로 얼마만큼 차이가 있는지 분단위로 반환
      UTC+0 - UTC+9
      getTimezoneOffset : (UTC+0)
 */
console.log(date_day.getTime()); //1634384166830
console.log(date_day.getTimezoneOffset()); //-540
//-540 = -(540/60) = -9


//날짜 정보 설정
let date2 = new Date();

console.log(date2);  //2021-10-16T12:11:57.105Z

/* 1. set year */
let ms_year = date2.setFullYear(2020, 3, 15); 
//month는 0 = 1월, 3 = 4월

console.log(date2);  //2020-04-15T12:11:57.105Z
console.log(ms_year); //1586952717105
console.log(new Date(ms_year));  //2020-04-15T12:11:57.105Z

/* 2. set date */
date2.setDate(1); //1일로 설정 된다.
console.log(date2);  //2020-04-01T12:11:57.105Z
date2.setDate(0); // setDate(0) => 이전 달의 마지막 날
console.log(date2);  //2020-03-31T12:11:57.105Z

/* 3. set hours */
date2.setHours(date2.getHours() + 2); 
console.log(date2);  //2020-03-31T14:11:57.105Z


//parse
let ms_parse = Date.parse("2020-03-31T00:00:00.000");

console.log(ms_parse);
//1585580400000 <- ms 가 반환
console.log(new Date(ms_parse));
//2020-03-30T15:00:00.000Z
console.log(new Date(Date.parse("2020-03-31T00:00:00.000Z")));
//2020-03-31T00:00:00.000Z


//benchmark - 성능 측정
function dateSub(old_date, new_date) {
    return new_date - old_date;
}

function getTime(old_date, new_date) {
    return new_date.getTime() - old_date.getTime();
}

function benchmark(callback_func) {
    let date_1 = new Date("2021-01-01");
    let date_2 = new Date();

    let start = Date.now();
    for(let i = 0; i < 100000; i++) {
        callback_func(date_1, date_2);
    }
    return Date.now() - start;
}

console.log("dateSub : " + benchmark(dateSub) + "ms"); //dateSub : 43ms
console.log("getTime : " + benchmark(getTime) + "ms"); //getTime : 8ms


