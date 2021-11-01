let horizontalUnderLine = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");
let verticalUnderLine = document.getElementById("vertical-underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

//초기 위치 셋팅
horizontalUnderLine.style.left = horizontalMenus[0].offsetLeft + "px";
horizontalUnderLine.style.width = horizontalMenus[0].offsetWidth + "px";
horizontalUnderLine.style.top = 
    horizontalMenus[0].offsetTop + horizontalMenus[0].offsetHeight + "px";
      
verticalUnderLine.style.left = verticalMenus[0].offsetLeft + "px";
verticalUnderLine.style.width = verticalMenus[0].offsetWidth + "px";
verticalUnderLine.style.top = 
    verticalMenus[0].offsetTop + verticalMenus[0].offsetHeight + "px";



//메뉴 클릭 이벤트
horizontalMenus.forEach((menu) => 
    menu.addEventListener("click", (e) => 
        horizontalIndicator(e))
);

//위치값 전달
function horizontalIndicator(e) {
    horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
    horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
    horizontalUnderLine.style.top = 
        e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

//메뉴 클릭 이벤트
verticalMenus.forEach((menu) => 
    menu.addEventListener("click", (e) => 
        verticalIndicator(e))
);

//위치값 전달
function verticalIndicator(e) {
    verticalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
    verticalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
    verticalUnderLine.style.top = 
        e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}


/*
아이템의 기존 너비 = offsetWidth
아이템의 기존 높이 = offsetHeight
왼쪽 꼭지점 기준 y 좌표 (top 값) = offsetTop
왼쪽 꼭지점 기준 x 좌표 (left 값) = offsetLeft

offset~
-> 어떤 아이템의 위치값과 크기값을 들고 올 수 있다!
*/