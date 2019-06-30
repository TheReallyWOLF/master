//var $myDiv = $('<div id="my" class="page"> Hello </div>').appendTo("body");
//var $myDiv2 = $('<div id="my1" class="page"> Hello </div>').appendTo("#content");
// добавляет элемент в конец блока

//var $myDivFast = $('<div> Hi !!! </div>',{'id':'my2', 'class':'page'}).appendTo("body");
// не принимает классы ???
//var $myDivVeryFast = $('<div> !!! Hi !!! </div>')
//					  .attr({"id":"my2","class":"page"}).appendTo("#content");

// самый быстрый способ ----->
var myDiv = document.createElement('div');
	myDiv.innerHTML ="WOlf";
	myDiv.id = "myf";
	myDiv.className = "page";

$(myDiv).insertBefore("p.displayNone");


//$("p").after("<hr>"); // или
//$("<hr>").insertAfter("p");	 // вставить элемент после P

$("<hr>").insertBefore("p"); // вставить элемент перед P

$("p").append("<hr>"); // вставить контент в конец каждого элемента из выборки

//$("p").prepend("<hr>"); вставить контент в начало каждого элемента из выборки

$("<p>1 2 3 4 5</p>").appendTo("#content") // вставить параграф в конец блока #content

$("<p>1 2 3 4 5</p>").prependTo("#content") // вставить выбранный контент в наччало каждого элемента