var x = 1;
var y = 2;

var a = x + y;
var b = x - y;
var c = x * y;
var d = x / y;


document.getElementById("add").innerHTML = "When I add " + x "to" + y  + " I get: " + a;
document.getElementById("subtract").innerHTML = "When I subtract " + x + " from " + y + " I get: " + b;
document.getElementById("multiply").innerHTML = "When I multiply " + x + " by " + y + " I get: " + c; 
document.getElementById("divide").innerHTML = "When I divide " + x + " by " + y  + " I get: " + d;


document.getElementById("add").style.fontFamily = "times"; 
document.getElementById("subtract").style.fontFamily = "times"; 
document.getElementById("multiply").style.fontFamily = "times"; 
document.getElementById("divide").style.fontFamily = "times"; 
