/*
    Третье задание в модуле "Введение в JavaScript" в разделе "AJAX"
*/

// Ссылка на файл с отчетом
const vUrl = 'https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440';


// Ф-ция обработчик события click на главной странице HTML
function sfClick() {
    if ( year_set.value === "")
    {
        alert("Выберите год, за который необходимо получить отчет");
    }

    // Получаем отчет за указанный год
    const jsonReport = getReport(year_set.value);

    // Создаем таблицу на HTML странице и включаем в него данные из выбранного отчета
    //addTable(jsonReport);

    const vSelect = document.body.querySelector("select");
    document.body.querySelector("p").innerHTML = vSelect.value;
    console.log(`${vSelect.value}`);
}

function getReport(year) {

    // Создаем запрос к удаленному серверу
    let xhr = new XMLHttpRequest();
    xhr.open('GET', vUrl, true);

    // Создаем обработчики событий для подготовленного запроса
    xhr.onload = function () {
        if (xhr.status != 200) {
            const errorMessage = `Запрос не был обработан корректно. Статус ответа: ${xhr.status}`;
            console.log(errorMessage);
            document.body.querySelector("p").innerHTML = errorMessage;
            console.log(`${xhr.response}`);
        }

        let jsonReport = JSON.parse(xhr.response);
        for (jsonYear in jsonReport) {
            console.log(`${jsonReport[jsonYear].year}`);
        }
    };

    xhr.onerror = function () {
        console.log(`Ошибка! Статус ответа: ${xhr.status}`);
    };

    xhr.send();
}

function addTable(objJSON){

}