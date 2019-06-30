/*var re = /  /;
var s = " ";

s.search(re);
re.test(s);*/

var str = "vasya@mail.ru"
var ser = str.search(/@gmail|@yandex/);
str.match(/([a-z]+)@([a-z]+)\.([a-z]{2,})/i);
// Вернется массив======>
/*
(4) ["vasya@mail.ru", "vasya", "mail", "ru", index: 0, input: "vasya@mail.ru", groups: undefined]
0: "vasya@mail.ru"
1: "vasya"
2: "mail"
3: "ru"

если ошибка или строка не проходит возращается null
*/



var reg = /^[0-3]?\d-[0-3]?\d-[1-2]{1}\d{3}$/; // лаба

var re = /['"][^'"]*['"]/; // парсинг строки "......."
// '...." ошибка чтобы такое не прошло используется оператор групировки
var re0 = /(['"])[^'"]*\1/; // \1 это ссылка на () и '..." теперь не пройдет


//"12BdF" BdF-12
var re1 = "12BdF"
re1.replace(/^(\d+)([a-z]+)$/i,"$2-$1"); // BdF-12

var s = "Smith, John\nDow, Mike\nLee, Steve"
s.replace(/([a-z]+), ([a-z]+)/ig, "$1 $2");