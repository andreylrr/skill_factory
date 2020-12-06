/*
    Второе задание в модуле "Введение в JavaScript" в разделе "Функции"
*/

// Определяем функцию для определения простого числа методом перебора делителей
function isPrimeNumber( value )
{
   // Анализируем число на исключительные ситуации
   if ( value > 1000 || value == 0)
   {
       console.log(`Введенные данные ${value} не верны.`);
       return undefined;
   }

   // Единица не является простым числом
   if ( value == 1 ) return false;

   // Находим ближайшуее меньшее к корню анализируемого числа
   let v_sqrt = Math.floor(Math.sqrt(value));

   // Пытаемся определить остаток от деления между анализируемым числом и
   // числом между 2 и ближайшем к корню анализируемого числа.
   // Если находим такое число, то функция вернет True.
   // Если такое число не будет найдено, то функция вернет False
   for ( let i=2; i <= v_sqrt; i++)
   {
      if ( value % i == 0 )
      {
         return false;
      }
   }

   return true;
}

console.log(`Число 203 является простым ${isPrimeNumber(203)}.`)
console.log(`Число 300 является простым ${isPrimeNumber(300)}.`)
console.log(`Число 211 является простым ${isPrimeNumber(211)}.`)
console.log(`Число 2 является простым ${isPrimeNumber(2)}.`)
console.log(`Число 25 является простым ${isPrimeNumber(25)}.`)
console.log(`Число 6 является простым ${isPrimeNumber(6)}.`)
console.log(`Число 11 является простым ${isPrimeNumber(11)}.`)
console.log(`Число 0 является простым ${isPrimeNumber(0)}.`)
console.log(`Число 1001 является простым ${isPrimeNumber(1001)}.`)
