(function()
{	

	var years = (function()
	{
	do
	{
	var years = prompt("Сколько Вам лет?", "Мне меньше 18");
	var reg = /^[1][0-4]\d$|^\d?\d$/;
	var access = reg.test(years);
	if (access==false){alert("Ошибка!!!")}
	}
	while (access==false){return years;}
	})();


		var stop = false;
		var enter = years>90?(alert("Оно вам надо?"))
			   :years>18?(alert("Хорошо, вы можете продолжить."))
			   :(alert("Простите, вы еще так юны!"),
			    stop = true);

		(function(stop)
		{
		stop==true?(alert("ACCESS DENIED!!!"),location.assign("STOP.html"))
			  	  :(alert("Access is allowed"),location.assign("continue.html"));
		})(stop);
})();
