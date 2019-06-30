
/*function foo(){print(x)};
foo();
var x = foo;
*/
/*function outer(){
	return function inner(x){print(x);}
}

var x = outer();
x("Hello");*/
/*
function foo(base, count, action){
	for(var i = base; i<=count; i++)
		action(i);
}


foo(1, 10, function(x){...}

function say(greet){
	return function(name){
		return greet+" "+name;
	};
}
var en = say("Hello");
print(en("Jonn"));
print(en("Mike"));
var ru = say("Privet");
print(ru("Vasya"));
print(ru("Petya"));*/

/*Ссылка на ячейку памяти*/

function num (число){
	return function(сравнение){
		if (число<сравнение) {
			return число + " меньше " + сравнение;
		}
		else if(число>сравнение) {
			return число + " больше " + сравнение;
		}
		else if(число===сравнение) {
			return число + " равно " + сравнение;
		}
		else return " ошибка! ";
	}
}

var x = num(10);
print(x(11));
print(x(9));
print(x(10));
print(x("www"));
x = num(23);

print(x(11));


print(num(1)(2));// дереференсинг


// Рекурсия
function power (base, exp){
	if (exp == 0) return 1;
	return base*power(base, exp-1);
}

//Пример рукурсии и "разматыванием пружины" 
/*
power(2,3);
function power (2, 3){
	if (3 == 0) return 1;
	return 2*power(2, 3-1);
}

function power (2, 2){
	if (2 == 0) return 1;
	return 2*power(2, 2-1);
}

function power (2, 1){
	if (1 == 0) return 1;
	return 2*power(2, 1-1);
}

function power (2, 0){
	if (0 == 0) return 1;
	return 2*power(2, 3-1);
}*/