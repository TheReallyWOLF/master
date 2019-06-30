var a = [10, "John", true];
a[5]=5;

var user = ["a","b","c"];
for (var i = 0; i < user.length; i++) {   // пробегает по всем элементам которые есть
user[5]="x";
    print(i + ": " + user[i]);
}

var user1 = ["a","b","c"];
user1[5]="x";
user1[7]=NaN;
user1[8]=undefined;
for (var i in user1) {         // пробегает только по элементам которые определены (=)
    print(i + ": " + user1[i]);
}

var apl = [1,5];
var bpl = [11,8];

var arr = apl.concat(bpl, 5,6); // [1,5,11,8,5,6]
var vir = ["a", 12, 14, 154,155, 514, 142];

var spl = [1,5]+[11,8]; // "1,511,8"

var arr1 = arr.slice(2); // [11,8,5,6]

var arr2 = arr.slice(-1); // [6]
var arr3 = arr.slice(-2); // [5,6]
var arr4 = arr.slice(-2,-1); // [5]
var arr5 = arr.slice(-3,-1); // [8,5]
var arr6 = arr.slice(0,10); // [1,5,11,8,5,6]
var arr7 = arr.reverse(); // [6,5,8,11,5,1]

function mySortirovka(a, b){return a-b;}
	arr.sort(mySortirovka); //[1, 5, 5, 6, 8, 11]

function mySortirovka1(a, b){return b-a;}
	arr.sort(mySortirovka1); //[11, 8, 6, 5, 5, 1]

var abc = ["r","f","g","u","y","s","w","t","a","c","b"];
abc.sort() // ["a", "b", "c", "f", "g", "r", "s", "t", "u", "w", "y"]




function foo(){
	var a = [];

	for(var i=0; i<3; i++)
		a.push(function(){print(i)});
	return a;
}

var xx = foo();
xx[0](); //3
xx[1](); //3
xx[2](); //3

// использование самовызывающей функции
// (function(){})()
	


function foo1(){
	var qw = [];
	for(var i=0; i<3; i++)
		(function(j){
		qw.push(function(){print(j)});
})(i);
	return qw;
}

var xxx = foo1();
xxx[0](); //0
xxx[1](); //1
xxx[2](); //2