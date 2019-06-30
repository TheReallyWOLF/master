/*
var p = $(".first");
var offset = p.offset();
p.html("left: "+ offset.left + ", top: " + offset.top);
*/

// находит расположение элемента в документе


//$(".third").offset({top:10,left:50}); // задает расположение элемента


var p = $(".first");
var position = p.position();
p.html("left: "+ position.left + ", top: " + position.top);


// Position вернет позицию элемента относительно родителя.


function showHeight(element, height) {
	$(".div").text("Height of the " + element + " is " + height );
};

$(".getp").click(function(){
	showHeight("paragraph", $("p").height())
});

$(".getd").click(function(){
	showHeight("Document", $(Document).height())
});

$(".getw").click(function(){
	showHeight("window", $(window).height())
});