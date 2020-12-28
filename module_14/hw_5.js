/*
    Пятое задание в модуле "Введение в JavaScript" в разделе "AJAX"
*/

// Определяем формат даты
let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};

// Вешаем обработчик событий на полностью загруженную страницу HTML
window.onload = function(){

    // Проверяем наличие в localStorage наличие ключа user, и если он задан, то читаем ее
    let user = localStorage.getItem("user");

    // Если ключ user не задан, то выводим подсказку с просьбой ввести имя пользователя
    if ( user == null ){
        let userName = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя.");
        // Сохраняем в localStorage имя пользователя и дату входя пользователя на сайт.
        localStorage.setItem("user", userName);
        localStorage.setItem("lastEntry",(new Date()).toLocaleString("ru", options));
        return;
    }

    // Если user был найден в localStorage, то выводим привествие с датой последнего его посещения.
    let last_entry = localStorage.getItem("lastEntry");
    alert(`Добрый день, ${user}! Давно не виделись. В последний раз вы были у нас ${last_entry}`);
    localStorage.setItem("lastEntry", (new Date()).toLocaleString("ru", options));
}
