// 코드 구현
var todos = document.getElementsByClassName("todos")[0];
var inputTodo = document.getElementsByClassName("input-todo")[0]; 

var todo_arr = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false },
];


var list_str="<li>로딩중...</li>";
todos.innerHTML = list_str;

window.setTimeout(init, 1000);


//초기 랜더링
function init() {
    list_str="";
    Output();
}

//TODO list 랜더링
function Output() {
    list_str = "";
    for (let i = 0; i < todo_arr.length; i++) {
        let item = todo_arr[i]
        //id 다시 주기
        item.id = i+1;

        //체크박스 체크 여부
        const CHECKED = item.completed ? "checked" : "";
        
        list_str += `<li> <label> <input id="item_${i}" type='checkbox' ${CHECKED} onclick="listFinish('item_${i}', ${i});">${item.content} </label> <span onclick="listDelete(${i});">X</span> </li>`
    }
    
    todos.innerHTML = list_str;
}


//TODO list 추가
function input() {
    let inputItem = { id: todo_arr.length+1, content: inputTodo.value, completed: false };
    todo_arr.push(inputItem);
    inputTodo.value = "";
    Output();
}

//TODO list 삭제
function listDelete(listID) {
    todo_arr.splice(listID-1,1);
    Output();
}

//TODO list 완료
function listFinish(id_str, idx) {
    let item = document.getElementById(id_str);

    if(item.checked){
        todo_arr[idx].completed = true;
    }else {
        todo_arr[idx].completed = false;
    }

    console.log(todo_arr[idx]);
    //체크 여부 확인용
}



