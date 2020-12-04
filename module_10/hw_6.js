/*
    Шестое задание в модуле "Введение в JavaScript" в разделе "Циклы"
*/

// Задаем массив, предполагаем, что массив состоит из чисел
let v_array_dif = [1,3,5,6,7,8,9,0,77,5,34]
let v_array_equ = [1,1,1,1,1,1,1,1,1,1,1,1]

// Создаем функцию, для сравнения элементов массива
function isAllEqual(element, index, array)
{
    // Если первый элемент массива, то возвращаем True
    if ( index == 0 )return true;
    // Если элемент массива не первый, то сравниваем его с предыдущим элементом,
    // и возвращаем результат сравнения
    return array[index-1] == array[index];
}

// Проверяем массивы на одинаковость элементов в них
console.log(v_array_equ.every(isAllEqual))
console.log(v_array_dif.every(isAllEqual))