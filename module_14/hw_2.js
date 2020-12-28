/*
    Второе задание в модуле "Введение в JavaScript" в разделе "AJAX"
*/

const objJson = {
    name: "Anton",
    age: 36,
    skills: ["Javascript", "HTML", "CSS"],
    salary: 80000
}


// Ф-ция обработчик события click на главной странице HTML
function sfClick() {
    document.body.querySelector("p").innerHTML = JSON.stringify(objJson);
    console.log(`${JSON.stringify(objJson)}`);
}
