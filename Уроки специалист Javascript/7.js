

var user = {}; // объект
print(typeof user);
user.name = "John";
user.age = 25;
user.say = function(wold){
			print(wold+" from "+this.name);
			};
user.foo = function(){};

var user1 = {name:"Mike", age:33};
user1.admin = true;

var o = {"user name":"John", var:10, 2:true};
o.x=10;
"var" in o // поиск свойства в составе объекта

var user2 = {
	0:"a",
	1:"b",
	2:"c"
};
for (var i=0; i in user2; i++){
	print(i + ": " + user2[i]);}


var user3 = {
	"x":"a",
	"y":"b",
	"z":"c"
};

for(var i in user3){
	print(i + ": " + user3[i]);}

var userlab = {};
userlab.name = "Wolf";
userlab.age = 30;
userlab.torent = "yes";
userlab.prise = function priseUserLab(){
				print(this.name+" жил "+ this.age + "!");
};

function priseUserLab2(){
				print(this.name+" прожил "+this.age+"!");}

var userlab1 = {
	name:"Lia",
	age:44,
	admin:"true",
	prise: priseUserLab2,
	vzaimst: userlab.prise

};


for(var i in userlab1){
	print(i+": "+userlab1[i]);
} 




var o = {
	param:10,
	method:function(){
		var self = this;
		function test (){
			print(self.param);
		}
		test();
	}
};

