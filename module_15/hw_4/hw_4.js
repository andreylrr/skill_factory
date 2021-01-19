/*
    Четвертое задание в модуле "Введение в JavaScript" в разделе "API браузера"
*/

// Ф-ция обработки данных о геолокации
function handleLocation(position){
    // Получение текущих координат
    let currentCoordinate = position.coords;
    let messageToUser = `Координаты текущего местоположения: ${currentCoordinate.latitude} longitude: ${currentCoordinate.longitude}`;
    let url=`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${currentCoordinate.latitude}&long=${currentCoordinate.longitude}`

    // Отправляем запрос на сервер для получения списка картинок
    fetch(url)
        .then((response) => { return response.json()})
        .then((data) => {buildTimeZone(data)})
        .catch((error) => { console.log(`error ${error}`)});

    document.getElementById("textOutput").innerText = messageToUser;
}

// Ф-ция обработки события click на кнопке
function tdClick() {

    let messageToUser = "";
    if ( "geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(handleLocation,
            (error) => {
                messageToUser = "Информация о местположении недоступна." ;
                console.log(`Ошибка при получении геолокации ${error.message}`);});
    }
    else
    {
        messageToUser = "Информация о местоположении недоступна.";
        console.log(messageToUser);
    }

    document.getElementById("textOutput").innerText = messageToUser;
}

function buildTimeZone(data){
    document.getElementById("textOutput").innerText = `Текущая временная зона: ${data.timezone} \n Местное дата и время: ${data.date_time_txt}`
}
