//carousel
var $carStage = $(".carousel .carousel-screen .stage");
var $carScreens = $(".carousel .carousel-screen .stage .screen");
var $carIndex = $(".carousel .carousel-screen .index");
var $carDesc = $(".carousel .carousel-screen .desc");
var $carItem = $(".carousel .carousel-item");
var carTimer = "";
var carDesc = ["紧张刺激的地球OL","来一场狂野派对biubiubiu","和地板来个亲密接触吧","iOS版本正式上线","论黑人的RAP天赋②"];
var carItem = [{"title":"【不是闷】用中性笔写出英文书法 - 手帐er必会！","up":"up主:不是闷","totalPlayed":"播放:31368","image":"url(images/carousel/item00.jpg)"},
					{"title":"【日语学习】用动漫学新标日单词—第二课","up":"up主:明王道","totalPlayed":"播放:97812","image":"url(images/carousel/item01.jpg)"},
					{"title":"十一部即将上映的优质国产动画","up":"up主:z歪歪丶","totalPlayed":"播放:220002","image":"url(images/carousel/item02.jpg)"},
					{"title":"【kyokyo】Girls","up":"up主:Kyokyo","totalPlayed":"播放:83332","image":"url(images/carousel/item03.jpg)"},
					{"title":"【LOL】我的LOL不可能这么忧伤","up":"up主:溅人宋","totalPlayed":"播放:138416","image":"url(images/carousel/item04.jpg)"},
					{"title":"【YUKIri】前前前世【《你的名字》主题曲】","up":"up主:YUKIri","totalPlayed":"播放:31822","image":"url(images/carousel/item05.jpg)"}];
initCarousel();
function initCarousel(){
		var curIndex = 1;
		$carDesc.text(carDesc[0]);
		var indexClick = function(index){ 
			return function(){ 
				$carStage.css("transform","translate("+index*-100+"%)");
				$carDesc.text(carDesc[index]);
				$carIndex.eq(index).addClass("selected").siblings().removeClass("selected");
				curIndex = index;
			}
		}

		for(var i=0;i<$carScreens.length;i++){ 
			$carScreens.eq(i).css("background-image","url(images/carousel/"+i+".jpg)");
			$carIndex.eq(i).on("click",indexClick(i));
		}
		
		var carInterval = function(){ 
			switch(curIndex){ 
				case 0:
					$carIndex.eq(0).trigger("click");
					curIndex++;
					break;
				case 1:
					$carIndex.eq(1).trigger("click");
					curIndex++;
					break;
				case 2:
					$carIndex.eq(2).trigger("click");
					curIndex++;
					break;
				case 3:
					$carIndex.eq(3).trigger("click");
					curIndex++;
					break;
				case 4:
					$carIndex.eq(4).trigger("click");
					curIndex = 0;
					break;
				default:
					return false;
			}
		}
		carTimer = setInterval(carInterval,5000);

		for(var i=0;i<$carItem.length;i++){ 
			$carItem.eq(i).css("background-image",carItem[i]["image"])
							.attr("title",carItem[i]["title"])
							.find(".title").text(carItem[i]["title"])
							.parent().find(".up").text(carItem[i]["up"])
							.parent().find(".totalPlayed").text(carItem[i]["totalPlayed"]);
		}
		
}

initTitleLine();
function initTitleLine(){ 
		var $title = $(".category .content .title-line .title");
		var $trends = $(".category .content .title-line .trends");
		var $news = $(".category .content .title-line .news");
		var appendStr = "<div class=\"triangle-line\"><div class=\"triangle\"></div></div>";

		var trendsClick = function(index){ 
				return function(){ 
					$trends.eq(index).addClass("selected").find(".triangle-line").show();
					$news.eq(index).removeClass("selected").find(".triangle-line").hide();
				}
		}
		var newsClick = function(index){ 
				return function(){ 
					$news.eq(index).addClass("selected").find(".triangle-line").show();
					$trends.eq(index).removeClass("selected").find(".triangle-line").hide();
				}
		}
		for(var i=0;i<$trends.length;i++){ 
			$trends.eq(i).append(appendStr).on({"click":trendsClick(i)}).trigger("click");
			$news.eq(i).append(appendStr).on({"click":newsClick(i)});
		}

		var $all = $(".category .rank .title-line .all");
		var $original = $(".category .rank .title-line .original");
		var appendStrRank = "<div class=\"triangle-line-rank\"><div class=\"triangle\"></div></div>";
		var allEnter = function(index){ 
				return function(){ 
					$all.eq(index).addClass("selected").find(".triangle-line-rank").show();
					$original.eq(index).removeClass("selected").find(".triangle-line-rank").hide();
				}
		}
		var originalEnter = function(index){ 
				return function(){ 
					$original.eq(index).addClass("selected").find(".triangle-line-rank").show();
					$all.eq(index).removeClass("selected").find(".triangle-line-rank").hide();
				}
		}
		for(var i=0;i<$all.length;i++){ 
			$all.eq(i).append(appendStrRank).on("mouseenter",allEnter(i)).trigger("mouseenter");
			$original.eq(i).append(appendStrRank).on("mouseenter",originalEnter(i));
		}
		
}