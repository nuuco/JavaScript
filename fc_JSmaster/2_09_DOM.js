/**문서 객체 모델 (DOM)
 * 문서에 접근하기 위한 일종의 인터페이스
 * html 조작할 때 필요
 * HTML 요소를 DOM 으로 모델링해 JS 에서 조작
 */


//Node, Tree
//Node -> html 요소 하나하나, 수많은 프로퍼티를 가진다.
//Node는 Tree 구조로 되어있다.

//li
//const list = document.querySelector('li');
// = 
const li = {
    ariaAutoComplete: null,
    ariaBusy: null,
    ariaChecked: null,
    ariaColCount: null,
    innerHTML: '<a id="link" href="#"></a>',
    appendChild: function() {
        //...Some Code
    }
    // ...
}

//DOM 선택
const idElement = document.getElementById('idName');
const classElement = document.getElementsByClassName('className');
//클래스 네임으로 가져오면 html 콜렉션으로 가져온다. 그래서 element's' 임.
//이렇게 가져온 것은 배열이 아님. NodeList = 유사 배열 객체
//Array.from() 으로 배열로 바꿀 수 있음. 

//비교적 최신 querySelector, querySelectorAll
//가장 편리! 유용! IE 9이상 사용가능
//CSS 선택자를 조합하여 편하게 가져올 수 있음.
//querySelector -> 유효한 것 하나만 가져옴(첫번째만)
//querySelectorAll -> 해당하는 것 다. NodeList 로 가져옴
const query = document.querySelector('.className li');
const queryAll = document.querySelectorAll('li');


//DOM 조작
const searchButton = document.querySelector('.gN089b');

//클래스 이름 넣고 빼기
searchButton.classList.remove('gN089b');
searchButton.classList.contains('gN089b'); //해당 클래스네임이 있는지

//안에 텍스트 뽑아오기, 대체하기
searchButton.textContent; //내부 텍스트 리턴
searchButton.textContent = 'zero'; //내부 텍스트 대체

//자식 지우기
const el = document.querySelector('.link_partner')
searchButton.removeChild(el);

//엘레먼트 만들기 createElement('div')
const el2 = document.createElement('div');
el2.textContent = "new";
//자식 추가하기
searchButton.appendChild(el2); //끝에 자식 생성
//or
searchButton.innerHTML = '<div>new</div>';





