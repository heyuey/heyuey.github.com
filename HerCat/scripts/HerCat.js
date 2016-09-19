//var albumList = ["http://v85.yunpan.cn/Download.outputAudio/130566536/dae10b320194d075949a3674f8d0190b37915cef/85_85.711838333a69115759fcb9aa9ced5a45/1.0.1/web/14740295056676/0/fec9d8838d4a0447d6b58ac32f76f177/%E5%A4%A9%E9%96%80-MainThe.mp3",
//				"http://v85.yunpan.cn/Download.outputAudio/130566536/5c37a78727408da6c87289e7dd7e0012e3f3c841/85_85.7e9a1b8a313622bd1027c163db131563/1.0.1/web/14740295389965/0/1b15c6c692721e0d9f9047acb8a9278e/%E5%A4%A9%E9%96%80-Title(u.mp3",
//				"http://v85.yunpan.cn/Download.outputAudio/130566536/91f360b5a12a01dadbd75467c51e50c871cc621d/85_85.737f944c41e254c5637b935ea2690197/1.0.1/web/14740295668340/0/1f61961d846001957aa302ee1958e0bc/%E5%A4%A9%E9%96%80-Crying.mp3",
//				"http://v85.yunpan.cn/Download.outputAudio/130566536/9d9c21bb8ffcb94612001a796622e223872a6660/85_85.152aef2126d573804456c92fdfc5a033/1.0.1/web/14740295919126/0/179b2b7f93cc49fde852ab0dc9a9b49b/%E5%A4%A9%E9%96%80-EndingT.mp3",
//				"http://v85.yunpan.cn/Download.outputAudio/130566536/f86a7ca85bbb4786106c6b0de44c3051620b35de/85_85.4d99f80a8dd1587b534ca638cf271661/1.0.1/web/14740296112482/0/cedc88e9a885ec3a56997fe9e822c541/%E5%A4%A9%E9%96%80-MainThe.mp3",
//				"http://v85.yunpan.cn/Download.outputAudio/130566536/9547056887fb11a414cad7e938e57eb70e5f524d/85_85.40aa4d15dcaed502e235f7507664b9b6/1.0.1/web/14740296289135/0/8c35c9d796904ada37c2dc65f7c68694/%E5%A4%A9%E9%96%80-Thevoic.mp3"];

var albumList = ["Music/MainTheme.mp3",
				"Music/Title (unused).mp3",
				"Music/Crying.mp3",
				"Music/EndingTheme.mp3",
				"Music/MainTheme ～Memory of Prize version～.mp3",
				"Music/The voices of distant star ～PREVIEW～.mp3"];

var $audio = $("#audioPlayer");
var $currentTime = $("#currentTime");
var $totalTime = $("#totalTime");
var $controlBarInner = $("#controlBarInner");
var $controlBarOuter = $("#controlBarOuter");
var $btnPlay = $("#btnPlay");
var audioPlayer = new Player(albumList,$audio,$currentTime,$totalTime,$controlBarInner,$controlBarOuter,$btnPlay);

var lists = $("#albumList .list");
var $quotes = $(".abstractQuote");

initAlbum();
initQuotes();

function initAlbum(){ 
	initAlbumList();
	initBtnPlay();
	initControlBar();
}
function initAlbumList(){ 
	var listClick = function(index){ 
		return function(){ 
			lists.eq(index).css({"color":"black"}).parent().siblings().find("a").css({"color":"#616161"});
			audioPlayer.play(index);
			$btnPlay.text("pause");
		}
	};
	for(var i=0;i<lists.length;i++){ 
		lists.eq(i).on({"click":listClick(i)});
	}
}
function initBtnPlay(){ 
	var btnPlayClick = function(){ 
		return function(){ 
			if(audioPlayer.isPlaying()){ 
				$btnPlay.text("resume");
				audioPlayer.pause();
			}else{ 
				$btnPlay.text("pause");
				audioPlayer.resume();
			}
		}
	}

	$btnPlay.on({"click":btnPlayClick()});
}
function initControlBar(){ 

	$controlBarInner.on({"click":function(event){
								$controlBarOuter.css({"width":(event.pageX-$controlBarInner.offset().left)});
								audioPlayer.timeLeap(parseFloat($controlBarOuter.css("width"))/parseFloat($controlBarInner.css("width")));
								
						}});

}

function initQuotes(){ 
	$quotes.eq(0).text("我们无法记住所有往事 能记住的 只有真正重要的回忆");
	$quotes.eq(1).text("我是她的猫");
	$quotes.eq(2).text("早晨的阳光透过缝隙照进来 我不由地眯起眼睛 她出门去了 听着她下楼渐渐远去的脚步声 屋子里依然能感受到她香水的味道");
	$quotes.eq(3).text("她总是如同往常一般 美丽且温柔地 展现出我最喜欢的微笑 想要爱上这个残酷的世界");
	$quotes.eq(4).text("我无法理解她的话语 但能理解她的想法 我活在我的时间里 她活在她的时间里 所以我们的时间互相交错的瞬间 对我而言比任何事物都宝贵");
	$quotes.eq(5).text("过于认真的人总是无法将责任推给别人 所以只能自己埋怨自己 让自己很痛苦");
	$quotes.eq(6).text("她的疼痛与苦楚 让我的心狠狠揪紧 我知道 她比任何人都要努力 我想帮助她  但我却已经够不到她了");
	$quotes.eq(7).text("远处的事物看起来渺小又模糊 近处的东西却非常清晰 回忆也是同样 遥远的曾经非常模糊 方才发生的事能记得一清二楚");
	$quotes.eq(8).text("雪吞没了所有的声响 但只有她乘坐的电车的声音 依然能够清晰地传到我的耳朵里 那是让整个世界转动的心跳的声音 世间万物皆在不停地变幻 我不知道能为她做些什么 我只能守护在她的身旁 过我自己的生活");
}