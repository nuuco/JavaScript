//1014_test03 : 2번 연속 나오는 문자 중복 없애기

function double_check(s){

    let tmp = '';
    let result = '';

    if(s){
        tmp = s[0];
        if(s.length == 1){
            result = tmp;
            return result;
        }
        for (let i = 1; i < s.length; i++) {
            if(tmp === s[i]){
                tmp = '';
                continue;
            } else if(i !== (s.length-1)){
                result += tmp;
                tmp = s[i];
            } else {
                result += tmp;
                result += s[i];
            }
        } 
    }
    return result;

}

let s = 'addacdacddcse';
//console.log(double_check(s));

let str = double_check(s);
//console.log(double_check(str));

while(str != double_check(str) && double_check(str) != ''){
  str = double_check(str);
}

console.log(str);