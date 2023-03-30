var x = null;
var y = null;
var xx = null;

function tellPos(p){
x = p.pageX; y = p.pageY;

}
addEventListener('mousemove', tellPos, false);


function luo(){
	var yy = null;
	xx = x;
	yy = y;
	var div = document.createElement("div");
div.style.width = "10px";
div.id = "div";
div.style.height = "10px";
div.style.background = "blue";
div.style.position = "absolute";
div.style.top = y + "px";
div.style.left = x + "px";
console.log("hei");
document.body.appendChild(div);
fysiikka();
function fysiikka(){

	div.style.top =  yy + "px";
	yy = yy + 7;
	setTimeout(function(){fysiikka();}, 30);
}
}
