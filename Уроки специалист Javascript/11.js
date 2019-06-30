
var u1 = {name: "John"};
var a1 = [];

function User(name, age){
	this.name=name;
	this.age=age
	this.admin=false;

}

User.prototype.say = function(w) {
	print(this.name, ":", w)
};

/*
var o1 = {}; // равно и нет разницы
var o2 = new Object();

var accept = ["gmail","yandex","yaxoo"]; // как впихнуть? Воспользоватся конструктором!
/gmail|yandex|yaxoo/.test(email);

var re = new RegExp(accept.join("|"),"i") // gmail|yandex|yaxoo
*/

function func(){
	return Array.prototype.slice.call(arguments);
}
func(1,2,3,4,5);