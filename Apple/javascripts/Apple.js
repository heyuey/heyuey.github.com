initMenu();
window.onload = function(){ 
	initCarousel();
}
function initMenu(){ 
	var $btnMenu = $("#header .nav .nav-item-menu");
	var $nav = $("#header .nav");
	var $navItem = $("#header .nav .nav-item");
	var $topLine = $("#header .nav .nav-item-menu .nav-item-menu-top");
	var $bottomLine = $("#header .nav .nav-item-menu .nav-item-menu-bottom");
	var $bag = $("#header .nav .nav-item-bag");

	var menuClick = function(){ 
		return function(){ 
			if($nav.hasClass("nav-click")){
				$nav.animate({"height":"44px"},300,function(){$nav.removeClass("nav-click")});
			}else{ 
				$nav.addClass("nav-click").animate({"height":"100%"},300);
			}
			$navItem.toggleClass("nav-item-click");
			$bag.toggleClass("nav-item-bag-out");
			$topLine.toggleClass("top-ani");
			$bottomLine.toggleClass("bottom-ani");
		}
	}
	$btnMenu.on("click",menuClick());
}


function initCarousel(){ 
	var $bar = $("#wrapper .carousel .bar-line .bar");
	var $barInner = $("#wrapper .carousel .bar-line .bar-inner");
	var $stage = $("#wrapper .carousel .car-stage");
	var $screen = $("#wrapper .carousel .car-screen");
	var clickFlag = false;
	var clickIndex = "";
	var curIndex = 0;
	var timer = "";

	var barClick = function(index){ 
		return function(){
			clearInterval(timer);
			clickFlag = true;
			clickIndex = index;
			$barInner.eq(index).css("width","100%");
			$stage.css("transform","translate("+index*-25+"%)");
			for(var i=0,length=$bar.length;i<length;i++){ 
				if(i!==index){ 
					$barInner.eq(i).css("width","0px");
				}
			}
		}
	}
	for(var i=0,length=$bar.length;i<length;i++){ 
		$bar.eq(i).on("click",barClick(i));
	}

	function running(){
		switch(curIndex){ 
			case 0:
				$barInner.eq(0).stop(true,true).animate({"width":"100%"},4000,function(){
																						if(!clickFlag){
																							$stage.css("transform","translate(-25%)");
																						}else if(clickFlag&&clickIndex!=0){ 
																							$barInner.eq(0).css("width",0);
																						}
																				});
				curIndex++;
				break;
			case 1:
				$barInner.eq(1).stop(true,true).animate({"width":"100%"},4000,function(){
																						if(!clickFlag){
																							$stage.css("transform","translate(-50%)");
																						}else if(clickFlag&&clickIndex!=1){ 
																							$barInner.eq(1).css("width",0);
																						}
																				});
				curIndex++;
				break;
			case 2:
				$barInner.eq(2).stop(true,true).animate({"width":"100%"},4000,function(){
																						if(!clickFlag){
																							$stage.css("transform","translate(-75%)");
																						}else if(clickFlag&&clickIndex!=2){ 
																							$barInner.eq(2).css("width",0);
																						}
																				});
				curIndex++;
				break;
			case 3:
				$barInner.eq(3).stop(true,true).animate({"width":"100%"},3900,function(){
																						if(!clickFlag){
																							$stage.css("transform","translate(0%)");
																							for(var i=0,length=$barInner.length;i<length;i++){
																								$barInner.eq(i).css("width",0); 
																							}
																						}else if(clickFlag&&clickIndex!=3){ 
																							$barInner.eq(3).css("width",0);
																						}
																				});
				curIndex = 0;
				break;
			default:
				return false;
		}
	}
	running();
	timer = setInterval(running,4001);
}

initFooter();
function initFooter(){ 
	var $title = $("#footer .directory .title");

	var titleClick = function(i){ 
		return function(){
			if($title.eq(i).hasClass("opened")){ 
				$title.eq(i).removeClass("opened").parent().css("height",40);
			}else{ 
				var height = $title.eq(i).parent().find(".list").length * 30 + 40;
				$title.eq(i).addClass("opened").parent().css("height",height);
			}
			
		}
	}
	for(var i=0,length=$title.length;i<length;i++){ 
		$title.eq(i).on("click",titleClick(i));
	}
}