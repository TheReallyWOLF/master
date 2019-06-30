//$(".second").replaceWith("<h2> New text </h2>"); //заменяет выбранный элемент на новый

//$("<h2> New text </h2>").replaceAll(".inner"); // заменяет все элементы на новые

//$(".inner").wrap("<div class='new'> Text </div>"); // оборачиваем каждый найденный элемент новым

//$(".inner").wrapAll("<div class='new'> Text </div>"); // оборачивает элементы в общую обертку

//$(".inner").wrapInner("<div class='new'> Text </div>"); 
// объеденяет контент и оборочивает в новый блок сохраняя старую обетру.

/*МЕТОД CLONE*/

//$(".first").clone().appendTo(".third"); // копирует элемент

/*МЕТОД Detach*/

var p;

$("button").click(function () {
	if (p) {
		p.appendTo("header");
		p = null;
	}else {
		p = $(".hello").detach();
	}
});


// Удаляет элемент из DOM но сохраняет его в JS

//$(".third").empty();
//удаляет текст и дочерние DOM элементы

//$(".third").remove(); // удаляет элемент DOM навсегда
