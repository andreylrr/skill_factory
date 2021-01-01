/*
    Третье задание в модуле "Введение в JavaScript" в разделе "AJAX"
*/

// Ссылка на файл с отчетом
const vUrl = 'https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440';

// При обновлении окна прячем заготовку для таблицы
window.onload = function () {
    document.getElementById("div_table").hidden = true;
}

// Ф-ция обработчик события click на главной странице HTML
function sfClick() {
    // Проверяем был ли задан год
    if ( year_set.value === "")
    {
        alert("Выберите год, за который необходимо получить отчет");
    }

    // Получаем отчет за указанный год
    const jsonReport = getReport(year_set.value);
}

function getReport(year) {

    // Создаем запрос к удаленному серверу
    let xhr = new XMLHttpRequest();
    xhr.open('GET', vUrl, true);

    // Создаем обработчики событий для подготовленного запроса
    xhr.onload = function () {

        document.getElementById("div_table").hidden = false;

        if (xhr.status != 200) {
            const errorMessage = `Запрос не был обработан корректно. Статус ответа: ${xhr.status}`;
            console.log(errorMessage);
            document.body.querySelector("p").innerHTML = errorMessage;
        }

        let jsonReport = JSON.parse(xhr.response);
        for(jsonYear in jsonReport)
        {
            if( jsonReport[jsonYear].year == year ){
                return addTable(jsonReport[jsonYear].sales);
            }
        }
    };

    xhr.onerror = function () {
        console.log(`Ошибка! Статус ответа: ${xhr.status}`);
    };

    xhr.send();
}

// Обновляем таблицу за указанный год
function addTable(objJSON){
    document.getElementById("td_1").textContent = objJSON['q1'];
    document.getElementById("td_2").textContent = objJSON['q2'];
    document.getElementById("td_3").textContent = objJSON['q3'];
    document.getElementById("td_4").textContent = objJSON['q4'];
}