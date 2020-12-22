/*
    Третье задание в модуле "Введение в JavaScript" в разделе "Объекты"
*/

// Определяем ф-цию, которая создает пустой объект без прототипа
function createEmptyObject()
{
    // Пустой объект может быть создан двумя способами:
    // new Object();
    // {}
    return {};
}

// Используем полученную ф-цию

console.log(createEmptyObject());