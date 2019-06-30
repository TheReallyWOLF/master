/*
$(".anim").click(function () {
	$(this).hide(400);
});
*/
/*
$(".anim").hide(400, function () { // запустить функцию после завершения hide
	alert("Bye!!!");
});
*/
/*
$("#stick").click(function(){
	$(".displayNone").slideDown(400)
});
*/


/*function changeClass(){
	$(this).prev().toggleClass("active");
};*/

$(function(){ // работа с блоком текста
	$("article h2").click(function(){
		$(this).next().slideToggle();  // переключает анимацию slideUp. slideDown
		$(this).toggleClass("active"); // переключает класс
	});
});


$(".anim").click(function(){
	$(this).fadeOut(3000);
	$(this).fadeIn(1000);
	// .fadeToggle(время)
});

$(".anim_x").click(function(){
	if($(".anim_x").css("opacity")==0.2){
		$(this).fadeTo(3000, 1); // изменяет прозрачночть до значения
	}else $(this).fadeTo(3000, 0.2);
	
});

$(".anim_animate").animate({ // одновременная анимация
	"opacity": "-=.5",
	"height":"+=50px",
	"width": "+=250px"
},6000);

$(".anim_posl").animate({"opacity": "-=.5"}) // последовательная анимация
			   .animate({"height":"+=50px"},3000)
			   .animate({"width": "+=250px"});
	
	
/*jQuery.fx.off = true; // вырубает анимацию*/