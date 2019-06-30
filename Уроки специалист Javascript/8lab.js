var a = [5 ,12];
var b = [];
a[99]=7;

function w(){ for (var i in a){
	 b[i] = Math.pow(a[i], 2);
	} 
	return b;
}

function v(){ for (var i = 0;i<a.length ;i++){
	 b[i] = Math.pow(a[i], 2);
	} 
	return b;
}








(function s(){
	for(var i in a){
		b.push(Math.pow(a[i], 2));
	}
})()
