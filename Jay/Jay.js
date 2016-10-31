
var initPics = (function(){ 
	var pics = ["images/Jay.jpg","images/Fantas.jpg","images/TheEightD.jpg","images/YeHuiMei.jpg","images/QiLiXiang.jpg",
				"images/NovChopin.jpg","images/StillFantas.jpg","images/OnTheRun.jpg","images/MoJieZuo.jpg","images/KuaShiDai.jpg"];
	var $leftPics = $(".wrapper-left-pic");
	var $rightPics = $(".wrapper-right-pic");

	for(var i=0,j=0,k=0,length=pics.length;i<length;i++){ 
		if(i%2===0){ 
			$leftPics.eq(j).css("background-image","url("+pics[i]+")");
			j++;
		}else{ 
			$rightPics.eq(k).css("background-image","url("+pics[i]+")");
			k++;
		}
	}
})();

var initClicks = (function(){
	var $wrapper = $(".wrapper");
	var $wrapperLeft = $(".wrapper-left");
	var $wrapperRight = $(".wrapper-right");
	var $wrapperDesc = $(".wrapper-desc");
	var $albumName = $(".wrapper-desc .wrapper-desc-albumname");
	var $albumDate = $(".wrapper-desc .wrapper-desc-albumdate");
	var $descUl = $(".wrapper-desc .wrapper-desc-ul");
	var $leftPics = $(".wrapper-left-pic");
	var $rightPics = $(".wrapper-right-pic");
	var $centerWords = $(".center-words");
	var $closeBtn = $(".close-btn");
	var $btnLine = $(".close-btn .btn-line");
	var curIndex = 0;
	var count = $leftPics.length-1;
	var wrapperClick = function(){ 
		return function(){ 
			$leftPics.eq(curIndex).removeClass("wrapper-left-cur");
			$rightPics.eq(curIndex).removeClass("wrapper-right-cur");
			if(curIndex===count){ 
				curIndex = 0;
			}else{ 
				curIndex++;
			}
			$leftPics.eq(curIndex).addClass("wrapper-left-cur");
			$rightPics.eq(curIndex).addClass("wrapper-right-cur");
		}
	}
	$wrapper.on("click",wrapperClick());
	var timer = "";
	var $introduce = $(".wrapper .introduce");
	var allSongs = [];
	var getSongs = function(){ 
						$.ajax({ 
							type:"GET",
							url:"leftAlbum.json",
							dataType:"json",
							success:function(data){
								for(var i=0,length=data.length;i<length;i++){ 
									allSongs = allSongs.concat(data[i]["songs"]);
								}

								$.ajax({ 
									type:"GET",
									url:"rightAlbum.json",
									dataType:"json",
									success:function(data){
										for(var i=0,length=data.length;i<length;i++){ 
											allSongs = allSongs.concat(data[i]["songs"]);
										}
										var ranNumber = Math.ceil(Math.random()*allSongs.length);
										$introduce.html(allSongs[ranNumber]["songName"]+"<br/>"+allSongs[ranNumber]["songLyc"]);
										timer = setInterval(function(){ 
															var ranNumber = Math.ceil(Math.random()*allSongs.length);
															$introduce.html(allSongs[ranNumber]["songName"]+"<br/>"+allSongs[ranNumber]["songLyc"]);
									},5000);
									},
									error:function(){ 
										console.log("error")
									}	
								})

							},
							error:function(){ 
								console.log("error")
							}	
						})
	}
	
	$centerWords.on("click",function(event){ 
								event.stopPropagation(); 
								$wrapperLeft.addClass("wrapper-left-out");
								$wrapperRight.addClass("wrapper-right-out");
								$centerWords.eq(0).addClass("center-top-words-out");
								$centerWords.eq(1).addClass("center-bottom-words-out");
								$wrapper.addClass("wrapper-out");
								$closeBtn.addClass("close-btn-show");
								$btnLine.eq(0).addClass("btn-line-top");
								$btnLine.eq(1).addClass("btn-line-bottom");
								$introduce.addClass("introduce-show");
								if(allSongs.length>0){ 
									timer = setInterval(function(){ 
															var ranNumber = Math.ceil(Math.random()*allSongs.length);
															$introduce.html(allSongs[ranNumber]["songName"]+"<br/>"+allSongs[ranNumber]["songLyc"]);
									},5000);
								}else{ 
									getSongs();
								}
							}
	);
	$closeBtn.on("click",function(){ 
								$wrapperLeft.removeClass("wrapper-left-out");
								$wrapperRight.removeClass("wrapper-right-out");
								$centerWords.eq(0).removeClass("center-top-words-out");
								$centerWords.eq(1).removeClass("center-bottom-words-out");
								$wrapper.removeClass("wrapper-out");
								$closeBtn.removeClass("close-btn-show");
								$btnLine.eq(0).removeClass("btn-line-top");
								$btnLine.eq(1).removeClass("btn-line-bottom");
								$introduce.removeClass("introduce-show");
								clearInterval(timer);
							}
	);
	var leftPicsClick = (function(){ 
		$leftPics.eq(0).on("click",function(event){ 
										event.stopPropagation();
										$wrapperLeft.toggleClass("wrapper-left-click")
										$leftPics.eq(0).toggleClass("wrapper-left-pic-click");
										$wrapperRight.toggleClass("wrapper-right-out");
										$centerWords.toggleClass("center-words-dis");
										getAlbum("leftAlbum.json",0);
										$wrapperDesc.toggleClass("wrapper-desc-right");
									} 
		);
		$leftPics.eq(1).on("click",function(event){ 
										event.stopPropagation();
										$wrapperLeft.toggleClass("wrapper-left-click")
										$leftPics.eq(1).toggleClass("wrapper-left-pic-click");
										$wrapperRight.toggleClass("wrapper-right-out");
										$centerWords.toggleClass("center-words-dis");
										getAlbum("leftAlbum.json",1);
										$wrapperDesc.toggleClass("wrapper-desc-right");
									} 
		);
		$leftPics.eq(2).on("click",function(event){ 
										event.stopPropagation();
										$wrapperLeft.toggleClass("wrapper-left-click")
										$leftPics.eq(2).toggleClass("wrapper-left-pic-click");
										$wrapperRight.toggleClass("wrapper-right-out");
										$centerWords.toggleClass("center-words-dis");
										getAlbum("leftAlbum.json",2);
										$wrapperDesc.toggleClass("wrapper-desc-right");
									} 
		);
		$leftPics.eq(3).on("click",function(event){ 
										event.stopPropagation();
										$wrapperLeft.toggleClass("wrapper-left-click")
										$leftPics.eq(3).toggleClass("wrapper-left-pic-click");
										$wrapperRight.toggleClass("wrapper-right-out");
										$centerWords.toggleClass("center-words-dis");
										getAlbum("leftAlbum.json",3);
										$wrapperDesc.toggleClass("wrapper-desc-right");
									} 
		);
		$leftPics.eq(4).on("click",function(event){ 
										event.stopPropagation();
										$wrapperLeft.toggleClass("wrapper-left-click")
										$leftPics.eq(4).toggleClass("wrapper-left-pic-click");
										$wrapperRight.toggleClass("wrapper-right-out");
										$centerWords.toggleClass("center-words-dis");
										getAlbum("leftAlbum.json",4);
										$wrapperDesc.toggleClass("wrapper-desc-right");
									} 
		);
	})();
	var rightPicsClick = (function(){ 
		$rightPics.eq(0).on("click",function(event){ 
										event.stopPropagation();
										$wrapperRight.toggleClass("wrapper-right-click")
										$rightPics.eq(0).toggleClass("wrapper-right-pic-click");
										$wrapperLeft.toggleClass("wrapper-left-out");
										$centerWords.toggleClass("center-words-dis");
										getAlbum("rightAlbum.json",0);
										$wrapperDesc.toggleClass("wrapper-desc-left");
									} 
		);
		$rightPics.eq(1).on("click",function(event){ 
										event.stopPropagation();
										$wrapperRight.toggleClass("wrapper-right-click")
										$rightPics.eq(1).toggleClass("wrapper-right-pic-click");
										$wrapperLeft.toggleClass("wrapper-left-out");
										$centerWords.toggleClass("center-words-dis");
										getAlbum("rightAlbum.json",1);
										$wrapperDesc.toggleClass("wrapper-desc-left");
									} 
		);
		$rightPics.eq(2).on("click",function(event){ 
										event.stopPropagation();
										$wrapperRight.toggleClass("wrapper-right-click")
										$rightPics.eq(2).toggleClass("wrapper-right-pic-click");
										$wrapperLeft.toggleClass("wrapper-left-out");
										$centerWords.toggleClass("center-words-dis");
										getAlbum("rightAlbum.json",2);
										$wrapperDesc.toggleClass("wrapper-desc-left");
									} 
		);
		$rightPics.eq(3).on("click",function(event){ 
										event.stopPropagation();
										$wrapperRight.toggleClass("wrapper-right-click")
										$rightPics.eq(3).toggleClass("wrapper-right-pic-click");
										$wrapperLeft.toggleClass("wrapper-left-out");
										$centerWords.toggleClass("center-words-dis");
										getAlbum("rightAlbum.json",3);
										$wrapperDesc.toggleClass("wrapper-desc-left");
									} 
		);
		$rightPics.eq(4).on("click",function(event){ 
										event.stopPropagation();
										$wrapperRight.toggleClass("wrapper-right-click")
										$rightPics.eq(4).toggleClass("wrapper-right-pic-click");
										$wrapperLeft.toggleClass("wrapper-left-out");
										$centerWords.toggleClass("center-words-dis");
										getAlbum("rightAlbum.json",4);
										$wrapperDesc.toggleClass("wrapper-desc-left");
									} 
		);
	})();
	
	$wrapperDesc.on("click",function(event){event.stopPropagation()});
	function getAlbum(url,index){
		$.ajax({ 
			type:"GET",
			url:url,
			dataType:"json",
			success:function(data){
				initDesc(data[index]);
			},
			error:function(){ 
				console.log("error")
			}	
		})
	}
	function initDesc(album){
		$albumName.html(album.albumName);
		$albumDate.html(album.albumDate); 
		$descUl.find("li").remove();
		for(var i=0,length=album.songs.length;i<length;i++){ 
			$descUl.append("<li class=\"song\">"+"<span class=\"songname\">"+album["songs"][i]["songName"]+"</span>"+"<span class=\"songlyc\">"+album["songs"][i]["songLyc"]+"</span>"+"</li>");
		}
	}
})();