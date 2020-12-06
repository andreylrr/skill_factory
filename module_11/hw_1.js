/*
    Первое задание в модуле "Введение в JavaScript" в разделе "Функции"
*/

// Задаем массив и начальные значения счетчиков
let v_array = [2,3,6,78,0,4,8,"56",9,23,34,45,NaN,65,null,66,75,76];
let v_qual_even = 0;
let v_qual_not_even = 0;
let v_qual_zero = 0;

// Определяем функцию для расчета четных и нечетных элементов массива
function calculateEven(currentValue)
{
    if ( typeof(currentValue) == "number")
    {
        if ( ! isNaN(currentValue))
        {
            if ( currentValue == 0 )
            {
                v_qual_zero++;
                return;
            }
            if ( currentValue % 2 == 0 )
            {
                v_qual_even++;
            }
            else
            {
                v_qual_not_even++;
            }
        }
    }
}

// Использование функции в цикле forEach
v_array.forEach(calculateEven)
// Вывод результатов на консоль
console.log("Количество четных чисел в массиве - " + v_qual_even)
console.log("Количество не четных чисел в массиве - " + v_qual_not_even)
console.log("Количество нулевых значений - " + v_qual_zero)

// Второй вариант выполнения задания с использованием оператора for
v_qual_not_even = 0;
v_qual_even = 0;
v_qual_zero = 0;

// Использование функции в обычном цикле for
for ( let i=0; i < v_array.length; i++)
{
    calculateEven(v_array[i])
}
// Вывод результатов на консоль
console.log("Количество четных чисел в массиве - " + v_qual_even)
console.log("Количество не четных чисел в массиве - " + v_qual_not_even)
console.log("Количество нулевых значений - " + v_qual_zero)
