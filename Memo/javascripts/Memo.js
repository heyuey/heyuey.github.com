
var today = new Date(); 
var thisYear = today.getFullYear();
var thisMonth = today.getMonth()+1;
var thisDate = today.getDate();



initCal();
initMemoInput();
initMemoAll();
function initCal(){ 
	var $year = $(".wrapper .wrapper-cal .cal .line-ym .year");
	var $yearMin = $(".wrapper .wrapper-cal .cal .line-ym .year-minus");
	var $yearPlu = $(".wrapper .wrapper-cal .cal .line-ym .year-plus");
	var $month = $(".wrapper .wrapper-cal .cal .line-ym .month");
	var $monthMin = $(".wrapper .wrapper-cal .cal .line-ym .month-minus");
	var $monthPlu = $(".wrapper .wrapper-cal .cal .line-ym .month-plus");
	var $calDate = $(".wrapper .wrapper-cal .cal .line-date");
	var $curYear = $(".header .fulldate .year");
	var $curMonth = $(".header .fulldate .month");
	var $curDate = $(".header .fulldate .date");
	var appendBef = "<div class=\"date\">";
	var appendAft = "</div>";
	initToday();
	
	$yearMin.on("click",function(){$year.text((parseInt($year.text())-1));initDate();setTodayColor();});
	$yearPlu.on("click",function(){$year.text((parseInt($year.text())+1));initDate();setTodayColor();});
	$monthMin.on("click",function(){ 
							var month = parseInt($month.text()) - 1;
							if(month==0){month = 12;}
							if(month>0&&month<10){month = "0" + month;}
							$month.text(month);
							initDate();
							setTodayColor();
						});
	$monthPlu.on("click",function(){ 
							var month = parseInt($month.text()) + 1;
							if(month==13){month = 1;}
							if(month>0&&month<10){month = "0" + month;}
							$month.text(month);
							initDate();
							setTodayColor();
						});
	
	function initToday(){
		$year.text(thisYear);
		$month.text(thisMonth);
		$curYear.text(thisYear);
		$curMonth.text(thisMonth);
		$curDate.text(thisDate);
		initDate();
		initMemo();
		$calDate.find(".date").eq(thisDate-1).addClass("today");
	}
	function setTodayColor(){
		if($year.text()==thisYear&&$month.text()==thisMonth){ 
			$calDate.find(".date").eq(thisDate-1).addClass("today");
		}
	}
	function initDateClick(){

		var dateClick = function(index){ 
			return function(){ 
				var curYear = $year.text();
				var curMonth = $month.text();
				var curDate = $calDate.find(".date").eq(index).text();
				$calDate.find(".date").eq(index).addClass("selected").siblings().removeClass("selected");
				$curYear.text(curYear);
				$curMonth.text(curMonth);
				$curDate.text(curDate);
				initMemo();
			}
		}

		var $dates = $(".wrapper .wrapper-cal .cal .line-date .date");
		for(var i=0;i<$dates.length;i++){ 
			$dates.eq(i).on("click",dateClick(i));
		}
		
	}
	function initDate(){ 
			$calDate.find(".date").remove();
			var year =  parseInt($year.text());
			var month = parseInt($month.text());

			var firstDay = new Date(year+"-"+month).getDay();
			var totalDay = "";
			switch(month){ 
				case 1:case 3: case 5: case 7: case 8: case 10: case 12: totalDay = 31;
					break;
				case 4: case 6: case 9:case 11: totalDay = 30;
					break;
				case 2: totalDay = year%4==0?(year%100!=0?28:29):29;
					break;
			}
			for(var i=1;i<=totalDay;i++){ 
				$calDate.append(appendBef+i+appendAft);
			}
			$calDate.find(".date").eq(0).css("margin-left",(firstDay*14.285+"%"));
			initDateClick();
		
	}
}

function initMemoInput(){
	var $curYear = $(".header .fulldate .year");
	var $curMonth = $(".header .fulldate .month");
	var $curDate = $(".header .fulldate .date"); 
	var $inputMemo = $(".wrapper .wrapper-memo .input-memo");
	var $inputEnter = $(".wrapper .wrapper-memo .enter");
	var $memo = $(".wrapper .wrapper-memo .ul-memo");
	var memoStrBef = "<li class=\"li-memo\"><div class=\"memo\">";
	var memoStrAft = "</div><div class=\"mini\"></div><div class=\"up\"></div><div class=\"down\"></div><div class=\"del\"></div></li>";

	var enterClick = function(){ 
		return function(){ 
					var enterText = $inputMemo.val();
					var enterKey = $curYear.text()+$curMonth.text()+$curDate.text();
					var memoData = localStorage.getItem(enterKey);			
					if(memoData&&enterText!=""){
						var origData = memoData;
						$memo.append(memoStrBef+enterText+memoStrAft);
						origData = origData.split(",");
						origData.unshift(enterText);
						localStorage.setItem(enterKey,origData.toString());
						initMemo();
					}else if(enterText!=""){
						$memo.append(memoStrBef+enterText+memoStrAft); 
						localStorage.setItem(enterKey,enterText.toString());
						
						if(localStorage.getItem("memoSum")){
							var origSum =  localStorage.getItem("memoSum").split(",");
							origSum.push(enterKey);
							localStorage.setItem("memoSum",origSum.toString());
						}else{ 
							localStorage.setItem("memoSum",enterKey);
						}
					}
					$inputMemo.val("");
				
				}
	}
	$inputEnter.on("click",enterClick());
	$inputMemo.on("keydown",function(event){ 
								if(event.keyCode==13){ 
									$inputEnter.trigger("click");
								}
							});
}
function initMemo(){ 
	var $curYear = $(".header .fulldate .year");
	var $curMonth = $(".header .fulldate .month");
	var $curDate = $(".header .fulldate .date"); 
	var $memo = $(".wrapper .wrapper-memo .ul-memo");
	$memo.find(".li-memo").remove();
	var memoStrBef = "<li class=\"li-memo\"><div class=\"memo\">";
	var memoStrAft = "</div><div class=\"mini\"></div><div class=\"up\"></div><div class=\"down\"></div><div class=\"del\"></div></li>";
	var enterKey = $curYear.text()+$curMonth.text()+$curDate.text();
	var memoData = localStorage.getItem(enterKey);
	
	if(memoData){
		var origData = memoData.split(","); 
		for(var i=0;i<origData.length;i++){ 
			$memo.append(memoStrBef+origData[i]+memoStrAft);
		}
	}
	initMemoIcon();
	
}

function initMemoIcon(){ 
	var $curYear = $(".header .fulldate .year");
	var $curMonth = $(".header .fulldate .month");
	var $curDate = $(".header .fulldate .date"); 
	var enterKey = $curYear.text()+$curMonth.text()+$curDate.text();
	var $mini = $(".wrapper .wrapper-memo .ul-memo .li-memo .mini");
	var $up = $(".wrapper .wrapper-memo .ul-memo .li-memo .up");
	var $down = $(".wrapper .wrapper-memo .ul-memo .li-memo .down");
	var $del = $(".wrapper .wrapper-memo .ul-memo .li-memo .del");
	var $memo = $(".wrapper .wrapper-memo .ul-memo .li-memo .memo");

	var upClick = function(index){ 
		return function(){ 
			if(index>0){
				var origData = localStorage.getItem(enterKey).split(",");
				var tempData = origData[index];
				origData[index] = origData[index-1];
				origData[index-1] = tempData;
				localStorage.setItem(enterKey,origData.toString());
				initMemo();
				
			}
		}
	}
	var downClick = function(index){ 
		return function(){ 
			if(index<$down.length-1){ 
				var origData = localStorage.getItem(enterKey).split(","); 
				var tempData = origData[index];
				origData[index] = origData[index+1];
				origData[index+1] = tempData;
				localStorage.setItem(enterKey,origData.toString());
				initMemo();
			}
		}
	}
	var delClick = function(index){ 
		return function(){ 
			var origData = localStorage.getItem(enterKey).split(","); 
			origData.splice(index,1);
			localStorage.setItem(enterKey,origData.toString());
			initMemo();
			if(origData.length==0){ 
				var memoSum = localStorage.getItem("memoSum").split(",");
				for(var i=0;i<memoSum.length;i++){ 
					if(memoSum[i]==enterKey){ 
						memoSum.splice(i,1);
						localStorage.setItem("memoSum",memoSum.toString());
						break;
					}
				}
			}
		}
	}
	var memoClick = function(index){ 
		return function(){ 
			$memo.eq(index).addClass("selected");
		}
	}
	var miniClick = function(index){ 
		return function(){ 
			$memo.eq(index).removeClass("selected");
		}
	}
	for(var i=0;i<$up.length;i++){ 
		$up.eq(i).on("click",upClick(i));
		$down.eq(i).on("click",downClick(i));
		$del.eq(i).on("click",delClick(i));
		$memo.eq(i).on("click",memoClick(i));
		$mini.eq(i).on("click",miniClick(i));
	}
}
function initMemoAll(){ 
	var $memoAll = $("#memo-all");
	var $memoUl = $("#memo-all .ul-memo");
	var $btnAll = $("#btn-all");
	var $btnAllClose = $("#btn-all-close");
	var memoStrBef = "<li class=\"li-memo\"><div class=\"memo\">";
	var memoStrAft = "</div><div class=\"mini\"></div><div class=\"del\"></div></li>";

	var btnAllClick = function(){ 
		return function(){ 
			$memoAll.find(".li-memo").remove();
			if(localStorage.getItem("memoSum")){ 
				var memoSum = localStorage.getItem("memoSum").split(",");
				for(var i=0;i<memoSum.length;i++){ 
					$memoUl.append(memoStrBef+memoSum[i]+" : "+localStorage.getItem(memoSum[i])+memoStrAft);
				}

			}
			
			$memoAll.show();
			
			var memoClick = function(index){ 
				return function(){
					$memoUl.find(".memo").eq(index).addClass("selected");
				}
			}
			var miniClick = function(index){ 
				return function(){ 
					$memoUl.find(".memo").eq(index).removeClass("selected");
				}
			}
			var delClick = function(index){ 
				return function(){ 
					var memoSum = localStorage.getItem("memoSum").split(",");
					localStorage.setItem(memoSum[index],"");
					memoSum.splice(index,1);
					localStorage.setItem("memoSum",memoSum.toString());
					$btnAll.trigger("click");
				
				}
			}
			for(var i=0;i<$memoUl.find(".memo").length;i++){ 
				$memoUl.find(".memo").eq(i).on("click",memoClick(i));
				$memoUl.find(".mini").eq(i).on("click",miniClick(i));
				$memoUl.find(".del").eq(i).on("click",delClick(i));
			}
			
		}
	}
	
	
    $btnAll.on("click",btnAllClick());
    $btnAllClose.on("click",function(){$memoAll.hide();});

    
}