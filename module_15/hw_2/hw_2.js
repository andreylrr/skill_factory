/*
    Второе задание в модуле "Введение в JavaScript" в разделе "API браузера"
*/

// Представление первой иконки в SVG формате
let svg_icon1 = '<svg id="icon1" style="display:flow;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-left-circle" viewBox="0 0 16 16">\n' +
    '        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z"/>\n' +
    '    </svg>'

// Представление второй иконки в SVG формате
let svg_icon2 = '    <svg id="icon2" style="display:flow;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16">\n' +
    '        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"/>\n' +
    '    </svg>'

// При загрузке страницы выводим первую иконку
window.onload = function() {
    document.getElementById("iconButton").innerHTML = "Изменить иконку " + svg_icon1;
}

let currentIcon = 1;

// Ф-ция обработки события click на кнопке
function tdClick() {

    switch (currentIcon) {
        case 1:
            // Если текущая иконка первая, то меняем ее на вторую и запоминаем ее номер
            document.getElementById("iconButton").innerHTML = "Изменить иконку " + svg_icon2;
            currentIcon = 2;
            break;
        case 2:
            // Если текущая иконка вторая, то меняем ее на первую и запоминаем ее номер
            document.getElementById("iconButton").innerHTML = "Изменить иконку " + svg_icon1;
            currentIcon = 1;
            break;
        default :
            console.log(`Такой иконки не существует!!! ID ${currentIcon}`);
            break;
    }
}



