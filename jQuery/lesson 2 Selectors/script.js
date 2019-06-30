//$("#content").css("color", "red");
//$(".wrapper").css("color", "red");
//$("#content.box").css("color", "red");
//$(".wrapper.box").css("color", "red");
//$("h1, h2").css("color", "red");
//$("article h2").css("color", "red"); // вложенные эллементы
//$("article").find("h2").css("color", "red");// вложенные эллементы
//$("h1 + p").css("color", "red"); // все элементы перед которыми есть h1
//$("#content").prev().css("color", "red"); // предыдущий элемент
//$("#content").next().css("color", "red"); // следующий элемент
//$("*").css("color", "red"); // ыче элементы
//$("article > h2").css("color", "red");
//$("article > *").css("color", "red");



/*
$(".content a.button");

$("a.button", "content");
$(".content").find("a.button"); // отптимальны вариант
*/

/*
$(".content a.button");
$(".content h3.title");

var $content = $(",content"); // оптимальнее
$content.find("a.button");
$content.find("h3.title");
*/


$(".content div input:disabled");

$(".content div").find("input:disabled") // разделение селекторов

