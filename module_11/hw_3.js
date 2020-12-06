/*
    Третье задание в модуле "Введение в JavaScript" в разделе "Функции"
*/

// Определяем функцию, которая принимает значение в качестве входного параметра
function sumFunc( outer_value )
{
    // Определяем функцию, которая будет возвращена из внешней ф-ции
    return function (inner_value) { return outer_value + inner_value;}
}

let v_func = sumFunc(3);
console.log(`Сумма значений ${v_func(5)}.`)
