/*
    Шестое задание в модуле "Введение в JavaScript" в разделе "AJAX"
*/

// Ф-ция генерации случайного числа в заданном диапазоне
function getRandomInteger(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
}

// Создаем Promise для обработки случайного числа через три секунды
const hw6Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let random_number = getRandomInteger(1,100);
        if (random_number % 2 == 0) {
            resolve(`Заваершено успешно. Сгенерированное число - ${random_number}`);
        } else {
            reject(`Завершено с ошибкой. Сгенерированное число - ${random_number}`);
        }
    },3000);
});

// Обрабатываем результаты работы Promise в случае удачного завершения
hw6Promise.then((result) =>{
    document.body.querySelector("p").innerHTML = result;
    console.log(result);
})
// Обрабатываем результаты работы Promise в случае не удачного завершения работы
.catch((error) => {
    document.body.querySelector("p").innerHTML = error;
    console.log(error);
})