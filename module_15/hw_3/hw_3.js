/*
    Третье задание в модуле "Введение в JavaScript" в разделе "API браузера"
*/

// Ф-ция обработки данных о геолокации
function handleLocation(position){
    let currentCoordinate = position.coords;
    let messageToUser = `Координаты текущего местоположения: ${currentCoordinate.latitude} longitude: ${currentCoordinate.longitude}`;
    document.getElementById("textOutput").innerText = messageToUser + "\n" + getScreenSize();
}

// Ф-ция получения х-ик экрана и формирования строки для вывода
function getScreenSize(){
    let wsWithScrollWidth = window.screen.width;
    let wsWithScrollHeight = window.screen.height;
    let wsWithoutScrollWidth = document.documentElement.clientWidth;
    let wsWithoutScrollHeight = document.documentElement.clientHeight;

    let scCharacter = `Характеристики экрана с учетом полосы прокрутки: ${wsWithScrollWidth}x${wsWithScrollHeight}` + "\n" +
        `Характеристики экрана без учета полосы прокрутки: ${wsWithoutScrollWidth}x${wsWithoutScrollHeight}`;
    return scCharacter;
}

// Ф-ция обработки события click на кнопке
function tdClick() {

    let messageToUser = "";
    if ( "geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(handleLocation,
            (error) => {
            messageToUser = "Информация о местположении недоступна." + "\n" + getScreenSize();
            console.log(`Ошибка при получении геолокации ${error.message}`);});
    }
    else
    {
        messageToUser = "Информация о местоположении недоступна.";
        console.log(messageToUser);
    }

    document.getElementById("textOutput").innerText = messageToUser + "\n" + getScreenSize();
}
