

function Player(songList,$audio,$currentTime,$totalTime,$controlBarInner,$controlBarOuter,$btnPlay){
	this.songList = songList;
	this.$audio = $audio;
	this.$currentTime = $currentTime;
	this.$totalTime = $totalTime;
	this.$controlBarInner = $controlBarInner;
	this.$controlBarOuter = $controlBarOuter;
	this.$btnPlay = $btnPlay;
	var totalTime = 0;
	var currentTime = 0;
	var tempTotalMin = "";
	var tempTotalSec = "";
	var tempCurrentMin = "";
	var tempCurrentSec = "";
	this.play = function(index){
		clearInterval(this.$audio.timer1);
		clearInterval(this.$audio.timer2);
		
		totalTime = 0;
		currentTime = 0;
		this.$audio.attr("src",this.songList[index]);		
		this.$audio[0].load();
		this.$audio.timer1 = setInterval(function(){ 
				if(!totalTime>0||isNaN(totalTime)){
					totalTime = this.$audio[0].duration;
					if(totalTime>0){ 
						if(Math.floor(totalTime/60)<=9){ 
							tempTotalMin = "0"+Math.floor(totalTime/60);
						}else{ 
							tempTotalMin = Math.floor(totalTime/60);
						}
						if(Math.floor(totalTime%60)<=9){ 
							tempTotalSec = "0"+Math.floor(totalTime%60);
						}else{ 
							tempTotalSec = Math.floor(totalTime%60);
						}
						this.$totalTime.text(" "+tempTotalMin+" : "+tempTotalSec);
					}
					
				}else{ 
					clearInterval(this.$audio.timer1);
				}
				},1000);	
		this.$audio[0].play();
		currentTime = this.$audio[0].currentTime;
		this.$audio.timer2 = setInterval(function(){
				if(isNaN(totalTime)){ 
					return;				}
				else if(currentTime<=totalTime){
					if(Math.floor(currentTime/60)<=9){ 
						tempCurrentMin = "0"+Math.floor(currentTime/60);
					}else{ 
						tempCurrentMin = Math.floor(currentTime/60);
					}
					if(Math.floor(currentTime%60)<=9){ 
						tempCurrentSec = "0"+Math.floor(currentTime%60);
					}else{ 
						tempCurrentSec = Math.floor(currentTime%60);
					}

					this.$currentTime.text(tempCurrentMin+" : "+tempCurrentSec+" ");
					this.$controlBarOuter.css({"width":(parseFloat(this.$controlBarInner.css("width"))*currentTime/totalTime)});
					currentTime++;
				}else{ 
					this.$controlBarOuter.css({"width":parseFloat(this.$controlBarInner.css("width"))});
					this.$currentTime.text(" "+tempTotalMin+" : "+tempTotalSec);
					clearInterval(this.$audio.timer2);
				}
		},1000);
		
		
		
	}
	this.pause = function(){ 
		this.$audio[0].pause();
		clearInterval(this.$audio.timer1);
		clearInterval(this.$audio.timer2);
	}

	this.resume = function(){ 
		if(this.$audio[0].ended){ 
			totalTime = 0;
			currentTime = 0;
		}
		this.$audio[0].play();
		this.$audio.timer1 = setInterval(function(){ 
				if(!totalTime>0||isNaN(totalTime)){
					totalTime = this.$audio[0].duration;
					if(totalTime>0){ 
						if(Math.floor(totalTime/60)<=9){ 
							tempTotalMin = "0"+Math.floor(totalTime/60);
						}else{ 
							tempTotalMin = Math.floor(totalTime/60);
						}
						if(Math.floor(totalTime%60)<=9){ 
							tempTotalSec = "0"+Math.floor(totalTime%60);
						}else{ 
							tempTotalSec = Math.floor(totalTime%60);
						}
						this.$totalTime.text(" "+tempTotalMin+" : "+tempTotalSec);
					}
					
				}else{ 
					clearInterval(this.$audio.timer1);
				}
				},1000);

		this.$audio.timer2 = setInterval(function(){
				if(isNaN(totalTime)){ 
					return;				}
				else if(currentTime<=totalTime){
					if(Math.floor(currentTime/60)<=9){ 
						tempCurrentMin = "0"+Math.floor(currentTime/60);
					}else{ 
						tempCurrentMin = Math.floor(currentTime/60);
					}
					if(Math.floor(currentTime%60)<=9){ 
						tempCurrentSec = "0"+Math.floor(currentTime%60);
					}else{ 
						tempCurrentSec = Math.floor(currentTime%60);
					}

					this.$currentTime.text(tempCurrentMin+" : "+tempCurrentSec+" ");
					this.$controlBarOuter.css({"width":(parseFloat(this.$controlBarInner.css("width"))*currentTime/totalTime)});
					currentTime++;
				}else{ 
					this.$controlBarOuter.css({"width":parseFloat(this.$controlBarInner.css("width"))});
					this.$currentTime.text(" "+tempTotalMin+" : "+tempTotalSec);
					clearInterval(this.$audio.timer2);
				}
				},1000);	
	}

	this.isPlaying = function(){ 
		return !this.$audio[0].paused;
	}

	this.timeLeap = function(timePercent){ 
		clearInterval(this.$audio.timer2);
		currentTime = totalTime * timePercent;
		//this.$audio[0].fastSeek(currentTime);
		this.$audio[0].currentTime = currentTime;
		this.$audio.timer2 = setInterval(function(){ 
				if(currentTime<=totalTime){
					if(Math.floor(currentTime/60)<=9){ 
						tempCurrentMin = "0"+Math.floor(currentTime/60);
					}else{ 
						tempCurrentMin = Math.floor(currentTime/60);
					}
					if(Math.floor(currentTime%60)<=9){ 
						tempCurrentSec = "0"+Math.floor(currentTime%60);
					}else{ 
						tempCurrentSec = Math.floor(currentTime%60);
					}

					this.$currentTime.text(tempCurrentMin+" : "+tempCurrentSec+" ");
					this.$controlBarOuter.css({"width":(parseFloat(this.$controlBarInner.css("width"))*currentTime/totalTime)});
					currentTime++;
				}else{ 
					this.$controlBarOuter.css({"width":parseFloat(this.$controlBarInner.css("width"))});
					this.$currentTime.text(" "+tempTotalMin+" : "+tempTotalSec);
					clearInterval(this.$audio.timer2);
				}
		},1000);
	}


}