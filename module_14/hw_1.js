/*
    Первое задание в модуле "Введение в JavaScript" в разделе "AJAX"
*/

// Задаем строку с XML документом
const xmlInput = ` 
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`
// Ф-ция для извлечения информации из DOM node.
// Ф-ция возвращает строку в формате JSON с извлеченной информацией
function getJsonFromXML(student_node){
    const name = student_node.querySelector("name");
    const lang = name.getAttribute("lang");
    const first_name = name.querySelector("first").textContent;
    const last_name = name.querySelector("second").textContent;
    const age = student_node.querySelector("age").textContent;
    const prof = student_node.querySelector("prof").textContent;
    return `{\"name\": "${first_name} ${last_name}", \"age\":${age}, \"prof\":"${prof}", \"lang\": "${lang}"}`;
}

// Ф-ция обработчик события click на главной странице HTML
function sfClick() {
    // Парсим эту строку и создаем DOM объект из входной строки
    let domParser = new DOMParser();
    let domInput = domParser.parseFromString(xmlInput, "text/xml");

    // Извлекаем информацию о всех студентах из DOM объекта и формируем строку JSON
    domInput = domInput.querySelectorAll("student");
    let strJson = "{ \"list\":[";
    for ( let i = 0; i < domInput.length; ++i){
        strJson += getJsonFromXML(domInput[i]);
        if ( i < domInput.length - 1 ){
            strJson += ",";
        }
    }
    strJson += "]}";

    // Преобразуем строку в JSON и выводим ее на главную страницу
    let objJSON = JSON.parse(strJson);
    document.body.querySelector("p").innerHTML = JSON.stringify(objJSON);
    console.log(`${JSON.stringify(objJSON)}`);
}
