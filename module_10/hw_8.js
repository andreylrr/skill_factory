/*
    Восьмое задание в модуле "Введение в JavaScript" в разделе "Ассоциативные массивы"
*/

// Создаем массив Map
let v_map_array = new Map([
    ["Ford","USA"],
    ["Lada Vesta", "Russia"],
    ["BMW", "Germany"],
    ["Renault", "France"],
    ["Kia", "Korea"],
    ["Volvo", "Sweden"],
    ["Toyota", "Japan"]
]);

// Проходим по всему массиву и выводим его содержимое
for ( let car of v_map_array)
{
    console.log( `Ключ - ${car[0]}, значение - ${car[1]}`);
}