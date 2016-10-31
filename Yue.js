
window.onload = function(){ 
	initClick();
}
var initClick = function(){ 
	var $yue = $(".yue");
	var $box = $(".box-wrapper");
	$yue.on("click",function(){ 
						$yue.toggleClass("show");
						$box.toggleClass("show");
	})
}