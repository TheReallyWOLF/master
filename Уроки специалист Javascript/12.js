/*var d = new Date();
d.getTime(); // возращает милисекунды начиная с точки отсчета
d.toDateString(); // Возвращает дату
d.toTimeString(); // Возвращает время*/


/*var userDate = "2020-10-20";
var date = /^\d{4}-(0\d]|1[012])-(0[1-9]|1\d|2\d|3[01])$/;
var exam = date.test(userDate);

var ourdate = (function(exam,userDate)
{
	if (exam) 
	{
		print(new Date(userDate));
	}
	else print("Ошибка в дате!")
})(exam,userDate);*/


var userDate = "2420-12-20";

var ourdate = (function(userDate)
{
	var date = /^(\d{4})-(0\d]|1[012])-(0[1-9]|1\d|2\d|3[01])$/;
	var exam = userDate.match(date);
		if (exam) 
		{
		print(new Date(exam[1],exam[2]-1, exam[3]));
		}
		else print("Ошибка в дате!")
})(userDate);



try{
	var x = 1;
	print(x*y);
}catch(e){
	print(e.name+" - "+e.message );
}
print("The end!")