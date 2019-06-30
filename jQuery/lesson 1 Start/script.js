$(function () {
	$("h1").css("color", "green");
	$("h1").html("New text");

	$("#btn_start").click(function(){
		$("#message")
			.html("Message")
			.css("background-color", "green")
			.parent()
			.css("background-color", "fff4dd")
			.width(150)
			.height(80)

	});

	$("#btn_reset").click(function(){
		location.reload(); // перезагрузка страницы
	});
});
