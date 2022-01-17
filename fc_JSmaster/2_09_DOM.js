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
}