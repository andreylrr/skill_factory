/*
    Четвертое задание в модуле "Введение в JavaScript" в разделе "Функции"
*/

// Определяем начальные значения
let v_begin = 5;
let v_end = 15;

// Задаем интервал и ф-цию, которая будет вызываться каждую секунду
const v_inter_func = setInterval(function(){
    console.log(v_begin);
    v_begin++;
    if (v_begin > v_end){clearInterval(v_inter_func)}}, 1000)


