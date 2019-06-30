/*var i = -5;
while(i<17) {       // пока в скобочках true выполняй цикл
    console.log(i); 
	i ++;
}
*/

var a = prompt("Введите число: ", '');
var i = prompt("Введите экспоненту: ",'');
var cht = 1;
var result = 1;
while (cht<=i){
		result *= a;
		cht++;
		console.log(result);	
}


var zvezda = "+";
var количество = prompt("Введите количество звездочек в основании: ", '');
var i2 = 1;
var piramida = "";
while (i2<=количество){
	piramida += zvezda;
	console.log(piramida);
	i2++;
	
}
var число = prompt("Введите число: ", '');
var эксп = prompt("Введите экспоненту: ",'');
var resultat = 1;
for (var i=1; i<=эксп; i++ ){
	resultat *= число;
	console.log(resultat);
}

do {
	var a = prompt("Напиши - лох: ", '');
	console.log("Я - "+a+" !!!");
}while(a!="лох");