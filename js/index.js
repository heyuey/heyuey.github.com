var $practices = $(".practices");
var $cover = $(".practices .cover");


initPageSize();
initCover();

function initPageSize(){ 
		$practices.css({"height":(.7*parseInt($practices.eq(0).css("width")))});
}

function initCover(){ 
		$cover.eq(0).on({"click":function(){window.open("HerCat/HerCat.html")}});
		$cover.eq(1).on({"click":function(){window.open("SteinsGate/SteinsGate.html")}});
		$cover.eq(2).on({"click":function(){window.open("Crossing/Crossing.html")}});
		$cover.eq(3).on({"click":function(){window.open("Answer/Answer.html")}});
}