var a=1;
var b=2;
var c= a+b;
var date=new Date();
console.log(date)

function getDate(){
	var date=new Date();
	var par= document.getElementById("current_date").innerHTML = date;
	console.log(par)
	par.innerHTML = date;
	par.style.color = red;
}