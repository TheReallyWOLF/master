/*for (var i = 0; i < 10; i++) {
	if(i%2 == 0 && i != 0){
		console.log(i + " - чётное");
	}
	else if(i==0){
		console.log(i + " - ноль");
	}
	else{
		console.log(i + " - нечётное");
	}
}

for (var i = 0; i < 10; i++) {
	if(0 == i) {
		console.log(i + " - ноль");
	}
	else if(i%2 == 0){
		console.log(i + " - четное");
	}
	else{
		console.log(i + " - нечётное");
	}
}

var x = 1, y; //????? неясно как работает
if(1==x){
	y="One";
}
else{
	y = "Zero";
}

*/


for (var i=322; i<367; i++){
	if (i%3!=0)
		continue;
	console.log(i)
}

for (var i = 0; i < 10; i++) {
	if(0 == i) {
		continue;
	}
	else if(i%2 == 0){
		console.log(i + " - четное");
	}
	else{
		console.log(i + " - нечётное");
	}
}



var num = prompt("Введите число: ", '');
var str = "На ветке сидит "+ num +" ворон";
var ok = "";
var proverka = num%10
if (num>=11 && num<=14 ) {
	ok="" 
}

else if (proverka==1){
	ok="а"
}
else if (proverka>=2 && proverka<=4){
	ok = "ы";
}
	else{ 
	ok = "";
}
console.log(str+ ok)