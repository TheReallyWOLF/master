/*var x = x*10; // NaN
var y = y*10; // NaN

var a = [];
a.length;*/

/* // НЕ РАБОТАЕТ!!!
var s = "просто пример";
var x1 = (function(){s.sliсe(3,6)})(); // сто
var x2 = s.substring(3,6); // сто

var x3 = s.sliсe(6); // пример
var x4 = s.substring(6); // пример

var x5 = s.sliсe(); // просто пример
var x6 = s.substring(); // просто пример

var x7 = s.sliсe(6,3); // ""
var x8 = s.substring(6,3); // сто

var x9 = s.sliсe(-6,-3); // при

*/
//"Мы знаем, что монохромный цвет - это градации серого"


var str = "Мы знаем, что монохромный цвет - это градации серого";
var txt = "хром";
var word=
	(function search(word,txt,str)
	{  
		var x = str.indexOf(txt);
		if (str.indexOf(txt)>=0) 
		{
		var start = str.lastIndexOf(" ",x)+1;
		var end = str.indexOf(" ",x);
		}
		word = str.substring(start,end);
			if (end == -1) 
			{
			word = str.substring(start);
			}

	return word;
	}
)(word,txt,str);



var clearWord= (function clear(word)
	    {
		var subm = ["/",".","!",";",":","?",",","(",")","'"]
		subm.forEach(function(elements)
			{
			if (word.indexOf(elements)!=-1)
			{
				for (var i = -1;word.indexOf(elements)!=i;i++)
				{
					word=word.replace(elements, "");
					i--;
				}
			}
			word=word.replace(elements, "");
			});
		print(word);
	    })(word)





var aIdx = 97;
var alphabet = "";
for (var i = 0; i < 26; i++) 
{
	alphabet +=String.fromCharCode(aIdx+i);
}
print(alphabet);

var digits = "";
for (var i = 0; i < 10; i++) 
{
	digits += i;
print(digits);
}