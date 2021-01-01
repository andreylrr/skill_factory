/*
    Седьмое задание в модуле "Введение в JavaScript" в разделе "AJAX"
*/

// Ссылка на сайт с данными
let vUrl = `https://picsum.photos/v2/list?page=$$&limit=##`;

window.onload = function() {
    document.getElementById("textLimit").hidden = true;
    document.getElementById("textPageNumber").hidden = true;

    if ( localStorage.getItem("foundList") != null ){
        console.log(`Запускаем перестройку списка.`)
        buildList(JSON.parse(localStorage.getItem("foundList")));
    }
}

// Ф-ция обработки события click на кнопке запроса
function tdClick(){

    // Очищаем страницу от ранее ввыведенных результатов
    cleanAllChildElements();

    // Проверяем ввод на число и на заданный диапазон
    vLimit = checkForNumber(document.getElementById("limit").value);
    vPage = checkForNumber(document.getElementById("pageNumber").value);

    // Есил неправильно задан лимит и номер страницы
    if ( vLimit !== 1 && vPage !== 1 ){
        document.getElementById("textLimit").innerText = `Номер страницы и лимит вне диапазона от 1 до 10.`;
        document.getElementById("textLimit").hidden = false;
        return;
    }

    // Есил неправильно задан лимит
    if ( vPage === 0 || vPage === -1){
        document.getElementById("textPageNumber").innerText = `Номер страницы вне диапазона от 1 до 10`;
        document.getElementById("textPageNumber").hidden = false;
        return;
    }

    // Есил неправильно задан лимит
    if ( vLimit === 0 || vLimit === -1){
        document.getElementById("textLimit").innerText = `Лимит вне диапазона от 1 до 10`;
        document.getElementById("textLimit").hidden = false;
        return;
    }

    // Формируем строку запроса списка картинок
    let vUrlFinal = vUrl.replace("$$",document.getElementById("pageNumber").value);
    vUrlFinal = vUrlFinal.replace("##", document.getElementById("limit").value);
    console.log(`URL ${vUrlFinal}`);

    // Отправляем запрос на сервер для получения списка картинок
    fetch(vUrlFinal)
        .then((response) => { return response.json()})
        .then((data) => {buildList(data)})
        .catch((error) => { console.log(`error ${error}`)});
}

// Ф-ция проверки на число и заданный диапазон
function checkForNumber(value){
    if ( isNaN(value)){
        return -1;
    }
    if ( value < 1 || value > 10 ){
        return 0;
    }
    return 1;
}

// Ф-ция построения и сохранения в localStorage списка картинок
function buildList(data) {
    // Если было найдено несколько записей о картинках,
    // то формируем список в <div> picture_list
    for (picture in data) {
        let vNode = document.createElement("LI");
        let vAuthor = data[picture].author;
        let vUrl = data[picture].url;
        let vWidth = data[picture].width;
        let vHeight = data[picture].height;
        addListElement(vNode, vAuthor, vWidth, vHeight, vUrl);
        document.getElementById("picture_list").appendChild(vNode);
    }
    // Добавляем список картинок в localStorage
    localStorage.setItem("foundList", JSON.stringify( data));
}

// Ф-ция добавления пункта из списка картинок в DOM
function addListElement(node, author, width, height, url){
    // Создаем текст для вывода
    let vText = author + " (width:" + width + " height:" + height + ")  ";
    // Создаем Node Element для Текста
    let textNode = document.createTextNode(vText);
    // Создаем Node Element для ссылки
    let vLink = document.createElement("a");
    vLink.setAttribute('href', `${url}`);
    vLink.text = url;
    // Добавляем строку и ссылку к элементы списска
    node.appendChild(textNode);
    node.appendChild(vLink);
}

// Ф-ция очистки <div> picture_list
function cleanAllChildElements(){
    const myNode = document.getElementById("picture_list");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    };
    document.getElementById("textLimit").hidden = true;
    document.getElementById("textPageNumber").hidden = true;
}