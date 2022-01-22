//https://developer.mozilla.org/ko/docs/Web/API/Event

const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', function(){
    alert('안녕하세요.');
});

//이벤트 객체 -> DOM node 가 이벤트 객체를 가지고 있다.


resetBtn.addEventListener('click', function(event){
    //event = 이벤트 객체. 여러 프로퍼티들이 들어가 있음.
    //event.target -> 클릭된 대상. 이벤트가 발생한 DOM  
    alert('안녕하세요.');
});


//이벤트 핸들러
//HTML 문서에 직적 이벤트를 넣어줄 수도 있지만
//JS로 따로 넣어주는게 훨씬 안전
//<a onclick="alert('안녕')"></a>

//이벤트리스너는 제거도 가능
resetBtn.removeEventListener('click', function(event){
    console.dir(event);
});

//이벤트리스너 뒤에 옵션 넣기 - ?이벤트 전파 여부(boolean)
//(이벤트 타입, 실행 함수, 이벤트 전파 여부)
resetBtn.addEventListener('click', function(event){
    console.dir(event);
}, true);