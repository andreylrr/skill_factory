/*
    Седьмое задание в модуле "Введение в JavaScript" в разделе "Циклы"
*/

// Задаем массив и начальные значения счетчиков
let v_array = [2,3,6,78,4,8,"56",9,23,34,45,NaN,65,66,75,76];
let v_qual_even = 0;
let v_qual_not_even = 0;

// Первый вариант выполнения задания с использованием оператора for
for( let i = 0; i < v_array.length; i++)
{
    if (typeof( v_array[i]) == "number")
    {
        if ( ! isNaN(v_array[i]))
        {
            if ( v_array[i] % 2 == 0 )
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

// Вывод результатов на консоль
console.log("Количество четных чисел в массиве - " + v_qual_even)
console.log("Количество не четных чисел в массиве - " + v_qual_not_even)

// Второй вариант выполнения задания с использованием оператора ForEach
v_qual_not_even = 0;
v_qual_even = 0;

function calculateEven(currentValue)
{
    if ( typeof(currentValue) == "number")
    {
        if ( ! isNaN(currentValue))
        {
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

v_array.forEach(calculateEven)
// Вывод результатов на консоль
console.log("Количество четных чисел в массиве - " + v_qual_even)
console.log("Количество не четных чисел в массиве - " + v_qual_not_even)

