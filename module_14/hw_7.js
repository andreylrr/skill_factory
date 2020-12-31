/*
    Седьмое задание в модуле "Введение в JavaScript" в разделе "AJAX"
*/

// Ссылка на сайт с данными
let vUrl = `https://jsonplaceholder.typicode.com/users/$$/todos`

// Ф-ция для обработки списка задач полученных от сервера
function buildList(data) {
    // Если ни одной записи не было найдено, то выводим сообщение о неправильном id
    if ( data.length == 0 ){
        let node = document.createElement("P");
        node.innerHTML = "Пользователь с указанным id не найден.";
        document.getElementById("todo_list").appendChild(node);
        console.log(`Пользователь с указанным id не найден.`);
    }

    // Если было найдено несколько записей в списке задач,
    // то формируем список в <div> todo_list
    for (task in data) {
        let node = document.createElement("LI");
        let title = data[task].title;
        let completed = data[task].completed;
        addListElement(node, title, completed);
        document.getElementById("todo_list").appendChild(node);
    }
}

// Ф-ция добавления пункта из списка задач в DOM
function addListElement(node, title, completed){
        let textNode = document.createTextNode(title);
        if ( completed == true ) node.style.textDecoration = "line-through";
        node.appendChild(textNode);
}

// Ф-ция обработки события click на кнопке запроса
function tdClick(){
    cleanAllChildElements();
    let vUserId = window.document.getElementById("req_userid").value;
    vUrlUser = vUrl.replace("$$", vUserId);
    console.log(`URL ${vUrlUser}`);

    // Отправляем запрос на сервер для получения списка задач
    fetch(vUrlUser)
        .then((response) => { return response.json()})
        .then((data) => {buildList(data)})
        .catch((error) => { console.log(`error ${error}`)});
}

// Ф-ция очистки <div> todo_list
function cleanAllChildElements(){
    const myNode = document.getElementById("todo_list");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    };
}