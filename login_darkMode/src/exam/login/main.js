
var id = document.getElementById("id");
var pw = document.getElementById("pw");
var pw_msg = document.getElementById("pw_msg");
var btn = document.getElementById("btn");

const pw_regex = /^[a-zA-Z0-9]{8,20}$/

//패스워드 검사 텍스트 출력
function printMsg() {
    if(!pw.value.match(pw_regex)){
        pw_msg.innerText = "비밀번호는 영어, 숫자 포함 8자~20자입니다.";
        btn.disabled = true;
    } else {
        pw_msg.innerText = "";
        btn.disabled = false;
    }
}

function login() {
    alert(`${id.value}님 어서오세요.`);
}



