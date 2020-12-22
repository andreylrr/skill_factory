/*
    Первое задание в модуле "Введение в JavaScript" в разделе "Объекты"
*/

// Определяем процедуру для вывода свойств объекта
function getObjectProperty( value_object )
{
    // В цикле проходим по свойствам объекта
    for ( let v_key in value_object)
    {
        // Если это свойство объекта собственное, то выводим в консоль
        // имя свойства и его значение
        if ( value_object.hasOwnProperty(v_key))
        {
            console.log(`Ключ - ${v_key}, Значение - ${value_object[v_key]}`);
        }
    }
}

// Создаем прототип объекта
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
getObjectProperty(v_student)
