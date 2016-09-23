
var showMiddle = ["1975年6月7日出生于美国弗吉尼亚州汉普顿，前NBA球员，司职后卫（双能卫），曾11次入选NBA全明星阵容，曾任美国男篮梦之队队长，绰号“答案”（The Answer）。",
					"1996年6月26日被费城76人队选中，成为NBA状元。",
					"速度快、突破能力强、具备超强得分能力",
					"2000-2001赛季，艾弗森打出了生涯最好表现，夺得常规赛MVP。",
					"2000-2001赛季，带领76人获得东部冠军，杀入总决赛,1:4不敌湖人。",
					"60分<br/>2005年2月12日费城76人VS奥兰多魔术",
					"2013年10月30日，在费城正式宣布退役。",
					"2016年4月4日，正式入选2016年奈·史密斯篮球名人纪念堂。"];


var $center = $("#center");
var $middle = $(".middle");
var $outer = $(".outer");
var $showMiddle = $("#showMiddle");

var hasShow = false;

var outer0Timer = "";
var outer1Timer = "";
var outer2Timer = "";
var outer3Timer = "";
var outer4Timer = "";
var outer5Timer = "";
var outer6Timer = "";
var outer7Timer = "";


initCenter();
initMiddle();






function initCenter(){  
		$center.on({"mouseenter":function(){
				if(!hasShow){ 
					$middle.show();
					initOuterIn();
					
				}else{ 
					initOuterOut();
					$middle.hide();
				}
			}});
}

function initMiddle(){

		$middle.eq(0).css({"left":"34%","top":"34%"}).on({"mouseenter":function(){$showMiddle.html(showMiddle[0]).css({"width":"21%","height":"32%","left":"45%","top":"34%"}).show()},"mouseleave":function(){$showMiddle.hide()}});
		$middle.eq(1).css({"left":"45%","top":"34%"}).on({"mouseenter":function(){$showMiddle.html(showMiddle[1]).css({"width":"32%","height":"21%","left":"34%","top":"45%"}).show()},"mouseleave":function(){$showMiddle.hide()}});
		$middle.eq(2).css({"left":"56%","top":"34%"}).on({"mouseenter":function(){$showMiddle.html(showMiddle[2]).css({"width":"21%","height":"32%","left":"34%","top":"34%"}).show()},"mouseleave":function(){$showMiddle.hide()}});
		$middle.eq(3).css({"left":"56%","top":"45%"}).on({"mouseenter":function(){$showMiddle.html(showMiddle[3]).css({"width":"21%","height":"32%","left":"34%","top":"34%"}).show()},"mouseleave":function(){$showMiddle.hide()}});
		$middle.eq(4).css({"left":"56%","top":"56%"}).on({"mouseenter":function(){$showMiddle.html(showMiddle[4]).css({"width":"21%","height":"32%","left":"34%","top":"34%"}).show()},"mouseleave":function(){$showMiddle.hide()}});
		$middle.eq(5).css({"left":"45%","top":"56%"}).on({"mouseenter":function(){$showMiddle.html(showMiddle[5]).css({"width":"32%","height":"21%","left":"34%","top":"34%"}).show()},"mouseleave":function(){$showMiddle.hide()}});
		$middle.eq(6).css({"left":"34%","top":"56%"}).on({"mouseenter":function(){$showMiddle.html(showMiddle[6]).css({"width":"32%","height":"21%","left":"34%","top":"34%"}).show()},"mouseleave":function(){$showMiddle.hide()}});
		$middle.eq(7).css({"left":"34%","top":"45%"}).on({"mouseenter":function(){$showMiddle.html(showMiddle[7]).css({"width":"21%","height":"32%","left":"45%","top":"34%"}).show()},"mouseleave":function(){$showMiddle.hide()}});
}


function initOuterIn(){ 
		$outer.css({"display":"block"});
		hasShow = true;
		$outer.eq(0).stop(true,true).animate({"left":"1%","top":"1%"},1000);
		$outer.eq(1).stop(true,true).animate({"left":"34%","top":"1%"},1000);
		$outer.eq(2).stop(true,true).animate({"left":"67%","top":"1%"},1000);
		$outer.eq(3).stop(true,true).animate({"left":"67%","top":"1%"},500, 
									function(){$outer.eq(3).stop(true,true).animate({"left":"67%","top":"34%"},500)});
		$outer.eq(4).stop(true,true).animate({"left":"67%","top":"1%"},500,
									function(){$outer.eq(4).stop(true,true).animate({"left":"67%","top":"67%"},500)});
		$outer.eq(5).stop(true,true).animate({"left":"67%","top":"1%"},333,
									function(){$outer.eq(5).stop(true,true).animate({"left":"67%","top":"67%"},333,
									function(){$outer.eq(5).stop(true,true).animate({"left":"34%","top":"67%"},333)})});
		$outer.eq(6).stop(true,true).animate({"left":"67%","top":"1%"},333,
									function(){$outer.eq(6).stop(true,true).animate({"left":"67%","top":"67%"},333,
									function(){$outer.eq(6).stop(true,true).animate({"left":"1%","top":"67%"},333)})});
		$outer.eq(7).stop(true,true).animate({"left":"67%","top":"1%"},250,
									function(){$outer.eq(7).stop(true,true).animate({"left":"67%","top":"67%"},250,
									function(){$outer.eq(7).stop(true,true).animate({"left":"1%","top":"67%"},250,
									function(){$outer.eq(7).stop(true,true).animate({"left":"1%","top":"34%"},250)})})});
		setTimeout(outer0Ani(),1200);
		setTimeout(outer1Ani(),1200);
		setTimeout(outer2Ani(),1200);
		setTimeout(outer3Ani(),1200);
		setTimeout(outer4Ani(),1200);
		setTimeout(outer5Ani(),1200);
		setTimeout(outer6Ani(),1200);
		setTimeout(outer7Ani(),1200);
		outer0Timer = setInterval(outer0Ani(),16000);
		outer1Timer = setInterval(outer1Ani(),16000);
		outer2Timer = setInterval(outer2Ani(),16000);
		outer3Timer = setInterval(outer3Ani(),16000);
		outer4Timer = setInterval(outer4Ani(),16000);
		outer5Timer = setInterval(outer5Ani(),16000);
		outer6Timer = setInterval(outer6Ani(),16000);
		outer7Timer = setInterval(outer7Ani(),16000);


		
} 
function initOuterOut(){ 
		hasShow = false;
		clearInterval(outer0Timer);
		clearInterval(outer1Timer);
		clearInterval(outer2Timer);
		clearInterval(outer3Timer);
		clearInterval(outer4Timer);
		clearInterval(outer5Timer);
		clearInterval(outer6Timer);
		clearInterval(outer7Timer);
		$outer.eq(0).stop(true,true).animate({"left":"1%","top":"1%"},1000);
		$outer.eq(1).stop(true,true).animate({"left":"1%","top":"1%"},1000);
		$outer.eq(2).stop(true,true).animate({"left":"1%","top":"1%"},1000);
		$outer.eq(3).stop(true,true).animate({"left":"67%","top":"1%"},500, 
									function(){$outer.eq(3).stop(true,true).animate({"left":"1%","top":"1%"},500)});
		$outer.eq(4).stop(true,true).animate({"left":"67%","top":"1%"},500,
									function(){$outer.eq(4).stop(true,true).animate({"left":"1%","top":"1%"},500)});
		$outer.eq(5).stop(true,true).animate({"left":"67%","top":"67%"},333,
									function(){$outer.eq(5).stop(true,true).animate({"left":"67%","top":"1%"},333,
									function(){$outer.eq(5).stop(true,true).animate({"left":"1%","top":"1%"},333)})});
		$outer.eq(6).stop(true,true).animate({"left":"67%","top":"67%"},333,
									function(){$outer.eq(6).stop(true,true).animate({"left":"67%","top":"1%"},333,
									function(){$outer.eq(6).stop(true,true).animate({"left":"1%","top":"1%"},333)})});
		$outer.eq(7).stop(true,true).animate({"left":"1%","top":"67%"},250,
									function(){$outer.eq(7).stop(true,true).animate({"left":"67%","top":"67%"},250,
									function(){$outer.eq(7).stop(true,true).animate({"left":"67%","top":"1%"},250,
									function(){$outer.eq(7).stop(true,true).animate({"left":"1%","top":"1%"},250,
									function(){$outer.css({"display":"none"});})})})});
}

		var topFlag0 = false;
		var centerFlag0 = false;
		var bottomFlag0 = true;
		var outer0Ani = function(){ 
			return function(){
			 		if(centerFlag0){ 
			 			$outer.eq(0).css({"background-position":"100% 0%"});
			 			topFlag0 = true;
			 			centerFlag0 = false;
			 			bottomFlag0 = false;
			 		}else if(topFlag0){ 
			 			$outer.eq(0).css({"background-position":"100% 100%"});
			 			bottomFlag0 = true;
			 			topFlag0 = false;
			 			centerFlag0 = false;
			 		}else if(bottomFlag0){ 
			 			$outer.eq(0).css({"background-position":"0% 50%"});
			 			centerFlag0 = true;
			 			topFlag0 = false;
			 			bottomFlag0 = false;
			 		}
				
			}
		}
		
		//outer1
		var bottomFlag1 = false;
		var outer1Ani = function(){ 
			return function(){
			 		if(!bottomFlag1){ 
			 			$outer.eq(1).css({"background-position":"100% 100%"});
			 			bottomFlag1 = true;
			 		}else{ 
			 			$outer.eq(1).css({"background-position":"0% 0%"});
			 			bottomFlag1 = false;
			 		}
				
			}
		}



		//outer2
		var topFlag2 = false;
		var centerFlag2 = false;
		var bottomFlag2 = true;
		var outer2Ani = function(){ 
			return function(){
			 		if(centerFlag2){ 
			 			$outer.eq(2).css({"background-position":"0% 0%"});
			 			topFlag2 = true;
			 			centerFlag2 = false;
			 			bottomFlag2 = false;
			 		}else if(topFlag2){ 
			 			$outer.eq(2).css({"background-position":"0% 100%"});
			 			bottomFlag2 = true;
			 			topFlag2 = false;
			 			centerFlag2 = false;
			 		}else if(bottomFlag2){ 
			 			$outer.eq(2).css({"background-position":"100% 50%"});
			 			centerFlag2 = true;
			 			topFlag2 = false;
			 			bottomFlag2 = false;
			 		}
				
			}
		}
 

		//outer3
		var topFlag3 = false;
		var centerFlag3 = true
		var bottomFlag3 = false;
		var outer3Ani = function(){ 
			return function(){
			 		if(centerFlag3){ 
			 			$outer.eq(3).css({"background-position":"100% 0%"});
			 			topFlag3 = true;
			 			centerFlag3 = false;
			 			bottomFlag3 = false;
			 		}else if(topFlag3){ 
			 			$outer.eq(3).css({"background-position":"100% 100%"});
			 			bottomFlag3 = true;
			 			topFlag3 = false;
			 			centerFlag3 = false;
			 		}else if(bottomFlag3){ 
			 			$outer.eq(3).css({"background-position":"0% 50%"});
			 			centerFlag3 = true;
			 			topFlag3 = false;
			 			bottomFlag3 = false;
			 		}
				
			}
		}



		//outer4
		var bottomFlag4 = false;
		var outer4Ani = function(){ 
			return function(){
			 		if(!bottomFlag4){ 
			 			$outer.eq(4).css({"background-position":"100% 100%"});
			 			bottomFlag4 = true;
			 		}else{ 
			 			$outer.eq(4).css({"background-position":"0% 0%"});
			 			bottomFlag4 = false;
			 		}
				
			}
		}


		//outer5
		var bottomFlag5 = false;
		var outer5Ani = function(){ 
			return function(){
			 		if(!bottomFlag5){ 
			 			$outer.eq(5).css({"background-position":"50% 100%"});
			 			bottomFlag5 = true;
			 		}else{ 
			 			$outer.eq(5).css({"background-position":"50% 0%"});
			 			bottomFlag5 = false;
			 		}
				
			}
		}



		//outer6
		var bottomFlag6 = false;
		var outer6Ani = function(){ 
			return function(){
			 		if(!bottomFlag6){ 
			 			$outer.eq(6).css({"background-position":"0% 100%"});
			 			bottomFlag6 = true;
			 		}else{ 
			 			$outer.eq(6).css({"background-position":"100% 0%"});
			 			bottomFlag6 = false;
			 		}
				
			}
		}


		//outer7
		var topFlag7 = false;
		var centerFlag7 = true
		var bottomFlag7 = false;
		var outer7Ani = function(){ 
			return function(){
			 		if(centerFlag7){ 
			 			$outer.eq(7).css({"background-position":"0% 0%"});
			 			topFlag7 = true;
			 			centerFlag7 = false;
			 			bottomFlag7 = false;
			 		}else if(topFlag7){ 
			 			$outer.eq(7).css({"background-position":"0% 100%"});
			 			bottomFlag7 = true;
			 			topFlag7 = false;
			 			centerFlag7 = false;
			 		}else if(bottomFlag7){ 
			 			$outer.eq(7).css({"background-position":"100% 50%"});
			 			centerFlag7 = true;
			 			topFlag7 = false;
			 			bottomFlag7 = false;
			 		}
				
			}
		}

