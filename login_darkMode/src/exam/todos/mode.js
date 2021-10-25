// 코드 구현
var myStorage = window.localStorage;

var mode = document.getElementsByClassName("dark-mode")[0];
var modeText = document.getElementsByClassName("mode-text")[0];
myStorage.getItem("mode")

if (myStorage.getItem("mode")=="dark"){
    mode.checked = "true";
    modeCheck();
}

function modeCheck() {
    if(mode.checked) {
        modeText.innerHTML = "다크모드";
        document.documentElement.setAttribute('color-theme', 'dark');
        myStorage.setItem("mode", "dark");
    }else {
        modeText.innerHTML = "라이트모드";
        document.documentElement.setAttribute('color-theme', 'light');
        myStorage.setItem("mode", "light");
    }
}




