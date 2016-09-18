
var curDate = new Date();
var postMonth = "";
var postCount = "";

var $divHeaderMonth = $("#headerMonth");
var $divCoverLayer = $("#coverLayer");
var $body = $("body");
var $divPopUpClose = $("#popUpClose");

var $divPopUp = $(".popUp");
var $stage = $("#stage");
var $divPopUpHp = $("#popUpHp");

var $divPopUpEssay = $("#popUpEssay");
var $essayTitle = $("#popUpEssay .title");
var $essayGuidewords = $("#popUpEssay .guidewords");
var $essayAuthorImg = $("#popUpEssay .authorImg");
var $essayAuthorName = $("#popUpEssay .authorName");
var $essayAuthorDesc = $("#popUpEssay .authorDesc");
var $essayContent = $("#popUpEssay .content");

var $divPopUpQuestion = $("#popUpQuestion");
var $questionTitle = $("#popUpQuestion .title");
var $questionGuidewords = $("#popUpQuestion .guidewords");
var $questionContent = $("#popUpQuestion .content");

var $divPopUpMusic = $("#popUpMusic");
var $musicAlbumImg = $("#popUpMusic .album .albumImg");
var $musicAlbumName = $("#popUpMusic .album .albumName");
var $musicSingerImg = $("#popUpMusic .album .singerImg");
var $musicSingerName = $("#popUpMusic .album .singerName");
var $musicSingerDesc = $("#popUpMusic .album .singerDesc");
var $musicStoryTitle = $("#popUpMusic .story .title");
var $musicStoryAuthorImg = $("#popUpMusic .story .authorImg");
var $musicStoryAuthorName = $("#popUpMusic .story .authorName");
var $musicStoryContent = $("#popUpMusic .story .musicContent");




initHp();
initSlideMenu();
initPopUpMenu();

function initHp(){

	var strUrl = "";

	if(postMonth==""){ 		
		strUrl = "http://v3.wufazhuce.com:8000/api/hp/bymonth/"+curDate.getFullYear()+"-"+(curDate.getMonth()+1);
		postMonth = curDate.getMonth()+1;
		initHeaderMonth(postMonth);
	}else{ 
		strUrl = "http://v3.wufazhuce.com:8000/api/hp/bymonth/2016-"+postMonth;
	}
	var $divItems = $(".container .item");
	var $divAuthor = $(".container .item .author");
	var $divInner = $(".container .item .inner");
	
	var divCount = 0;
	var itemMouseEnter = function(index){ 
		return function(){ 
			$divInner.eq(index).css({"display":"block"});
		}
	}
	var itemMouseLeave = function(index){ 
		return function(){ 
			$divInner.eq(index).css({"display":"none"});
		}
	}
	var itemClick = function(index){ 
		return function(){ 
			postCount = index;
			$divCoverLayer.css({"display":"block"});
			$divPopUp.css({"display":"block"});
			$body.css({"overflow":"hidden"});
			initPopUp();
		}
	}
	$.ajax({ 
		type : "GET",
		url : strUrl,
		dataType : "json",
		success : function(data){ 
			$.each(data,function(key,elem){ 
				if(key=="data"){
					for(;divCount<elem.length;divCount++){ 
						$divItems.eq(divCount)
							.css({"background-image":("url("+elem[divCount]["hp_img_url"]+")"),"display":"inline-block"})
							.on({"mouseenter":itemMouseEnter(divCount),"mouseleave":itemMouseLeave(divCount),"click":itemClick(divCount)});

						$divAuthor.eq(divCount).html(elem[divCount]["hp_author"]);
						$divInner.eq(divCount).html(elem[divCount]["hp_content"]);
					} 								
				}
			});
			for(;divCount<$divItems.length;divCount++){ 
					$divItems.eq(divCount).css({"display":"none"});
				
			}

		}
	});

	
}			
		
function initSlideMenu(){ 
	var $slideMenu = $(".slide-menu-left .pages .page");
	var maxMonth = curDate.getMonth()+1;
	var slideMenuClick = function(index){ 
		return function(){ 
			postMonth = index;
			initHeaderMonth(postMonth);
			initHp();
		}
	}

	for(var i=0;i<maxMonth;i++){ 
		$slideMenu.eq(i).text(maxMonth-i).on({"click":slideMenuClick(maxMonth-i)});
	}	
}

function initPopUp(){ 
	$stage.css({"transform":"translateX(0px)"});
	$divPopUpHp.scrollTop(0);
	$divPopUpEssay.scrollTop(0);
	$divPopUpQuestion.scrollTop(0);
	$divPopUpMusic.scrollTop(0);
	initPopUpHp();
	initPopUpEssay();
	initPopUpQuestion();
	initPopUpMusic();
}
function initPopUpMenu(){ 

	var $lis = $(".popUp .popUpMenu li");
	
	var popUpMenuClick = function(index){ 
		return function(){ 
			$stage.css({"transform":("translateX("+(index*-800)+"px)")});
		}
	}
	for(var i=0;i<$lis.length;i++){
		$lis.eq(i).on({"click":popUpMenuClick(i)}); 
	}

	$divPopUpClose.on({"click":function(){ 
								$divCoverLayer.css({"display":"none"});
								$body.css({"overflow":"auto"});
								$divPopUp.css({"display":"none"});
								}});
}

function initPopUpHp(){

	$.ajax({ 
		type : "GET",
		url : "http://v3.wufazhuce.com:8000/api/hp/bymonth/2016-"+postMonth,
		dataType : "json",
		success : function(data){ 
			$.each(data,function(key,elem){ 
				if(key=="data"){ 
					$divPopUpHp.find("div").eq(0).css({"background-image":("url("+elem[postCount]["hp_img_url"])});
					$divPopUpHp.find("div").eq(1).text(elem[postCount]["hp_content"]);
				}
			});
		}
	});
}

function initPopUpEssay(){ 
	var contentId= "";
	$.ajax({ 
		type : "GET",
		url : "http://v3.wufazhuce.com:8000/api/essay/bymonth/2016-"+postMonth,
		dataType : "json",
		success : function(data){ 
			$.each(data,function(key,elem){ 
				if(key=="data"){ 
					contentId = elem[postCount]["content_id"];
				}
			});

			$.ajax({ 
				type : "GET",
				url : "http://v3.wufazhuce.com:8000/api/essay/"+contentId,
				dataType : "json",
				success : function(data){ 
					$.each(data,function(key,elem){ 
						if(key=="data"){ 
							$essayTitle.text(elem["hp_title"]);
							$essayGuidewords.text(elem["guide_word"]);
							$essayAuthorImg.css({"background-image":("url("+elem["author"][0]["web_url"]+")")});
							$essayAuthorName.text(elem["author"][0]["user_name"]);
							$essayAuthorDesc.text(elem["author"][0]["desc"]);
							$essayContent.html(elem["hp_content"]);
						}
					});
				}
			});
		}
	});
}

function initPopUpQuestion(){ 
	var questionId= "";
	$.ajax({ 
		type : "GET",
		url : "http://v3.wufazhuce.com:8000/api/question/bymonth/2016-"+postMonth,
		dataType : "json",
		success : function(data){ 
			$.each(data,function(key,elem){ 
				if(key=="data"){ 
					questionId = elem[postCount]["question_id"];
				}
			});

			$.ajax({ 
				type : "GET",
				url : "http://v3.wufazhuce.com:8000/api/question/"+questionId,
				dataType : "json",
				success : function(data){ 
					$.each(data,function(key,elem){ 
						if(key=="data"){ 
							$questionTitle.text(elem["question_title"]);
							$questionGuidewords.text(elem["guide_word"]);
							$questionContent.html(elem["answer_content"]);
						}
					});
				}
			});
		}
	});
}

function initPopUpMusic(){ 
	var musicId = "";
	$.ajax({ 
		type : "GET",
		url : "http://v3.wufazhuce.com:8000/api/music/bymonth/2016-"+postMonth,
		dataType : "json",
		success : function(data){ 
			$.each(data,function(key,elem){ 
				if(key=="data"){ 
					musicId = elem[postCount]["id"];
				}
			});

			$.ajax({ 
				type : "GET",
				url : "http://v3.wufazhuce.com:8000/api/music/detail/"+musicId,
				dataType : "json",
				success : function(data){ 
					$.each(data,function(key,elem){ 
						if(key=="data"){ 
							$musicAlbumImg.css({"background-image":"url("+elem["cover"]+")"});
							$musicAlbumName.text(elem["title"]);
							$musicSingerImg.css({"background-image":"url("+elem["author"]["web_url"]+")"});
							$musicSingerName.text(elem["author"]["user_name"]);
							$musicSingerDesc.text(elem["author"]["desc"]);
							$musicStoryTitle.text(elem["story_title"]);
							$musicStoryAuthorImg.css({"background-image":"url("+elem["story_author"]["web_url"]+")"});
							$musicStoryAuthorName.text(elem["story_author"]["user_name"]);
							$musicStoryContent.html(elem["story"]);

						}
					});
				}
			});
		}
	});
}

function initHeaderMonth(month){ 
	switch(month){ 
		case 1 :
			$divHeaderMonth.text("January").css({"color":"#AD1457"});
		break;
		case 2 :
			$divHeaderMonth.text("February").css({"color":"#AB47BC"});
		break;
		case 3 :
			$divHeaderMonth.text("March").css({"color":"#81D4FA"});
		break;
		case 4 :
			$divHeaderMonth.text("April").css({"color":"#5C6BC0"});
		break;
		case 5 :
			$divHeaderMonth.text("May").css({"color":"#26A69A"});
		break;
		case 6 :
			$divHeaderMonth.text("June").css({"color":"#FF4500"});
		break;
		case 7 :
			$divHeaderMonth.text("July").css({"color":"#d35400"});
		break;
		case 8 :
			$divHeaderMonth.text("August").css({"color":"#4CAF50"});
		break;
		case 9 :
			$divHeaderMonth.text("September").css({"color":"#1B5E20"});
		break;
		case 10 :
			$divHeaderMonth.text("October").css({"color":"#1B5E20"});
		break;
		case 11 :
			$divHeaderMonth.text("November").css({"color":"#E91E63"});
		break;
		case 12 :
			$divHeaderMonth.text("December").css({"color":"#DEB887"});
		break;
	}
} 