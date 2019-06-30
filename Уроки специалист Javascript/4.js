function sayHello(name, sign){
	name = name || "Guest";
	sign = sign || res || "...";
	print("Hello, "+name+sign);
}

sayHello("John", "!");
var n = "Mike"
var d = "?"
var res = "?!"
sayHello(n, d);
sayHello();


function sum(n1, n2){
	return n1+n2;
	// return вызвразает значение и выходит из функции
}

var rez = sum(5, 3);
print(rez);

print(sum(2, 4));


function abs(num){ // return (num<0)? -num : num;
	if (num<0){
		return -num;
	}
	else{
		return num;
	}
}

print(abs(5))
print(abs(-5))

function power(a1, a2,){
	var otv = 1;
	for (var i=0; i<a2; i++){
		otv = otv * a1;
	}
	return otv;
}
 print(power(2, 10));
 print(power(3, 5));
 print(power(5, 3));


var x = "X";
var y = "Y";

function outer(){
	var x = "x";
	print("x: "+x); // x
	print("y: "+y); // Y
	y="y";
	function inner(z){
		var y = "_"; // x
		print("x: "+x); // _
		print("y: "+y); // z
	}
	inner("z");
};
outer();
print("x: "+x); //X
print("y: "+y); //y

var yy = 0;
function foo(p){
	if (p) {
		yy=1;
		print(yy); //1
	}
	else{
		yy=2;
		print(yy); //2
	}
}
foo(true);