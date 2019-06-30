/*
$(".box").css({color : 'green',
			  fontSize : '12px',
			  marginLeft :'20px'});
*/
$(".box").css({'color' : 'green',
			  'font-size' : '12px',
			  'margin-left' :'20px'});

/*
//функция обратного вызова

$("#content").css("height", function function_name(i, value) {
	return parseFloat(value)*1.2;
});
*/


$("#content").addClass("name");


/*
elem.hasClass("xxx") // проверить класс у эл-та
elem.removeClass("xxx") // удалить класс у эл-та
*/

//$("#content").toggle();

//$("#content").toggle();

/*
//рабта с атрибутами
attr(attrName);
attr(attrName,attr value);
removeAttr(attrName);
*/
//работа с атрибутами

var altText = $("img").attr("alt")
$("img").attr("src", "/img/defolt/jpg")

$("a#my").attr({
	"href":"https://www.xxx.ru/user/rrr/eee",
	"title": "Wolf blog"
});