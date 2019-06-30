$("a").click(function (event) {
	alert("Событие клик");
	event.preventDefault(); // убрать дефолтное поведение
	event.stopPropagation(); // убрать всплытие

	// return false; заменяет 3 и 4 строчку одной.
});

/*
$("header").click(function (event) {
	alert("Событие клик!!!");
});
*/

$("#quantity").keyup(function(){
	var value = $(this).val();
	$("#msg").text(value);
});