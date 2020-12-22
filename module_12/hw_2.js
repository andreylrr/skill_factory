/*
    Второе задание в модуле "Введение в JavaScript" в разделе "Объекты"
*/

// Определяем ф-цию для проверки наличия свойства в объекте
function inObject( name, value)
{
    // Проверяем наличие свойства в объекте
    if ( name in value ) return true;

    return false;
}

// Используем созданную ф-цию
v_region = {
    city:"Санкт-Петербург",
    country:"Россия",
    timeZone:"+3GMT"
}

// Создаем объект на основе прототипа и добавляем новые свойства
v_student = Object.create(v_region);
v_student["name"] = "Ivan"
v_student["surname"] = "Ivanov"

// Вызываем процедуру для вывода свойств объекта
console.log(inObject("name", v_student));
console.log(inObject("city", v_student));
console.log(inObject("country", v_student));
console.log(inObject("name", v_region));
