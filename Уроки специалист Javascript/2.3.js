alert("JS подкючен")
var f;
var txt;
function foo(){
	var i = document.images[0];
	console.log(i.toString());
};

function searchF(){
	f = document.forms.search;
	txt = document.forms.search.elements.q;
	console.log(f);
	console.log(txt);
}

function resetF(){
	f.reset();
	f.elements.q.focus();
}
