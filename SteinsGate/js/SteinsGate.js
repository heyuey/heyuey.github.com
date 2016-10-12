var wordsFront = "面对选择项，或者说在选择时伦太郎发表的言词。红莉栖指出此词语是混杂用法，词中的“Steins（石）”源自德语，“Gate（门）”源自英语。由于是伦太郎的造词，所以本身也不具有什么意义。但在最后成为一个重要的关键字，贯通本作内容。";
var wordsRight = "伦太郎离别时的常用中二病用语，没什么特别意义，伦太郎的造词。只是喜欢它的语感罢了。对伦太郎来说或许是再日常不过的词语，据说遇到异常的状况时也有取回平常心的功效。实际上是来自希腊语和拉丁语组成的词语，大意为强化思路。";
var wordsBack = "抽取自身的记忆送到过去的自己的一种时间旅行方法。实验者会产生跳转时空和转移地点的错觉，其他人完全无法察觉被实验者的来龙去脉，因此不会有时间悖论发生，即因果律的修正。回到过去的实验者会接受从未来到达的信息，不会因“因果律”重构记忆。";
var wordsLeft = "能够将邮件发往过去的系统或是邮件本身的代称。D-Mail的“D”是De Lorean的缩写。亦有一说指D其实是E之前的一个字母。";
var wordsTop = "为冈部所拥有的类超能力，即世界线变动率改变后仍保留上一世界线的记忆。距命运石之门0和本篇所讲，其实是每个人都有的能力，只是冈部表现出的能力最强。据冈部的回忆，他十岁时一次发高烧期间有着与世界线变动后相同的症状，认为此能力可能自那时获得。";
var wordsBottom = "所有收束至某一结果的可能性结合起来的线，可理解为不同的选择所发生的不同路线。";



var $wrapper = $(".main-wrapper");
var $cube = $("#cube");
var $stage = $("#stage");
var $cubeLeft = $("#cubeLeft");
var $cubeRight = $("#cubeRight");
var $cubeFront = $("#cubeFront");
var $cubeBack = $("#cubeBack");
var $cubeTop = $("#cubeTop");
var $cubeBottom = $("#cubeBottom");
var $cubeInside = $(".cubeInside");

var $wordsCube= $("#wordsCube");
var $wordsCubeFront = $("#wordsCubeFront");
var $wordsCubeRight = $("#wordsCubeRight");
var $wordsCubeBack = $("#wordsCubeBack");
var $wordsCubeLeft = $("#wordsCubeLeft");
var $wordsCubeTop = $("#wordsCubeTop");
var $wordsCubeBottom = $("#wordsCubeBottom");
var $wordsExp = $("#wordsExplain");
var step = 1;
var wordsStep = 1;
var wordsIndex = 1;
var wordsAppearTimer = "";

var $audioPlayer = $("#audioPlayer");
var $audio = $("#audio");
var $audioOuter = $("#audioOuter");

var $menuItems = $("#menu>a");
var menuItemIndex = 1;
var clickFlag = false;

var cubeTimer = "";
var wordTimer = "";
var menuTimer = "";

$("body").append("<div id=\"loadingDiv\" style=\"position:fixed;left:0;top:0;height:100%;width:100%;background:grey;color:#FFF;font:50px arial,sans-serif;text-align:center;\"><div id=\"loadingWords\" style=\"margin-bottom:100px;\">loading...</div></div>");
var $loadingDiv = $("#loadingDiv");
window.onload = function(){ 
		initCubeClick();
		cubeTimer = setInterval(cubeAnimate(),3000);
		initWords();
		initAudio();
		initMenu();
		$loadingDiv.remove();
}

var cubeAnimate = function(){ 
		return function(){ 
			switch(step){ 
				case 1:
					$cube.css({"transform":"rotateY(-90deg)"});
					step++;
					break;
				case 2:
					$cube.css({"transform":"rotateY(-180deg)"});
					step++;
					break;
				case 3:
					$cube.css({"transform":"rotateY(-270deg)"});
					step++;
					break;
				case 4:
					$cube.css({"transform":"rotateX(-90deg)"});
					step++;
					break;
				case 5:
					$cube.css({"transform":"rotateX(90deg)"});
					step++;
					break;
				case 6:
					$cube.css({"transform":"rotate3d(1,1,0,45deg) "});
					step++;
					break;
				case 7:
					$stage.css({"transform":"rotateY(-360deg)"});
					step++;
					break;
				case 8:
					$stage.css({"transform":"rotateY(-720deg)"});
					step++;
					break;
				case 9:
					$cube.css({"transform":"rotateX(0deg)"});
					step++;
					break;
				case 10:
					$cubeFront.css({"top":"-130px","left":"-40px","transform":"translateZ(0px)"});
					$cubeRight.css({"top":"-130px","left":"160px","transform":"rotateY(0deg)"});
					$cubeBack.css({"top":"-130px","left":"360px","transform":"rotateY(0deg)"});
					$wrapper.css({"background-position":"80%"});
					step++;
					break;
				case 11:
					$cubeLeft.css({"top":"120px","left":"-40px","transform":"translateZ(0px)"});
					$cubeTop.css({"top":"120px","left":"160px","transform":"rotateX(0deg)"});
					$cubeBottom.css({"top":"120px","left":"360px","transform":"rotateX(0deg)"});
					step++;
					break;
				case 12:
					$cubeFront.css({"transform":"scale(.8)","top":"-150px"});
					$cubeRight.css({"transform":"scale(.8)","top":"-150px"});
					$cubeBack.css({"transform":"scale(.8)","top":"-150px"});
					$cubeLeft.css({"transform":"scale(.8)","top":"60px"});
					$cubeTop.css({"transform":"scale(.8)","top":"60px"});
					$cubeBottom.css({"transform":"scale(.8)","top":"60px"});
					$cubeInside.eq(0).css({"opacity":1,"transform":"scale(.8)","top":"270px"});
					$cubeInside.eq(1).css({"opacity":1,"transform":"scale(.8)","top":"270px"});
					$cubeInside.eq(2).css({"opacity":1,"transform":"scale(.8)","top":"270px"});
					step++;
					break;
				case 13:case 14:case 15:
					$cubeFront.css({"transform":"scale(1)"});
					step++;
					break;
				case 16:case 17:case 18:
					$cubeFront.css({"transform":"scale(.8)"});
					$cubeRight.css({"transform":"scale(1)"});
					step++;
					break;
				case 19:case 20: case 21:
					$cubeRight.css({"transform":"scale(.8)"});
					$cubeBack.css({"transform":"scale(1)"});
					step++;
					break;
				case 22:case 23: case 24:
					$cubeBack.css({"transform":"scale(.8)"});
					$cubeLeft.css({"transform":"scale(1)"});
					step++;
					break;
				case 25:case 26:case 27:
					$cubeLeft.css({"transform":"scale(.8)"});
					$cubeTop.css({"transform":"scale(1)"});
					step++;
					break;
				case 28:case 29:case 30:
					$cubeTop.css({"transform":"scale(.8)"});
					$cubeBottom.css({"transform":"scale(1)"});
					step++;
					break;
				case 31:case 32:case 33:
					$cubeBottom.css({"transform":"scale(.8)"});
					$cubeInside.eq(0).css({"transform":"scale(1)"});
					step++;
					break;
				case 34:case 35:case 36:
					$cubeInside.eq(0).css({"transform":"scale(.8)"});
					$cubeInside.eq(1).css({"transform":"scale(1)"});
					step++;
					break;
				case 37:case 38:case 39:
					$cubeInside.eq(1).css({"transform":"scale(.8)"});
					$cubeInside.eq(2).css({"transform":"scale(1)"});
					step++;
					break;
				case 40:case 41:case 42:
					$cubeInside.eq(2).css({"transform":"scale(.8)"});
					$cubeInside.eq(3).css({"transform":"scale(1)"});
					step++;
					break;
				case 43:
					$cubeFront.css({"transform":"scale(1)translateZ(120px)","top":"0px","left":"0px"});
					$cubeRight.css({"transform":"scale(1)rotateY(90deg)translateZ(120px)","top":"0px","left":"0px"});
					$cubeBack.css({"transform":"scale(1)rotateY(180deg)translateZ(120px)","top":"0px","left":"0px"});
					$cubeLeft.css({"transform":"scale(1)rotateY(-90deg)translateZ(120px)","top":"0px","left":"0px"});
					$cubeTop.css({"transform":"scale(1)rotateX(90deg)translateZ(120px)","top":"0px","left":"0px"});
					$cubeBottom.css({"transform":"scale(1)rotateX(-90deg)translateZ(120px)","top":"0px","left":"0px"});
					$cubeInside.eq(0).css({"opacity":0,"transform":"scale(1)","top":"270px"});
					$cubeInside.eq(1).css({"opacity":0,"transform":"scale(1)","top":"270px"});
					$cubeInside.eq(2).css({"opacity":0,"transform":"scale(1)","top":"270px"});
					$wrapper.css({"background-position":"50%"});
					step=1;
					break;
				default:
					return false;

			}

		}
}
var wordsAppear = function(words){ 
		return function(){ 
			if(wordsIndex<=words.length){ 
				$wordsExp.text(words.substring(0,wordsIndex));
				wordsIndex++;
			}else{ 
				return false;
			}
		}
}





var wordsAnimate = function(){ 
		return function(){ 
			switch(wordsStep){ 
				case 1:
						wordsIndex = 1;
						clearInterval(wordsAppearTimer);
						$wordsCubeFront.css({"opacity":0});
						$wordsCubeRight.css({"opacity":1});
						$wordsCube.css({"transform":"rotateY(-90deg)"});
						wordsAppearTimer = setInterval(wordsAppear(wordsRight),40);
						wordsStep++;
						break;
				case 2:
						wordsIndex = 1;
						clearInterval(wordsAppearTimer);
						$wordsCubeRight.css({"opacity":0});
						$wordsCubeBack.css({"opacity":1});
						$wordsCube.css({"transform":"rotateY(-180deg)"});
						wordsAppearTimer = setInterval(wordsAppear(wordsBack),40);
						wordsStep++;
						break;
				case 3:

						wordsIndex = 1;
						clearInterval(wordsAppearTimer);
						$wordsCubeBack.css({"opacity":0});
						$wordsCubeLeft.css({"opacity":1});
						$wordsCube.css({"transform":"rotateY(-270deg)"});
						wordsAppearTimer = setInterval(wordsAppear(wordsLeft),40);
						wordsStep++;
						break;
				case 4:
						wordsIndex = 1;
						clearInterval(wordsAppearTimer);
						$wordsCubeLeft.css({"opacity":0});
						$wordsCubeTop.css({"opacity":1});
						$wordsCube.css({"transform":"rotateX(-90deg)"});
						wordsAppearTimer = setInterval(wordsAppear(wordsTop),40);
						wordsStep++;
						break;
				case 5:
						wordsIndex = 1;
						clearInterval(wordsAppearTimer);
						$wordsCubeTop.css({"opacity":0});
						$wordsCubeBottom.css({"opacity":1});
						$wordsCube.css({"transform":"rotateX(90deg)"});
						wordsAppearTimer = setInterval(wordsAppear(wordsBottom),40);
						wordsStep++;
						break;
				case 6:
						wordsIndex = 1;
						clearInterval(wordsAppearTimer);
						$wordsCubeBottom.css({"opacity":0});
						$wordsCubeFront.css({"opacity":1});
						$wordsCube.css({"transform":"rotateX(0deg)"});
						wordsAppearTimer = setInterval(wordsAppear(wordsFront),40);
						wordsStep = 1;
						break;
				default:
						return false;

			}
		}

}

function initWords(){ 
		wordsAppearTimer = setInterval(wordsAppear(wordsFront),40);
		wordTimer = setInterval(wordsAnimate(),8000);
}



function initCubeClick(){ 
		$cubeFront.on({"click":function(){window.open("Vol001.html")}});
		$cubeRight.on({"click":function(){window.open("Vol002.html")}});
		$cubeBack.on({"click":function(){window.open("Vol003.html")}});
		$cubeLeft.on({"click":function(){window.open("Vol004.html")}});
		$cubeTop.on({"click":function(){window.open("Vol005.html")}});
		$cubeBottom.on({"click":function(){window.open("Vol006.html")}});
		$cubeInside.eq(0).on({"click":function(){window.open("Vol007.html")}});
		$cubeInside.eq(1).on({"click":function(){window.open("Vol008.html")}});
		$cubeInside.eq(2).on({"click":function(){window.open("Vol009.html")}});
}

function initAudio(){ 
		var audioClick = function(){
				return function(){ 
					if($audio[0].paused){ 
						$audio[0].play();
						$audioOuter.css({"background-image":"url(css/images/pause.svg)"});
					}else{ 
						$audio[0].pause();
						$audioOuter.css({"background-image":"url(css/images/play.svg)"});
					} 

				}				
		}

		$audioPlayer.on({"click":audioClick()});
}
function initMenu(){ 
		
		var menuItemsAin = function(){ 
				return function(){ 
					switch(menuItemIndex){ 
						case 1:
							$menuItems.eq(2).css({"right":"25%","opacity":".8"});
							menuItemIndex++;
							break;
						case 2:
							$menuItems.eq(1).css({"right":"50%","opacity":".8"});
							menuItemIndex++;
							break;
						case 3:
							$menuItems.eq(0).css({"right":"75%","opacity":".8"});
							menuItemIndex++;
							break;
						case 4:
							$menuItems.eq(2).css({"right":"0%","opacity":"0"});
							$menuItems.eq(1).css({"right":"25%"});
							$menuItems.eq(0).css({"right":"50%"});
							menuItemIndex++;
							break;
						case 5:
							$menuItems.eq(1).css({"right":"0%","opacity":"0"});
							$menuItems.eq(0).css({"right":"25%"});
							menuItemIndex++;
							break;
						case 6:
							$menuItems.eq(0).css({"right":"0%","opacity":"0"});
							menuItemIndex = 1;
							break;

						default:
							return false;
					}
				}
		}

		menuTimer = setInterval(menuItemsAin(),6000);

		var pauseBtn = function(){ 
				return function(){ 
					if(cubeTimer){ 
						clearInterval(cubeTimer);
						cubeTimer = "";
						clearInterval(wordTimer);
						clearInterval(menuTimer);
						$menuItems.eq(0).text("恢复");
					}else{ 
						cubeTimer = setInterval(cubeAnimate(),3000);
						wordTimer = setInterval(wordsAnimate(),8000);
						menuTimer = setInterval(menuItemsAin(),6000);
						$menuItems.eq(0).text("暂停");
					}
				}
		}

		$menuItems.eq(0).on({"click":pauseBtn()});

		var menuBtn = function(){ 
				return function(){ 
						if(!clickFlag){ 
							$menuItems.eq(2).css({"right":"25%","opacity":".8"});
							$menuItems.eq(1).css({"right":"50%","opacity":".8"});
							$menuItems.eq(0).css({"right":"75%","opacity":".8"});
							clickFlag = true;
							clearInterval(menuTimer);
						}else{ 
							$menuItems.eq(2).css({"right":"0%","opacity":"0"});
							$menuItems.eq(1).css({"right":"0%","opacity":"0"});
							$menuItems.eq(0).css({"right":"0%","opacity":"0"});
							clickFlag = false;
						}
				}
		}
		$menuItems.eq(3).on({"click":menuBtn()});
}