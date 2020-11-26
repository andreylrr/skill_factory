/*
    Второе задание в модуле "Введение в JavaScript" в разделе "Логический тип и ветвление"
*/

let X = undefined
// let X = 3.14
// let X = "3.14"
// let X = false

if ( typeof X == "number" )
{
    alert("Переменная принадлежит числовому типу.")
}
else if ( typeof X == "string")
{
    alert("Переменная принадлежит строковому типу.")
}
else if ( typeof X == "boolean")
{
    alert("Переменная принадлежит логическому типу.")
}
else
{
    alert("Тип переменной не определен.")
}