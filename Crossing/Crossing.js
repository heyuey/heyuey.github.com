
var $mainScreen = $(".wrapper .mainScreen");
var mainWidth = parseInt($(".mainScreen").css("width"));
var mainHeight = parseInt($(".mainScreen").css("height"));

var $crosser = $("#crosser");
$crosser.data({"scroing":false});
var crosserHeight = parseInt($crosser.css("height"));
var crosserRight = parseInt($crosser.css("right"));
var crosserWidth = parseInt($crosser.css("width"));

var blankHeight = [crosserHeight+60,crosserHeight+65,crosserHeight+70,crosserHeight+75,crosserHeight+80,crosserHeight+85,crosserHeight+90,crosserHeight+95,crosserHeight+100,crosserHeight+140];
var remainHeight = "";

var $barrierTop = $(".barrierTop");
var barrierStep = 1;
var barrierWidth = parseInt($barrierTop.eq(0).css("width"));
var $barrierBottom = $(".barrierBottom");

var $coverLayer = $("#coverLayer");
var $coverBtn = $("#coverBtn");
var score = 0;
var hiScore = 0;
var $currentScore = $("#currentScore");
var $coverOver = $("#coverOver");
var $coverScore = $("#coverScore");
var $coverHiScore = $("#coverHiScore");


var currentBarrier = "";

var barrierTimer = "";
var crosserTimer = "";
var observerTimer = "";
var scroing = false;

var barrierCount = 1;

initCoverLayer();




		
		var barrierMove = function(){ 
				return function(){ 
					switch(barrierStep){ 
						case 1:
							if($crosser.data("scroing")){score++;$currentScore.text(score);}
							$barrierTop.eq(0).css({"height":getHeight(),"opacity":1,"right":810});
							$barrierBottom.eq(0).css({"height":(remainHeight-parseInt($barrierTop.eq(0).css("height"))),"opacity":1,"right":810}).text(barrierCount);
							$barrierTop.eq(3).css({"opacity":0,"right":-barrierWidth});
							$barrierBottom.eq(3).css({"opacity":0,"right":-barrierWidth});
							currentBarrier = [0,4,5];
							barrierStep++;
							barrierCount++;
							
							break;
						case 2:
							if($crosser.data("scroing")){score++;$currentScore.text(score);}
							$barrierTop.eq(1).css({"height":getHeight(),"opacity":1,"right":810});
							$barrierBottom.eq(1).css({"height":(remainHeight-parseInt($barrierTop.eq(1).css("height"))),"opacity":1,"right":810}).text(barrierCount);
							$barrierTop.eq(4).css({"opacity":0,"right":-barrierWidth});
							$barrierBottom.eq(4).css({"opacity":0,"right":-barrierWidth});
							currentBarrier = [0,1,5];
							barrierStep++;
							barrierCount++;
							
							break;
						case 3:
							if($crosser.data("scroing")){score++;$currentScore.text(score);}
							$barrierTop.eq(2).css({"height":getHeight(),"opacity":1,"right":810});
							$barrierBottom.eq(2).css({"height":(remainHeight-parseInt($barrierTop.eq(2).css("height"))),"opacity":1,"right":810}).text(barrierCount);
							$barrierTop.eq(5).css({"opacity":0,"right":-barrierWidth});
							$barrierBottom.eq(5).css({"opacity":0,"right":-barrierWidth});
							currentBarrier = [0,1,2];
							barrierStep++;
							barrierCount++;
							
							break;
						case 4:
							if($crosser.data("scroing")){score++;$currentScore.text(score);}
							$barrierTop.eq(3).css({"height":getHeight(),"opacity":1,"right":810});
							$barrierBottom.eq(3).css({"height":(remainHeight-parseInt($barrierTop.eq(3).css("height"))),"opacity":1,"right":810}).text(barrierCount);
							$barrierTop.eq(0).css({"opacity":0,"right":-barrierWidth});
							$barrierBottom.eq(0).css({"opacity":0,"right":-barrierWidth});
							currentBarrier = [1,2,3];
							barrierStep++;
							barrierCount++;
							
							break;
						case 5:
							if($crosser.data("scroing")){score++;$currentScore.text(score);}
							$barrierTop.eq(4).css({"height":getHeight(),"opacity":1,"right":810});
							$barrierBottom.eq(4).css({"height":(remainHeight-parseInt($barrierTop.eq(4).css("height"))),"opacity":1,"right":810}).text(barrierCount);
							$barrierTop.eq(1).css({"opacity":0,"right":-barrierWidth});
							$barrierBottom.eq(1).css({"opacity":0,"right":-barrierWidth});
							currentBarrier = [2,3,4];
							barrierStep++;
							barrierCount++;
							
							break;
						case 6:
							if($crosser.data("scroing")){score++;$currentScore.text(score);}
							$barrierTop.eq(5).css({"height":getHeight(),"opacity":1,"right":810});
							$barrierBottom.eq(5).css({"height":(remainHeight-parseInt($barrierTop.eq(5).css("height"))),"opacity":1,"right":810}).text(barrierCount);
							$barrierTop.eq(2).css({"opacity":0,"right":-barrierWidth});
							$barrierBottom.eq(2).css({"opacity":0,"right":-barrierWidth});
							currentBarrier = [3,4,5];
							barrierStep = 1;
							barrierCount++;
							
							break;
						default:
							return false;
					}
			}
		}

		//barrierTimer = setInterval(barrierMove(),1400);
		



		var crosserFalling = function(){ 
				return function(){
					if(!(parseInt($crosser.css("top"))>(mainHeight-crosserHeight))){ 
						$crosser.css({"top":(parseInt($crosser.css("top"))+12)});
					}else{ 
					//	GameOver
						gameOver();
						

					}
				}
		}


		//corsserTimer = setInterval(crosserFalling(),36);
		
		var crosserRising = function(){ 
				return function(){ 

					if(parseInt($crosser.css("top"))>0){ 
						
						$crosser.stop(true,true).animate({"top":(parseInt($crosser.css("top"))-12)},10,function(){ 
							$crosser.stop(true,true).animate({"top":(parseInt($crosser.css("top"))-12)},10,function(){ 
								$crosser.stop(true,true).animate({"top":(parseInt($crosser.css("top"))-12)},30,function(){ 
									$crosser.stop(true,true).animate({"top":(parseInt($crosser.css("top"))-12)},40,function(){ 
										$crosser.stop(true,true).animate({"top":(parseInt($crosser.css("top"))-10)},220);
									});
								});
							});
						});

					}
				}
		}

		$mainScreen.on({"click":crosserRising()});


		var observing = function(){ 
				return function(){ 
					for(var i=0;i<currentBarrier.length;i++){ 
						if((crosserRight-parseInt($barrierTop.eq(currentBarrier[i]).css("right")))<=barrierWidth&&(crosserRight-parseInt($barrierTop.eq(currentBarrier[i]).css("right")))>0){ 
							if(parseInt($crosser.css("top"))<parseInt($barrierTop.eq(currentBarrier[i]).css("height"))||(mainHeight-parseInt($crosser.css("top")))<parseInt($barrierBottom.eq(currentBarrier[i]).css("height"))){ 
								//	GameOver
								gameOver();
							}else{ 
								$crosser.data({"scroing":true});

							}
						}
					}
			}	
		}

	//	observerTimer = setInterval(observing(),30);
		var scoring = function(){ 
				return function(){ 
					score++;
					$currentScore.text(score);
				}
		}
		

function initCoverLayer(){ 

		$coverBtn.on({"click":function(event){$coverLayer.css({"display":"none"});
												event.stopPropagation();
												
													gameStart();
													$coverBtn.text("Restart");
												
													
											}});
		$coverLayer.on({"click":function(event){event.stopPropagation();}});
}

function gameStart(){ 
		score = 0;
		barrierStep = 1; 
		$currentScore.text(0);
		barrierTimer = setInterval(barrierMove(),1400);
		crosserTimer = setInterval(crosserFalling(),34);
		observerTimer = setInterval(observing(),20);
		$crosser.css({"top":"200px"});
		$mainScreen.trigger("click");

}

function gameOver(){ 
		barrierCount = 1;
		$crosser.data({"scroing":false});
		clearInterval(barrierTimer);
		clearInterval(crosserTimer);
		clearInterval(observerTimer);
		barrierStep = 0;
		$coverLayer.css({"display":"block"});
		if(score>hiScore){hiScore=score;}
		$coverOver.text("Game Over");
		$coverScore.text("Score: "+score);
		$coverHiScore.text("Highest Score: "+hiScore);
		for(var i=0;i<currentBarrier.length;i++){ 
				$barrierTop.eq(currentBarrier[i]).css({"opacity":0,"right":-barrierWidth});
				$barrierBottom.eq(currentBarrier[i]).css({"opacity":0,"right":-barrierWidth});
		}
		
		
}
function getHeight(){ 
			tempBlank = blankHeight[Math.round(Math.random()*10)];
			remainHeight = mainHeight - tempBlank;
			return remainHeight*Math.random();
		}