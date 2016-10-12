var danmakuItem = ["弹幕","弹幕弹幕","233333333","强无敌","厉害了","FFFFFFF","2333","6666666","(°∀°)","顶~（￣▽￣）","（/TДT)/","( ´_ゝ｀)","喜欢","（￣▽￣）"
					,"( • ̀ω•` )","野生的(⌒▽⌒)","很强势...","wawawawa","给跪了给跪了","哇塞~~~~~","booooooooom","啊","hahahaha","哈哈哈","诶嘿嘿嘿","╮(￣▽￣)╭","妥妥的"
					,"看一下","哇。。。","......","nice","呃~","不错","不错哦","不错啊","hahahahahahahahahahaha","←_← 这..........","好棒啊","感觉不错。。。"
					,"nb","循环","中毒了","日常","( ´_ゝ｀)蒙逼脸","醉了","毫无违和感","可以的","瑟瑟发抖","飘","T.T","biu","biubiubiu~~~","<---biu----"
					,"赞啊~~~","up加油！！！！！！"];
var aniItem = [{"title":"【综漫/甜】CAN'T TAKE MY EYES OFF YOU","cover":"url(images/animate/0.jpg)","shot":"url(images/animate/0shot.jpg)","duration":"03:43","totalPlayed":"11.9万","danmaku":"2253"},
				{"title":"【宅语杂谈】简评《你的名字》-震撼心灵的美？","cover":"url(images/animate/1.jpg)","duration":"05:40","shot":"url(images/animate/1shot.jpg)","totalPlayed":"6.2万","danmaku":"5202"},
				{"title":"本人超喜欢的18部动漫，你们看过多少呢？","cover":"url(images/animate/2.jpg)","duration":"28:31","shot":"url(images/animate/2shot.jpg)","totalPlayed":"5.4万","danmaku":"1.2万"},
				{"title":"【Love Story】When I first saw you","cover":"url(images/animate/3.jpg)","duration":"03:55","shot":"url(images/animate/3shot.jpg)","totalPlayed":"879","danmaku":"468"},
				{"title":"【炮姐/AMV】我永远都会守护在你的身边！","cover":"url(images/animate/4.jpg)","duration":"17:43","shot":"url(images/animate/4shot.jpg)","totalPlayed":"272.3万","danmaku":"26.5万"},
				{"title":"想给你一点告白的勇气","cover":"url(images/animate/5.jpg)","duration":"04:36","shot":"url(images/animate/5shot.jpg)","totalPlayed":"33.4万","danmaku":"2.1万"},
				{"title":"【MAD/燃系/综漫/燃曲/节奏向】它在开始前 就已经结束","cover":"url(images/animate/6.jpg)","duration":"03:22","shot":"url(images/animate/6shot.jpg)","totalPlayed":"4.8万","danmaku":"487"},
				{"title":"【秒5 萤火之森】不管过了多久，还是想要见你","cover":"url(images/animate/7.jpg)","duration":"05:01","shot":"url(images/animate/7shot.jpg)","totalPlayed":"2836","danmaku":"116"}];

var epiItem = [{"title":"【7月/完结】这个美术社大有问题! 12","cover":"url(images/episode/0.jpg)","shot":"url(images/episode/0shot.jpg)","duration":"23:50","totalPlayed":"57.1万","danmaku":"5.6万"},
				{"title":"【10月】魔法少女育成计划 01【独家正版】","cover":"url(images/episode/1.jpg)","duration":"23:59","shot":"url(images/episode/1shot.jpg)","totalPlayed":"58.4万","danmaku":"4.2万"},
				{"title":"【SP/完结】Re：从零开始的异世界生活25【F宅】","cover":"url(images/episode/2.jpg)","duration":"02:30","shot":"url(images/episode/2shot.jpg)","totalPlayed":"23.7万","danmaku":"2330"},
				{"title":"【合集】魔卡少女樱 / 百变小樱","cover":"url(images/episode/3.jpg)","duration":"1751:00","shot":"url(images/episode/3shot.jpg)","totalPlayed":"441.4万","danmaku":"93.1万"},
				{"title":"【剧场版】Selector destructed WIXOSS【千夏】","cover":"url(images/episode/4.jpg)","duration":"89:00","shot":"url(images/episode/4shot.jpg)","totalPlayed":"14.5万","danmaku":"4498"},
				{"title":"【10月】我太受欢迎了该怎么办 01","cover":"url(images/episode/5.jpg)","duration":"24:09","shot":"url(images/episode/5shot.jpg)","totalPlayed":"68.8万","danmaku":"5.5万"},
				{"title":"一人之下 日语版 10","cover":"url(images/episode/6.jpg)","duration":"19:22","shot":"url(images/episode/6shot.jpg)","totalPlayed":"14.8万","danmaku":"4757"},
				{"title":"【10月】超自然9人组 01","cover":"url(images/episode/7.jpg)","duration":"24:02","shot":"url(images/episode/7shot.jpg)","totalPlayed":"16.3万","danmaku":"5402"}];

var musItem = [{"title":"【7月/完结】这个美术社大有问题! 12","cover":"url(images/episode/0.jpg)","shot":"url(images/episode/0shot.jpg)","duration":"23:50","totalPlayed":"57.1万","danmaku":"5.6万"},
				{"title":"【10月】魔法少女育成计划 01【独家正版】","cover":"url(images/episode/1.jpg)","duration":"23:59","shot":"url(images/episode/1shot.jpg)","totalPlayed":"58.4万","danmaku":"4.2万"},
				{"title":"【SP/完结】Re：从零开始的异世界生活25【F宅】","cover":"url(images/episode/2.jpg)","duration":"02:30","shot":"url(images/episode/2shot.jpg)","totalPlayed":"23.7万","danmaku":"2330"},
				{"title":"【合集】魔卡少女樱 / 百变小樱","cover":"url(images/episode/3.jpg)","duration":"1751:00","shot":"url(images/episode/3shot.jpg)","totalPlayed":"441.4万","danmaku":"93.1万"},
				{"title":"【剧场版】Selector destructed WIXOSS【千夏】","cover":"url(images/episode/4.jpg)","duration":"89:00","shot":"url(images/episode/4shot.jpg)","totalPlayed":"14.5万","danmaku":"4498"},
				{"title":"【10月】我太受欢迎了该怎么办 01","cover":"url(images/episode/5.jpg)","duration":"24:09","shot":"url(images/episode/5shot.jpg)","totalPlayed":"68.8万","danmaku":"5.5万"},
				{"title":"一人之下 日语版 10","cover":"url(images/episode/6.jpg)","duration":"19:22","shot":"url(images/episode/6shot.jpg)","totalPlayed":"14.8万","danmaku":"4757"},
				{"title":"【10月】超自然9人组 01","cover":"url(images/episode/7.jpg)","duration":"24:02","shot":"url(images/episode/7shot.jpg)","totalPlayed":"16.3万","danmaku":"5402"}];

var danItem = [{"title":"【7月/完结】这个美术社大有问题! 12","cover":"url(images/episode/0.jpg)","shot":"url(images/episode/0shot.jpg)","duration":"23:50","totalPlayed":"57.1万","danmaku":"5.6万"},
				{"title":"【10月】魔法少女育成计划 01【独家正版】","cover":"url(images/episode/1.jpg)","duration":"23:59","shot":"url(images/episode/1shot.jpg)","totalPlayed":"58.4万","danmaku":"4.2万"},
				{"title":"【SP/完结】Re：从零开始的异世界生活25【F宅】","cover":"url(images/episode/2.jpg)","duration":"02:30","shot":"url(images/episode/2shot.jpg)","totalPlayed":"23.7万","danmaku":"2330"},
				{"title":"【合集】魔卡少女樱 / 百变小樱","cover":"url(images/episode/3.jpg)","duration":"1751:00","shot":"url(images/episode/3shot.jpg)","totalPlayed":"441.4万","danmaku":"93.1万"},
				{"title":"【剧场版】Selector destructed WIXOSS【千夏】","cover":"url(images/episode/4.jpg)","duration":"89:00","shot":"url(images/episode/4shot.jpg)","totalPlayed":"14.5万","danmaku":"4498"},
				{"title":"【10月】我太受欢迎了该怎么办 01","cover":"url(images/episode/5.jpg)","duration":"24:09","shot":"url(images/episode/5shot.jpg)","totalPlayed":"68.8万","danmaku":"5.5万"},
				{"title":"一人之下 日语版 10","cover":"url(images/episode/6.jpg)","duration":"19:22","shot":"url(images/episode/6shot.jpg)","totalPlayed":"14.8万","danmaku":"4757"},
				{"title":"【10月】超自然9人组 01","cover":"url(images/episode/7.jpg)","duration":"24:02","shot":"url(images/episode/7shot.jpg)","totalPlayed":"16.3万","danmaku":"5402"}];

var gamItem = [{"title":"【7月/完结】这个美术社大有问题! 12","cover":"url(images/episode/0.jpg)","shot":"url(images/episode/0shot.jpg)","duration":"23:50","totalPlayed":"57.1万","danmaku":"5.6万"},
				{"title":"【10月】魔法少女育成计划 01【独家正版】","cover":"url(images/episode/1.jpg)","duration":"23:59","shot":"url(images/episode/1shot.jpg)","totalPlayed":"58.4万","danmaku":"4.2万"},
				{"title":"【SP/完结】Re：从零开始的异世界生活25【F宅】","cover":"url(images/episode/2.jpg)","duration":"02:30","shot":"url(images/episode/2shot.jpg)","totalPlayed":"23.7万","danmaku":"2330"},
				{"title":"【合集】魔卡少女樱 / 百变小樱","cover":"url(images/episode/3.jpg)","duration":"1751:00","shot":"url(images/episode/3shot.jpg)","totalPlayed":"441.4万","danmaku":"93.1万"},
				{"title":"【剧场版】Selector destructed WIXOSS【千夏】","cover":"url(images/episode/4.jpg)","duration":"89:00","shot":"url(images/episode/4shot.jpg)","totalPlayed":"14.5万","danmaku":"4498"},
				{"title":"【10月】我太受欢迎了该怎么办 01","cover":"url(images/episode/5.jpg)","duration":"24:09","shot":"url(images/episode/5shot.jpg)","totalPlayed":"68.8万","danmaku":"5.5万"},
				{"title":"一人之下 日语版 10","cover":"url(images/episode/6.jpg)","duration":"19:22","shot":"url(images/episode/6shot.jpg)","totalPlayed":"14.8万","danmaku":"4757"},
				{"title":"【10月】超自然9人组 01","cover":"url(images/episode/7.jpg)","duration":"24:02","shot":"url(images/episode/7shot.jpg)","totalPlayed":"16.3万","danmaku":"5402"}];

var sciItem = [{"title":"【7月/完结】这个美术社大有问题! 12","cover":"url(images/episode/0.jpg)","shot":"url(images/episode/0shot.jpg)","duration":"23:50","totalPlayed":"57.1万","danmaku":"5.6万"},
				{"title":"【10月】魔法少女育成计划 01【独家正版】","cover":"url(images/episode/1.jpg)","duration":"23:59","shot":"url(images/episode/1shot.jpg)","totalPlayed":"58.4万","danmaku":"4.2万"},
				{"title":"【SP/完结】Re：从零开始的异世界生活25【F宅】","cover":"url(images/episode/2.jpg)","duration":"02:30","shot":"url(images/episode/2shot.jpg)","totalPlayed":"23.7万","danmaku":"2330"},
				{"title":"【合集】魔卡少女樱 / 百变小樱","cover":"url(images/episode/3.jpg)","duration":"1751:00","shot":"url(images/episode/3shot.jpg)","totalPlayed":"441.4万","danmaku":"93.1万"},
				{"title":"【剧场版】Selector destructed WIXOSS【千夏】","cover":"url(images/episode/4.jpg)","duration":"89:00","shot":"url(images/episode/4shot.jpg)","totalPlayed":"14.5万","danmaku":"4498"},
				{"title":"【10月】我太受欢迎了该怎么办 01","cover":"url(images/episode/5.jpg)","duration":"24:09","shot":"url(images/episode/5shot.jpg)","totalPlayed":"68.8万","danmaku":"5.5万"},
				{"title":"一人之下 日语版 10","cover":"url(images/episode/6.jpg)","duration":"19:22","shot":"url(images/episode/6shot.jpg)","totalPlayed":"14.8万","danmaku":"4757"},
				{"title":"【10月】超自然9人组 01","cover":"url(images/episode/7.jpg)","duration":"24:02","shot":"url(images/episode/7shot.jpg)","totalPlayed":"16.3万","danmaku":"5402"}];

var lifItem = [{"title":"【7月/完结】这个美术社大有问题! 12","cover":"url(images/episode/0.jpg)","shot":"url(images/episode/0shot.jpg)","duration":"23:50","totalPlayed":"57.1万","danmaku":"5.6万"},
				{"title":"【10月】魔法少女育成计划 01【独家正版】","cover":"url(images/episode/1.jpg)","duration":"23:59","shot":"url(images/episode/1shot.jpg)","totalPlayed":"58.4万","danmaku":"4.2万"},
				{"title":"【SP/完结】Re：从零开始的异世界生活25【F宅】","cover":"url(images/episode/2.jpg)","duration":"02:30","shot":"url(images/episode/2shot.jpg)","totalPlayed":"23.7万","danmaku":"2330"},
				{"title":"【合集】魔卡少女樱 / 百变小樱","cover":"url(images/episode/3.jpg)","duration":"1751:00","shot":"url(images/episode/3shot.jpg)","totalPlayed":"441.4万","danmaku":"93.1万"},
				{"title":"【剧场版】Selector destructed WIXOSS【千夏】","cover":"url(images/episode/4.jpg)","duration":"89:00","shot":"url(images/episode/4shot.jpg)","totalPlayed":"14.5万","danmaku":"4498"},
				{"title":"【10月】我太受欢迎了该怎么办 01","cover":"url(images/episode/5.jpg)","duration":"24:09","shot":"url(images/episode/5shot.jpg)","totalPlayed":"68.8万","danmaku":"5.5万"},
				{"title":"一人之下 日语版 10","cover":"url(images/episode/6.jpg)","duration":"19:22","shot":"url(images/episode/6shot.jpg)","totalPlayed":"14.8万","danmaku":"4757"},
				{"title":"【10月】超自然9人组 01","cover":"url(images/episode/7.jpg)","duration":"24:02","shot":"url(images/episode/7shot.jpg)","totalPlayed":"16.3万","danmaku":"5402"}];	

var kicItem = [{"title":"【7月/完结】这个美术社大有问题! 12","cover":"url(images/episode/0.jpg)","shot":"url(images/episode/0shot.jpg)","duration":"23:50","totalPlayed":"57.1万","danmaku":"5.6万"},
				{"title":"【10月】魔法少女育成计划 01【独家正版】","cover":"url(images/episode/1.jpg)","duration":"23:59","shot":"url(images/episode/1shot.jpg)","totalPlayed":"58.4万","danmaku":"4.2万"},
				{"title":"【SP/完结】Re：从零开始的异世界生活25【F宅】","cover":"url(images/episode/2.jpg)","duration":"02:30","shot":"url(images/episode/2shot.jpg)","totalPlayed":"23.7万","danmaku":"2330"},
				{"title":"【合集】魔卡少女樱 / 百变小樱","cover":"url(images/episode/3.jpg)","duration":"1751:00","shot":"url(images/episode/3shot.jpg)","totalPlayed":"441.4万","danmaku":"93.1万"},
				{"title":"【剧场版】Selector destructed WIXOSS【千夏】","cover":"url(images/episode/4.jpg)","duration":"89:00","shot":"url(images/episode/4shot.jpg)","totalPlayed":"14.5万","danmaku":"4498"},
				{"title":"【10月】我太受欢迎了该怎么办 01","cover":"url(images/episode/5.jpg)","duration":"24:09","shot":"url(images/episode/5shot.jpg)","totalPlayed":"68.8万","danmaku":"5.5万"},
				{"title":"一人之下 日语版 10","cover":"url(images/episode/6.jpg)","duration":"19:22","shot":"url(images/episode/6shot.jpg)","totalPlayed":"14.8万","danmaku":"4757"},
				{"title":"【10月】超自然9人组 01","cover":"url(images/episode/7.jpg)","duration":"24:02","shot":"url(images/episode/7shot.jpg)","totalPlayed":"16.3万","danmaku":"5402"}];	

var fasItem = [{"title":"【7月/完结】这个美术社大有问题! 12","cover":"url(images/episode/0.jpg)","shot":"url(images/episode/0shot.jpg)","duration":"23:50","totalPlayed":"57.1万","danmaku":"5.6万"},
				{"title":"【10月】魔法少女育成计划 01【独家正版】","cover":"url(images/episode/1.jpg)","duration":"23:59","shot":"url(images/episode/1shot.jpg)","totalPlayed":"58.4万","danmaku":"4.2万"},
				{"title":"【SP/完结】Re：从零开始的异世界生活25【F宅】","cover":"url(images/episode/2.jpg)","duration":"02:30","shot":"url(images/episode/2shot.jpg)","totalPlayed":"23.7万","danmaku":"2330"},
				{"title":"【合集】魔卡少女樱 / 百变小樱","cover":"url(images/episode/3.jpg)","duration":"1751:00","shot":"url(images/episode/3shot.jpg)","totalPlayed":"441.4万","danmaku":"93.1万"},
				{"title":"【剧场版】Selector destructed WIXOSS【千夏】","cover":"url(images/episode/4.jpg)","duration":"89:00","shot":"url(images/episode/4shot.jpg)","totalPlayed":"14.5万","danmaku":"4498"},
				{"title":"【10月】我太受欢迎了该怎么办 01","cover":"url(images/episode/5.jpg)","duration":"24:09","shot":"url(images/episode/5shot.jpg)","totalPlayed":"68.8万","danmaku":"5.5万"},
				{"title":"一人之下 日语版 10","cover":"url(images/episode/6.jpg)","duration":"19:22","shot":"url(images/episode/6shot.jpg)","totalPlayed":"14.8万","danmaku":"4757"},
				{"title":"【10月】超自然9人组 01","cover":"url(images/episode/7.jpg)","duration":"24:02","shot":"url(images/episode/7shot.jpg)","totalPlayed":"16.3万","danmaku":"5402"}];					

var adItem = [{"title":"【7月/完结】这个美术社大有问题! 12","cover":"url(images/episode/0.jpg)","shot":"url(images/episode/0shot.jpg)","duration":"23:50","totalPlayed":"57.1万","danmaku":"5.6万"},
				{"title":"【10月】魔法少女育成计划 01【独家正版】","cover":"url(images/episode/1.jpg)","duration":"23:59","shot":"url(images/episode/1shot.jpg)","totalPlayed":"58.4万","danmaku":"4.2万"},
				{"title":"【SP/完结】Re：从零开始的异世界生活25【F宅】","cover":"url(images/episode/2.jpg)","duration":"02:30","shot":"url(images/episode/2shot.jpg)","totalPlayed":"23.7万","danmaku":"2330"},
				{"title":"【合集】魔卡少女樱 / 百变小樱","cover":"url(images/episode/3.jpg)","duration":"1751:00","shot":"url(images/episode/3shot.jpg)","totalPlayed":"441.4万","danmaku":"93.1万"},
				{"title":"【剧场版】Selector destructed WIXOSS【千夏】","cover":"url(images/episode/4.jpg)","duration":"89:00","shot":"url(images/episode/4shot.jpg)","totalPlayed":"14.5万","danmaku":"4498"},
				{"title":"【10月】我太受欢迎了该怎么办 01","cover":"url(images/episode/5.jpg)","duration":"24:09","shot":"url(images/episode/5shot.jpg)","totalPlayed":"68.8万","danmaku":"5.5万"},
				{"title":"一人之下 日语版 10","cover":"url(images/episode/6.jpg)","duration":"19:22","shot":"url(images/episode/6shot.jpg)","totalPlayed":"14.8万","danmaku":"4757"},
				{"title":"【10月】超自然9人组 01","cover":"url(images/episode/7.jpg)","duration":"24:02","shot":"url(images/episode/7shot.jpg)","totalPlayed":"16.3万","danmaku":"5402"}];	

var entItem = [{"title":"【7月/完结】这个美术社大有问题! 12","cover":"url(images/episode/0.jpg)","shot":"url(images/episode/0shot.jpg)","duration":"23:50","totalPlayed":"57.1万","danmaku":"5.6万"},
				{"title":"【10月】魔法少女育成计划 01【独家正版】","cover":"url(images/episode/1.jpg)","duration":"23:59","shot":"url(images/episode/1shot.jpg)","totalPlayed":"58.4万","danmaku":"4.2万"},
				{"title":"【SP/完结】Re：从零开始的异世界生活25【F宅】","cover":"url(images/episode/2.jpg)","duration":"02:30","shot":"url(images/episode/2shot.jpg)","totalPlayed":"23.7万","danmaku":"2330"},
				{"title":"【合集】魔卡少女樱 / 百变小樱","cover":"url(images/episode/3.jpg)","duration":"1751:00","shot":"url(images/episode/3shot.jpg)","totalPlayed":"441.4万","danmaku":"93.1万"},
				{"title":"【剧场版】Selector destructed WIXOSS【千夏】","cover":"url(images/episode/4.jpg)","duration":"89:00","shot":"url(images/episode/4shot.jpg)","totalPlayed":"14.5万","danmaku":"4498"},
				{"title":"【10月】我太受欢迎了该怎么办 01","cover":"url(images/episode/5.jpg)","duration":"24:09","shot":"url(images/episode/5shot.jpg)","totalPlayed":"68.8万","danmaku":"5.5万"},
				{"title":"一人之下 日语版 10","cover":"url(images/episode/6.jpg)","duration":"19:22","shot":"url(images/episode/6shot.jpg)","totalPlayed":"14.8万","danmaku":"4757"},
				{"title":"【10月】超自然9人组 01","cover":"url(images/episode/7.jpg)","duration":"24:02","shot":"url(images/episode/7shot.jpg)","totalPlayed":"16.3万","danmaku":"5402"}];	

var movItem = [{"title":"【7月/完结】这个美术社大有问题! 12","cover":"url(images/episode/0.jpg)","shot":"url(images/episode/0shot.jpg)","duration":"23:50","totalPlayed":"57.1万","danmaku":"5.6万"},
				{"title":"【10月】魔法少女育成计划 01【独家正版】","cover":"url(images/episode/1.jpg)","duration":"23:59","shot":"url(images/episode/1shot.jpg)","totalPlayed":"58.4万","danmaku":"4.2万"},
				{"title":"【SP/完结】Re：从零开始的异世界生活25【F宅】","cover":"url(images/episode/2.jpg)","duration":"02:30","shot":"url(images/episode/2shot.jpg)","totalPlayed":"23.7万","danmaku":"2330"},
				{"title":"【合集】魔卡少女樱 / 百变小樱","cover":"url(images/episode/3.jpg)","duration":"1751:00","shot":"url(images/episode/3shot.jpg)","totalPlayed":"441.4万","danmaku":"93.1万"},
				{"title":"【剧场版】Selector destructed WIXOSS【千夏】","cover":"url(images/episode/4.jpg)","duration":"89:00","shot":"url(images/episode/4shot.jpg)","totalPlayed":"14.5万","danmaku":"4498"},
				{"title":"【10月】我太受欢迎了该怎么办 01","cover":"url(images/episode/5.jpg)","duration":"24:09","shot":"url(images/episode/5shot.jpg)","totalPlayed":"68.8万","danmaku":"5.5万"},
				{"title":"一人之下 日语版 10","cover":"url(images/episode/6.jpg)","duration":"19:22","shot":"url(images/episode/6shot.jpg)","totalPlayed":"14.8万","danmaku":"4757"},
				{"title":"【10月】超自然9人组 01","cover":"url(images/episode/7.jpg)","duration":"24:02","shot":"url(images/episode/7shot.jpg)","totalPlayed":"16.3万","danmaku":"5402"}];	

var tvItem = [{"title":"【7月/完结】这个美术社大有问题! 12","cover":"url(images/episode/0.jpg)","shot":"url(images/episode/0shot.jpg)","duration":"23:50","totalPlayed":"57.1万","danmaku":"5.6万"},
				{"title":"【10月】魔法少女育成计划 01【独家正版】","cover":"url(images/episode/1.jpg)","duration":"23:59","shot":"url(images/episode/1shot.jpg)","totalPlayed":"58.4万","danmaku":"4.2万"},
				{"title":"【SP/完结】Re：从零开始的异世界生活25【F宅】","cover":"url(images/episode/2.jpg)","duration":"02:30","shot":"url(images/episode/2shot.jpg)","totalPlayed":"23.7万","danmaku":"2330"},
				{"title":"【合集】魔卡少女樱 / 百变小樱","cover":"url(images/episode/3.jpg)","duration":"1751:00","shot":"url(images/episode/3shot.jpg)","totalPlayed":"441.4万","danmaku":"93.1万"},
				{"title":"【剧场版】Selector destructed WIXOSS【千夏】","cover":"url(images/episode/4.jpg)","duration":"89:00","shot":"url(images/episode/4shot.jpg)","totalPlayed":"14.5万","danmaku":"4498"},
				{"title":"【10月】我太受欢迎了该怎么办 01","cover":"url(images/episode/5.jpg)","duration":"24:09","shot":"url(images/episode/5shot.jpg)","totalPlayed":"68.8万","danmaku":"5.5万"},
				{"title":"一人之下 日语版 10","cover":"url(images/episode/6.jpg)","duration":"19:22","shot":"url(images/episode/6shot.jpg)","totalPlayed":"14.8万","danmaku":"4757"},
				{"title":"【10月】超自然9人组 01","cover":"url(images/episode/7.jpg)","duration":"24:02","shot":"url(images/episode/7shot.jpg)","totalPlayed":"16.3万","danmaku":"5402"}];	

var extItem = [{"title":"【某阳】教你极限火箭跳和失传已久的巴西滑墙术~《守望先锋学院地图篇》","cover":"url(images/extend/0.jpg)","shot":"url(images/extend/0shot.jpg)","duration":"11:45"}
				,{"title":"【妮可单曲】世界第一妮可殿下！","cover":"url(images/extend/1.jpg)","shot":"url(images/extend/1shot.jpg)","duration":"01:43"}
				,{"title":"【国人13人翻唱】网球王子六曲连唱（动画十五周年贺）","cover":"url(images/extend/2.jpg)","shot":"url(images/extend/2shot.jpg)","duration":"10:14"}
				,{"title":"［经典化学］第7期 蓝瓶子变色实验","cover":"url(images/extend/3.jpg)","shot":"url(images/extend/3shot.jpg)","duration":"05:42"}];
//extend
var $extCover = $(".extend .item .cover");
var $extBar = $(".extend .item .cover .bar .bar-outer");
var $extDur = $(".extend .item .cover .duration");
var $extTitle = $(".extend .item .title");
initExt();

function initExt(){ 
		for(var i=0;i<$extCover.length;i++){ 
			$extCover.eq(i).css("background-image",extItem[i]["cover"]);	
			$extDur.eq(i).text(extItem[i]["duration"]);
			$extTitle.eq(i).text(extItem[i]["title"]).attr("title",extItem[i]["title"]);
		}

		mMove("extend",$extCover,$extBar);
}

//animate
var $aniCover = $(".animate .item .cover");
var $aniBar = $(".animate .item .cover .bar .bar-outer");
var $aniDur = $(".animate .item .cover .duration");
var $aniTitle = $(".animate .item .title");
var $aniTotalPlayed = $(".animate .item .totalPlayed");
var $aniDanmaku = $(".animate .item .danmaku");

var $aniRank = $(".animate .rank .rank-detail");
var $aniRankCover = $(".animate .rank .rank-cover");
initAni();

function initAni(){
		for(var i=0;i<$aniRank.length;i++){ 
			$aniRank.eq(i).text(aniItem[i]["title"]).attr("title",aniItem[i]["title"]);
		}
		$aniRankCover.css("background-image",aniItem[0]["cover"]);
		for(var i=0;i<$aniCover.length;i++){ 
			$aniCover.eq(i).css("background-image",aniItem[i]["cover"]);	
			$aniDur.eq(i).text(aniItem[i]["duration"]);
			$aniTitle.eq(i).text(aniItem[i]["title"]).attr("title",aniItem[i]["title"]);
			$aniTotalPlayed.eq(i).text(aniItem[i]["totalPlayed"]);
			$aniDanmaku.eq(i).text(aniItem[i]["danmaku"]);
		}

		mMove("animate",$aniCover,$aniBar);
}

//episode
var $epiCover = $(".episode .item .cover");
var $epiBar = $(".episode .item .cover .bar .bar-outer");
var $epiDur = $(".episode .item .cover .duration");
var $epiTitle = $(".episode .item .title");
var $epiTotalPlayed = $(".episode .item .totalPlayed");
var $epiDanmaku = $(".episode .item .danmaku");

var $epiRank = $(".episode .rank .rank-detail");
var $epiRankCover = $(".episode .rank .rank-cover");
initEpi();

function initEpi(){
		for(var i=0;i<$epiRank.length;i++){ 
			$epiRank.eq(i).text(epiItem[i]["title"]).attr("title",epiItem[i]["title"]);
		}
		$epiRankCover.css("background-image",epiItem[0]["cover"]);

		for(var i=0;i<$epiCover.length;i++){ 
			$epiCover.eq(i).css("background-image",epiItem[i]["cover"]);	
			$epiDur.eq(i).text(epiItem[i]["duration"]);
			$epiTitle.eq(i).text(epiItem[i]["title"]).attr("title",epiItem[i]["title"]);
			$epiTotalPlayed.eq(i).text(epiItem[i]["totalPlayed"]);
			$epiDanmaku.eq(i).text(epiItem[i]["danmaku"]);
		}

		mMove("episode",$epiCover,$epiBar);
}

//music
var $musCover = $(".music .item .cover");
var $musBar = $(".music .item .cover .bar .bar-outer");
var $musDur = $(".music .item .cover .duration");
var $musTitle = $(".music .item .title");
var $musTotalPlayed = $(".music .item .totalPlayed");
var $musDanmaku = $(".music .item .danmaku");

var $musRank = $(".music .rank .rank-detail");
var $musRankCover = $(".music .rank .rank-cover");
initMus();

function initMus(){
		for(var i=0;i<$musRank.length;i++){ 
			$musRank.eq(i).text(musItem[i]["title"]).attr("title",musItem[i]["title"]);
		}
		$musRankCover.css("background-image",musItem[0]["cover"]);

		for(var i=0;i<$musCover.length;i++){ 
			$musCover.eq(i).css("background-image",musItem[i]["cover"]);	
			$musDur.eq(i).text(musItem[i]["duration"]);
			$musTitle.eq(i).text(musItem[i]["title"]).attr("title",musItem[i]["title"]);
			$musTotalPlayed.eq(i).text(musItem[i]["totalPlayed"]);
			$musDanmaku.eq(i).text(musItem[i]["danmaku"]);
		}

		mMove("music",$musCover,$musBar);
}

//dance
var $danCover = $(".dance .item .cover");
var $danBar = $(".dance .item .cover .bar .bar-outer");
var $danDur = $(".dance .item .cover .duration");
var $danTitle = $(".dance .item .title");
var $danTotalPlayed = $(".dance .item .totalPlayed");
var $danDanmaku = $(".dance .item .danmaku");

var $danRank = $(".dance .rank .rank-detail");
var $danRankCover = $(".dance .rank .rank-cover");
initDan();

function initDan(){
		for(var i=0;i<$danRank.length;i++){ 
			$danRank.eq(i).text(danItem[i]["title"]).attr("title",danItem[i]["title"]);
		}
		$danRankCover.css("background-image",danItem[0]["cover"]);


		for(var i=0;i<$danCover.length;i++){ 
			$danCover.eq(i).css("background-image",danItem[i]["cover"]);	
			$danDur.eq(i).text(danItem[i]["duration"]);
			$danTitle.eq(i).text(danItem[i]["title"]).attr("title",danItem[i]["title"]);
			$danTotalPlayed.eq(i).text(danItem[i]["totalPlayed"]);
			$danDanmaku.eq(i).text(danItem[i]["danmaku"]);
		}

		mMove("dance",$danCover,$danBar);
}

//game
var $gamCover = $(".game .item .cover");
var $gamBar = $(".game .item .cover .bar .bar-outer");
var $gamDur = $(".game .item .cover .duration");
var $gamTitle = $(".game .item .title");
var $gamTotalPlayed = $(".game .item .totalPlayed");
var $gamDanmaku = $(".game .item .danmaku");

var $gamRank = $(".game .rank .rank-detail");
var $gamRankCover = $(".game .rank .rank-cover");
initGam();

function initGam(){
		for(var i=0;i<$gamRank.length;i++){ 
			$gamRank.eq(i).text(gamItem[i]["title"]).attr("title",gamItem[i]["title"]);
		}
		$gamRankCover.css("background-image",gamItem[0]["cover"]);

		for(var i=0;i<$gamCover.length;i++){ 
			$gamCover.eq(i).css("background-image",gamItem[i]["cover"]);	
			$gamDur.eq(i).text(gamItem[i]["duration"]);
			$gamTitle.eq(i).text(gamItem[i]["title"]).attr("title",gamItem[i]["title"]);
			$gamTotalPlayed.eq(i).text(gamItem[i]["totalPlayed"]);
			$gamDanmaku.eq(i).text(gamItem[i]["danmaku"]);
		}

		mMove("game",$gamCover,$gamBar);
}

//science
var $sciCover = $(".science .item .cover");
var $sciBar = $(".science .item .cover .bar .bar-outer");
var $sciDur = $(".science .item .cover .duration");
var $sciTitle = $(".science .item .title");
var $sciTotalPlayed = $(".science .item .totalPlayed");
var $sciDanmaku = $(".science .item .danmaku");

var $sciRank = $(".science .rank .rank-detail");
var $sciRankCover = $(".science .rank .rank-cover");
initSci();

function initSci(){
		for(var i=0;i<$sciRank.length;i++){ 
			$sciRank.eq(i).text(sciItem[i]["title"]).attr("title",sciItem[i]["title"]);
		}
		$sciRankCover.css("background-image",sciItem[0]["cover"]);

		for(var i=0;i<$sciCover.length;i++){ 
			$sciCover.eq(i).css("background-image",sciItem[i]["cover"]);	
			$sciDur.eq(i).text(sciItem[i]["duration"]);
			$sciTitle.eq(i).text(sciItem[i]["title"]).attr("title",sciItem[i]["title"]);
			$sciTotalPlayed.eq(i).text(sciItem[i]["totalPlayed"]);
			$sciDanmaku.eq(i).text(sciItem[i]["danmaku"]);
		}

		mMove("science",$sciCover,$sciBar);
}

//life
var $lifCover = $(".life .item .cover");
var $lifBar = $(".life .item .cover .bar .bar-outer");
var $lifDur = $(".life .item .cover .duration");
var $lifTitle = $(".life .item .title");
var $lifTotalPlayed = $(".life .item .totalPlayed");
var $lifDanmaku = $(".life .item .danmaku");

var $lifRank = $(".life .rank .rank-detail");
var $lifRankCover = $(".life .rank .rank-cover");
initLif();

function initLif(){
		for(var i=0;i<$lifRank.length;i++){ 
			$lifRank.eq(i).text(lifItem[i]["title"]).attr("title",lifItem[i]["title"]);
		}
		$lifRankCover.css("background-image",lifItem[0]["cover"]);

		for(var i=0;i<$lifCover.length;i++){ 
			$lifCover.eq(i).css("background-image",lifItem[i]["cover"]);	
			$lifDur.eq(i).text(lifItem[i]["duration"]);
			$lifTitle.eq(i).text(lifItem[i]["title"]).attr("title",lifItem[i]["title"]);
			$lifTotalPlayed.eq(i).text(lifItem[i]["totalPlayed"]);
			$lifDanmaku.eq(i).text(lifItem[i]["danmaku"]);
		}

		mMove("life",$lifCover,$lifBar);
}

//kichiku
var $kicCover = $(".kichiku .item .cover");
var $kicBar = $(".kichiku .item .cover .bar .bar-outer");
var $kicDur = $(".kichiku .item .cover .duration");
var $kicTitle = $(".kichiku .item .title");
var $kicTotalPlayed = $(".kichiku .item .totalPlayed");
var $kicDanmaku = $(".kichiku .item .danmaku");

var $kicRank = $(".kichiku .rank .rank-detail");
var $kicRankCover = $(".kichiku .rank .rank-cover");
initKic();

function initKic(){
		for(var i=0;i<$kicRank.length;i++){ 
			$kicRank.eq(i).text(kicItem[i]["title"]).attr("title",kicItem[i]["title"]);
		}
		$kicRankCover.css("background-image",kicItem[0]["cover"]);

		for(var i=0;i<$kicCover.length;i++){ 
			$kicCover.eq(i).css("background-image",kicItem[i]["cover"]);	
			$kicDur.eq(i).text(kicItem[i]["duration"]);
			$kicTitle.eq(i).text(kicItem[i]["title"]).attr("title",kicItem[i]["title"]);
			$kicTotalPlayed.eq(i).text(kicItem[i]["totalPlayed"]);
			$kicDanmaku.eq(i).text(kicItem[i]["danmaku"]);
		}

		mMove("kichiku",$kicCover,$kicBar);
}

//fashion
var $fasCover = $(".fashion .item .cover");
var $fasBar = $(".fashion .item .cover .bar .bar-outer");
var $fasDur = $(".fashion .item .cover .duration");
var $fasTitle = $(".fashion .item .title");
var $fasTotalPlayed = $(".fashion .item .totalPlayed");
var $fasDanmaku = $(".fashion .item .danmaku");

var $fasRank = $(".fashion .rank .rank-detail");
var $fasRankCover = $(".fashion .rank .rank-cover");
initFas();

function initFas(){
		for(var i=0;i<$fasRank.length;i++){ 
			$fasRank.eq(i).text(fasItem[i]["title"]).attr("title",fasItem[i]["title"]);
		}
		$fasRankCover.css("background-image",fasItem[0]["cover"]);

		for(var i=0;i<$fasCover.length;i++){ 
			$fasCover.eq(i).css("background-image",fasItem[i]["cover"]);	
			$fasDur.eq(i).text(fasItem[i]["duration"]);
			$fasTitle.eq(i).text(fasItem[i]["title"]).attr("title",fasItem[i]["title"]);
			$fasTotalPlayed.eq(i).text(fasItem[i]["totalPlayed"]);
			$fasDanmaku.eq(i).text(fasItem[i]["danmaku"]);
		}

		mMove("fashion",$fasCover,$fasBar);
}
//ad
var $adCover = $(".ad .item .cover");
var $adBar = $(".ad .item .cover .bar .bar-outer");
var $adDur = $(".ad .item .cover .duration");
var $adTitle = $(".ad .item .title");
var $adTotalPlayed = $(".ad .item .totalPlayed");
var $adDanmaku = $(".ad .item .danmaku");

var $adRank = $(".ad .rank .rank-detail");
var $adRankCover = $(".ad .rank .rank-cover");
initAd();

function initAd(){
		for(var i=0;i<$adRank.length;i++){ 
			$adRank.eq(i).text(adItem[i]["title"]).attr("title",adItem[i]["title"]);
		}
		$adRankCover.css("background-image",adItem[0]["cover"]);

		for(var i=0;i<$adCover.length;i++){ 
			$adCover.eq(i).css("background-image",adItem[i]["cover"]);	
			$adDur.eq(i).text(adItem[i]["duration"]);
			$adTitle.eq(i).text(adItem[i]["title"]).attr("title",adItem[i]["title"]);
			$adTotalPlayed.eq(i).text(adItem[i]["totalPlayed"]);
			$adDanmaku.eq(i).text(adItem[i]["danmaku"]);
		}

		mMove("ad",$adCover,$adBar);
}
//ent
var $entCover = $(".ent .item .cover");
var $entBar = $(".ent .item .cover .bar .bar-outer");
var $entDur = $(".ent .item .cover .duration");
var $entTitle = $(".ent .item .title");
var $entTotalPlayed = $(".ent .item .totalPlayed");
var $entDanmaku = $(".ent .item .danmaku");

var $entRank = $(".ent .rank .rank-detail");
var $entRankCover = $(".ent .rank .rank-cover");
initEnt();

function initEnt(){
		for(var i=0;i<$entRank.length;i++){ 
			$entRank.eq(i).text(entItem[i]["title"]).attr("title",entItem[i]["title"]);
		}
		$entRankCover.css("background-image",entItem[0]["cover"]);

		for(var i=0;i<$entCover.length;i++){ 
			$entCover.eq(i).css("background-image",entItem[i]["cover"]);	
			$entDur.eq(i).text(entItem[i]["duration"]);
			$entTitle.eq(i).text(entItem[i]["title"]).attr("title",entItem[i]["title"]);
			$entTotalPlayed.eq(i).text(entItem[i]["totalPlayed"]);
			$entDanmaku.eq(i).text(entItem[i]["danmaku"]);
		}

		mMove("ent",$entCover,$entBar);
}
//movie
var $movCover = $(".movie .item .cover");
var $movBar = $(".movie .item .cover .bar .bar-outer");
var $movDur = $(".movie .item .cover .duration");
var $movTitle = $(".movie .item .title");
var $movTotalPlayed = $(".movie .item .totalPlayed");
var $movDanmaku = $(".movie .item .danmaku");

var $movRank = $(".movie .rank .rank-detail");
var $movRankCover = $(".movie .rank .rank-cover");
initMov();

function initMov(){
		for(var i=0;i<$movRank.length;i++){ 
			$movRank.eq(i).text(movItem[i]["title"]).attr("title",movItem[i]["title"]);
		}
		$movRankCover.css("background-image",movItem[0]["cover"]);

		for(var i=0;i<$movCover.length;i++){ 
			$movCover.eq(i).css("background-image",movItem[i]["cover"]);	
			$movDur.eq(i).text(movItem[i]["duration"]);
			$movTitle.eq(i).text(movItem[i]["title"]).attr("title",movItem[i]["title"]);
			$movTotalPlayed.eq(i).text(movItem[i]["totalPlayed"]);
			$movDanmaku.eq(i).text(movItem[i]["danmaku"]);
		}

		mMove("movie",$movCover,$movBar);
}
//tv
var $tvCover = $(".tv .item .cover");
var $tvBar = $(".tv .item .cover .bar .bar-outer");
var $tvDur = $(".tv .item .cover .duration");
var $tvTitle = $(".tv .item .title");
var $tvTotalPlayed = $(".tv .item .totalPlayed");
var $tvDanmaku = $(".tv .item .danmaku");

var $tvRank = $(".tv .rank .rank-detail");
var $tvRankCover = $(".tv .rank .rank-cover");
initTv();

function initTv(){
		for(var i=0;i<$tvRank.length;i++){ 
			$tvRank.eq(i).text(tvItem[i]["title"]).attr("title",tvItem[i]["title"]);
		}
		$tvRankCover.css("background-image",tvItem[0]["cover"]);

		for(var i=0;i<$tvCover.length;i++){ 
			$tvCover.eq(i).css("background-image",tvItem[i]["cover"]);	
			$tvDur.eq(i).text(tvItem[i]["duration"]);
			$tvTitle.eq(i).text(tvItem[i]["title"]).attr("title",tvItem[i]["title"]);
			$tvTotalPlayed.eq(i).text(tvItem[i]["totalPlayed"]);
			$tvDanmaku.eq(i).text(tvItem[i]["danmaku"]);
		}

		mMove("tv",$tvCover,$tvBar);
}

function mMove(category,$category,$bar){
		var itemWidth = parseInt($category.eq(0).css("width"));
		var offsetLeft0 = $category.eq(0).offset().left;
		var offsetLeft1 = $category.eq(1).offset().left;
		var offsetLeft2 = $category.eq(2).offset().left;
		var offsetLeft3 = $category.eq(3).offset().left;
		var shootTimer = "";

		$category.eq(0).on({"mouseenter":function(){$category.eq(0).css({"background-image":getEnterCover(0),"background-size":"800% 100%"});shooting(0);},
							"mouseleave":function(){$category.eq(0).css({"background-image":getLeaveCover(0),"background-size":"100% 100%"});clearInterval(shootTimer);$category.eq(0).find(".danmakuItem").remove();},
							"mousemove":function(e){
											var dis = e.pageX-offsetLeft0;
											$bar.eq(0).css("width",dis/itemWidth*100+"%");
											$category.eq(0).css({"background-position":getPos(dis/itemWidth)})
										}});
		$category.eq(1).on({"mouseenter":function(){$category.eq(1).css({"background-image":getEnterCover(1),"background-size":"800% 100%"});shooting(1);},
							"mouseleave":function(){$category.eq(1).css({"background-image":getLeaveCover(1),"background-size":"100% 100%"});clearInterval(shootTimer);$category.eq(1).find(".danmakuItem").remove();},
							"mousemove":function(e){
											var dis = e.pageX-offsetLeft1;
											$bar.eq(1).css("width",dis/itemWidth*100+"%");
											$category.eq(1).css({"background-position":getPos(dis/itemWidth)})
										}});
		$category.eq(2).on({"mouseenter":function(){$category.eq(2).css({"background-image":getEnterCover(2),"background-size":"800% 100%"});shooting(2);},
							"mouseleave":function(){$category.eq(2).css({"background-image":getLeaveCover(2),"background-size":"100% 100%"});clearInterval(shootTimer);$category.eq(2).find(".danmakuItem").remove();},
							"mousemove":function(e){
											var dis = e.pageX-offsetLeft2;
											$bar.eq(2).css("width",dis/itemWidth*100+"%");
											$category.eq(2).css({"background-position":getPos(dis/itemWidth)})
										}});
		$category.eq(3).on({"mouseenter":function(){$category.eq(3).css({"background-image":getEnterCover(3),"background-size":"800% 100%"});shooting(3);},
							"mouseleave":function(){$category.eq(3).css({"background-image":getLeaveCover(3),"background-size":"100% 100%"});clearInterval(shootTimer);$category.eq(3).find(".danmakuItem").remove();},
							"mousemove":function(e){
											var dis = e.pageX-offsetLeft3;
											$bar.eq(3).css("width",dis/itemWidth*100+"%");
											$category.eq(3).css({"background-position":getPos(dis/itemWidth)})
										}});
		$category.eq(4).on({"mouseenter":function(){$category.eq(4).css({"background-image":getEnterCover(4),"background-size":"800% 100%"});shooting(4);},
							"mouseleave":function(){$category.eq(4).css({"background-image":getLeaveCover(4),"background-size":"100% 100%"});clearInterval(shootTimer);$category.eq(4).find(".danmakuItem").remove();},
							"mousemove":function(e){
											var dis = e.pageX-offsetLeft0;
											$bar.eq(4).css("width",dis/itemWidth*100+"%");
											$category.eq(4).css({"background-position":getPos(dis/itemWidth)})
										}});
		$category.eq(5).on({"mouseenter":function(){$category.eq(5).css({"background-image":getEnterCover(5),"background-size":"800% 100%"});shooting(5);},
							"mouseleave":function(){$category.eq(5).css({"background-image":getLeaveCover(5),"background-size":"100% 100%"});clearInterval(shootTimer);$category.eq(5).find(".danmakuItem").remove();},
							"mousemove":function(e){
											var dis = e.pageX-offsetLeft1;
											$bar.eq(5).css("width",dis/itemWidth*100+"%");
											$category.eq(5).css({"background-position":getPos(dis/itemWidth)})
										}});
		$category.eq(6).on({"mouseenter":function(){$category.eq(6).css({"background-image":getEnterCover(6),"background-size":"800% 100%"});shooting(6);},
							"mouseleave":function(){$category.eq(6).css({"background-image":getLeaveCover(6),"background-size":"100% 100%"});clearInterval(shootTimer);$category.eq(6).find(".danmakuItem").remove();},
							"mousemove":function(e){
											var dis = e.pageX-offsetLeft2;
											$bar.eq(6).css("width",dis/itemWidth*100+"%");
											$category.eq(6).css({"background-position":getPos(dis/itemWidth)})
										}});
		$category.eq(7).on({"mouseenter":function(){$category.eq(7).css({"background-image":getEnterCover(7),"background-size":"800% 100%"});shooting(7);},
							"mouseleave":function(){$category.eq(7).css({"background-image":getLeaveCover(7),"background-size":"100% 100%"});clearInterval(shootTimer);$category.eq(7).find(".danmakuItem").remove();},
							"mousemove":function(e){
											var dis = e.pageX-offsetLeft3;
											$bar.eq(7).css("width",dis/itemWidth*100+"%");
											$category.eq(7).css({"background-position":getPos(dis/itemWidth)})
										}});

		function getEnterCover(index){ 
			if(category=="animate"){ 
				return aniItem[index]["shot"];
			}else if(category=="episode"){ 
				return epiItem[index]["shot"];
			}else if(category=="music"){ 
				return musItem[index]["shot"];
			}else if(category=="dance"){ 
				return danItem[index]["shot"];
			}else if(category=="game"){ 
				return gamItem[index]["shot"];
			}else if(category=="science"){ 
				return sciItem[index]["shot"];
			}else if(category=="life"){ 
				return lifItem[index]["shot"];
			}else if(category=="kichiku"){ 
				return kicItem[index]["shot"];
			}else if(category=="fashion"){ 
				return fasItem[index]["shot"];
			}else if(category=="ad"){ 
				return adItem[index]["shot"];
			}else if(category=="ent"){ 
				return entItem[index]["shot"];
			}else if(category=="movie"){ 
				return movItem[index]["shot"];
			}else if(category=="tv"){ 
				return tvItem[index]["shot"];
			}else if(category=="extend"){ 
				return extItem[index]["shot"];
			}
		}
		function getLeaveCover(index){ 
			if(category=="animate"){ 
				return aniItem[index]["cover"];
			}else if(category=="episode"){ 
				return epiItem[index]["cover"];
			}else if(category=="music"){ 
				return musItem[index]["cover"];
			}else if(category=="dance"){ 
				return danItem[index]["cover"];
			}else if(category=="game"){ 
				return gamItem[index]["cover"];
			}else if(category=="science"){ 
				return sciItem[index]["cover"];
			}else if(category=="life"){ 
				return lifItem[index]["cover"];
			}else if(category=="kichiku"){ 
				return kicItem[index]["cover"];
			}else if(category=="fashion"){ 
				return fasItem[index]["cover"];
			}else if(category=="ad"){ 
				return adItem[index]["cover"];
			}else if(category=="ent"){ 
				return entItem[index]["cover"];
			}else if(category=="movie"){ 
				return movItem[index]["cover"];
			}else if(category=="tv"){ 
				return tvItem[index]["cover"];
			}else if(category=="extend"){ 
				return extItem[index]["cover"];
			}
		}

		function getPos(disPer){ 
			if(disPer>=0&&disPer<0.12){ 
				return "0";
			}else if(disPer>=0.12&&disPer<0.24){ 
				return "100%";
			}else if(disPer>=0.24&&disPer<0.36){ 
				return "200%";
			}else if(disPer>=0.36&&disPer<0.48){ 
				return "300%";
			}else if(disPer>=0.48&&disPer<0.6){ 
				return "400%";
			}else if(disPer>=0.6&&disPer<0.72){ 
				return "500%";
			}else if(disPer>=0.72&&disPer<0.84){ 
				return "600%";
			}else if(disPer>=0.84&&disPer<=1){ 
				return "700%";
			}
		}

		function shooting(index){
			var i = 0;
			var j = 0;
			shootTimer = setInterval(function(){
				if(i<20){
					if(i%2==0){ 
						$category.eq(index).append("<div class=\"danmakuItem\">"+danmakuItem[Math.round((Math.random()*(danmakuItem.length-1)))]+"</div>");
						$category.eq(index).find(".danmakuItem").eq(i).css({"top":"10px","left":"100%"}).animate({"left":-itemWidth},6000-($category.find(".danmakuItem").eq(i).text().length*200),"linear");
						i++;
					}else{ 
						$category.eq(index).append("<div class=\"danmakuItem\">"+danmakuItem[Math.round((Math.random()*(danmakuItem.length-1)))]+"</div>");
						$category.eq(index).find(".danmakuItem").eq(i).css({"top":"24px","left":"100%"}).animate({"left":-itemWidth},6000-($category.find(".danmakuItem").eq(i).text().length*200),"linear");
						i++;
					} 					
				}else{
					if(j<danmakuItem.length){ 
						$category.eq(index).find(".danmakuItem").eq(j).css({"left":"100%"}).animate({"left":-itemWidth},6000-($category.find(".danmakuItem").eq(i).text().length*200),"linear");
						j++;
					}else{ 
						j = 0;
					}
					
				}
				
			},1400);
			
		}
}

//schedule
var schNew = [{"title":"泡芙小姐 第七季","cover":"url(images/schedule/new0.jpg)","epiCount":"10话"},{"title":"甜甜私房猫 第三季","cover":"url(images/schedule/new1.jpg)","epiCount":"2话"}
				,{"title":"乌冬面之国的金色毛球","cover":"url(images/schedule/new2.jpg)","epiCount":"1话"},{"title":"DAYS","cover":"url(images/schedule/new3.jpg)","epiCount":"14话"}
				,{"title":"ViVid Strike!","cover":"url(images/schedule/new4.jpg)","epiCount":"2话"},{"title":"魔法少女育成计划","cover":"url(images/schedule/new5.jpg)","epiCount":"2话"}
				,{"title":"战国鸟兽戏画","cover":"url(images/schedule/new6.jpg)","epiCount":"1话"},{"title":"3月的狮子","cover":"url(images/schedule/new7.jpg)","epiCount":"1话"}
				,{"title":"超自然9人组","cover":"url(images/schedule/new8.jpg)","epiCount":"1话"},{"title":"WWW.迷糊餐厅","cover":"url(images/schedule/new9.jpg)","epiCount":"2话"}
				,{"title":"终末的伊泽塔","cover":"url(images/schedule/new10.jpg)","epiCount":"2话"},{"title":"在下坂本，有何贵干？","cover":"url(images/schedule/new11.jpg)","epiCount":"13话"}];

var schMon = [{"title":"刀剑乱舞-花丸-","cover":"url(images/schedule/Mon0.jpg)","epiCount":"1话"},{"title":"齐木楠雄的灾难","cover":"url(images/schedule/Mon1.jpg)","epiCount":"13话"}
				,{"title":"我老婆是学生会长 第二季","cover":"url(images/schedule/Mon2.jpg)","epiCount":"1话"},{"title":"青鬼","cover":"url(images/schedule/Mon3.jpg)","epiCount":"1话"}
				,{"title":"星梦手记","cover":"url(images/schedule/Mon4.jpg)","epiCount":"1话"},{"title":"SHOW BY ROCK!! 第二季","cover":"url(images/schedule/Mon5.jpg)","epiCount":"1话"}
				,{"title":"12岁。第二季","cover":"url(images/schedule/Mon6.jpg)","epiCount":"13话"},{"title":"智龙迷城X","cover":"url(images/schedule/Mon7.jpg)","epiCount":"14话"}
				,{"title":"斯特拉的魔法","cover":"url(images/schedule/Mon8.jpg)","epiCount":"1话"}];

var schTue = [{"title":"TRICKSTER","cover":"url(images/schedule/Tue0.jpg)","epiCount":"1话"},{"title":"灵契","cover":"url(images/schedule/Tue1.jpg)","epiCount":"15话"}
				,{"title":"学园Handsome","cover":"url(images/schedule/Tue2.jpg)","epiCount":"1话"},{"title":"神装少女小缠","cover":"url(images/schedule/Tue3.jpg)","epiCount":"1话"}
				,{"title":"凹凸世界","cover":"url(images/schedule/Tue4.jpg)","epiCount":"16话"},{"title":"灼热的乒乓球娘","cover":"url(images/schedule/Tue5.jpg)","epiCount":"1话"}
				,{"title":"喵阿楞","cover":"url(images/schedule/Tue6.jpg)","epiCount":"2话"},{"title":"信长的忍者","cover":"url(images/schedule/Tue7.jpg)","epiCount":"1话"}
				,{"title":"美妙天堂 第三季","cover":"url(images/schedule/Tue8.jpg)","epiCount":"27话"},{"title":"少年阿贝 GO!GO!小芝麻","cover":"url(images/schedule/Tue9.jpg)","epiCount":"17话"}];

var schWed = [{"title":"双星之阴阳师","cover":"url(images/schedule/Wed0.jpg)","epiCount":"26话"},{"title":"夏目友人帐 伍","cover":"url(images/schedule/Wed1.jpg)","epiCount":"1话"}
				,{"title":"黑白来看守所","cover":"url(images/schedule/Wed2.jpg)","epiCount":"1话"},{"title":"奇异太郎少年的妖怪绘日记","cover":"url(images/schedule/Wed3.jpg)","epiCount":"1话"}
				,{"title":"魔法少女什么的已经够了啦。第二季","cover":"url(images/schedule/Wed4.jpg)","epiCount":"1话"},{"title":"动画锻炼！XX 同一屋檐下","cover":"url(images/schedule/Wed5.jpg)","epiCount":"1话"}
				,{"title":"口水三国","cover":"url(images/schedule/Wed6.jpg)","epiCount":"sp3"},{"title":"解谜之音","cover":"url(images/schedule/Wed7.jpg)","epiCount":"1话"}];

var schThu = [{"title":"火影忍者 疾风传","cover":"url(images/schedule/Thu0.jpg)","epiCount":"698话"},{"title":"画江湖之不良人 第二季","cover":"url(images/schedule/Thu1.jpg)","epiCount":"12话"}
				,{"title":"Regalia 三圣星","cover":"url(images/schedule/Thu2.jpg)","epiCount":"6话"},{"title":"无畏魔女","cover":"url(images/schedule/Thu3.jpg)","epiCount":"1话"}
				,{"title":"一课一练","cover":"url(images/schedule/Thu4.jpg)","epiCount":"1-2话"},{"title":"武庚纪","cover":"url(images/schedule/Thu5.jpg)","epiCount":"7话"}];

var schFri = [{"title":"在下坂本，有何贵干？","cover":"url(images/schedule/Fri0.jpg)","epiCount":"13话"},{"title":"镇魂街","cover":"url(images/schedule/Fri1.jpg)","epiCount":"22话"}
				,{"title":"我太受欢迎了该怎么办","cover":"url(images/schedule/Fri2.jpg)","epiCount":"1话"},{"title":"少女编号","cover":"url(images/schedule/Fri3.jpg)","epiCount":"1话"}
				,{"title":"时空使徒","cover":"url(images/schedule/Fri4.jpg)","epiCount":"2话"},{"title":"梦之祭","cover":"url(images/schedule/Fri5.jpg)","epiCount":"2话"}
				,{"title":"伯纳德小姐说。","cover":"url(images/schedule/Fri6.jpg)","epiCount":"1话"}];

var schSat = [{"title":"终末的伊泽塔","cover":"url(images/schedule/Sat0.jpg)","epiCount":"2话"},{"title":"Lostorage incited WIXOSS","cover":"url(images/schedule/Sat1.jpg)","epiCount":"1话"}
				,{"title":"舞武器舞乱伎 星之巨人","cover":"url(images/schedule/Sat2.jpg)","epiCount":"2话"},{"title":"Classica Loid","cover":"url(images/schedule/Sat3.jpg)","epiCount":"1话"}
				,{"title":"长骑美眉","cover":"url(images/schedule/Sat4.jpg)","epiCount":"1话"},{"title":"时间飞船24","cover":"url(images/schedule/Sat5.jpg)","epiCount":"2话"}];

var schSun = [{"title":"超自然9人组","cover":"url(images/schedule/Sun0.jpg)","epiCount":"1话"},{"title":"魔法少女育成计划","cover":"url(images/schedule/Sun1.jpg)","epiCount":"2话"}
				,{"title":"WWW.迷糊餐厅","cover":"url(images/schedule/Sun2.jpg)","epiCount":"2话"},{"title":"3月的狮子","cover":"url(images/schedule/Sun3.jpg)","epiCount":"1话"}
				,{"title":"DAYS","cover":"url(images/schedule/Sun4.jpg)","epiCount":"14话"},{"title":"乌冬面之国的金色毛球","cover":"url(images/schedule/Sun5.jpg)","epiCount":"1话"}
				,{"title":"ViVid Strike!","cover":"url(images/schedule/Sun6.jpg)","epiCount":"2话"},{"title":"超心动！艺术之星","cover":"url(images/schedule/Sun7.jpg)","epiCount":"1话"}];

var schDis = [{"title":"刀剑乱舞 花丸","cover":"url(images/schedule/screen0.jpg)"},{"title":"三月的狮子","cover":"url(images/schedule/screen1.jpg)"}];
var schDisItem = [{"title":"传颂之物 虚伪的假面","cover":"url(images/schedule/screenitem0.jpg)","epiTotal":"全25话"}
					,{"title":"花牌情缘","cover":"url(images/schedule/screenitem1.jpg)","epiTotal":"全25话"}
					,{"title":"人类衰退之后","cover":"url(images/schedule/screenitem2.jpg)","epiTotal":"全12话"}
					,{"title":"只要你说你爱我","cover":"url(images/schedule/screenitem3.jpg)","epiTotal":"全13话"}];

initSch();
function initSch(){ 

		var $itemBox = $(".schedule .item-box");
		var $weekday = $(".schedule .weekday");
		var appendStr = "<div class=\"item\"><div class=\"stage\"><div class=\"cover\"></div></div><div class=\"title\">title</div><div class=\"words\">更新至</div><div class=\"epiCount\"></div></div>";

		var curIndex = "";
		var weekdayClick = function(index){ 
				return function(){ 
					$itemBox.find(".item").remove();
					
					switch(index){ 
						case 0:
							if(curIndex>0){ 
								$weekday.eq(curIndex).text($weekday.eq(curIndex).text().substring(1));
							}
							curIndex = 0;
							$weekday.eq(0).prepend("<div class=\"icon\" style=\"background-position:-36px -36px;\"></div>").siblings().find(".icon").remove()
							for(var i=0;i<schNew.length;i++){ 
								$itemBox.append(appendStr);
							}
							var $cover = $itemBox.find(".cover");
							var $title = $itemBox.find(".title");
							var $epiCount = $itemBox.find(".epiCount");
							for(var i=0;i<$cover.length;i++){ 
								$cover.eq(i).css("background-image",schNew[i]["cover"]);
								$title.eq(i).text(schNew[i]["title"]);
								$epiCount.eq(i).text(schNew[i]["epiCount"]);
							}
							break;
						case 1:
							if(curIndex>0){ 
								$weekday.eq(curIndex).text($weekday.eq(curIndex).text().substring(1));
							}
							curIndex = 1;
							$weekday.eq(1).text("周一").prepend("<div class=\"icon\" style=\"background-position:-164px -36px;\"></div>").siblings().find(".icon").remove();
							for(var i=0;i<schMon.length;i++){ 
								$itemBox.append(appendStr);
							}
							var $cover = $itemBox.find(".cover");
							var $title = $itemBox.find(".title");
							var $epiCount = $itemBox.find(".epiCount");
							for(var i=0;i<$cover.length;i++){ 
								$cover.eq(i).css("background-image",schMon[i]["cover"]);
								$title.eq(i).text(schMon[i]["title"]);
								$epiCount.eq(i).text(schMon[i]["epiCount"]);
							}
							break;
						case 2:
							if(curIndex>0){ 
								$weekday.eq(curIndex).text($weekday.eq(curIndex).text().substring(1));
							}
							curIndex = 2;
							$weekday.eq(2).text("周二").prepend("<div class=\"icon\" style=\"background-position:-292px -36px;\"></div>").siblings().find(".icon").remove();
							for(var i=0;i<schTue.length;i++){ 
								$itemBox.append(appendStr);
							}
							var $cover = $itemBox.find(".cover");
							var $title = $itemBox.find(".title");
							var $epiCount = $itemBox.find(".epiCount");
							for(var i=0;i<$cover.length;i++){ 
								$cover.eq(i).css("background-image",schTue[i]["cover"]);
								$title.eq(i).text(schTue[i]["title"]);
								$epiCount.eq(i).text(schTue[i]["epiCount"]);
							}
							break;
						case 3:
							if(curIndex>0){ 
								$weekday.eq(curIndex).text($weekday.eq(curIndex).text().substring(1));
							}
							curIndex = 3;
							$weekday.eq(3).text("周三").prepend("<div class=\"icon\" style=\"background-position:-420px -36px;\"></div>").siblings().find(".icon").remove();
							for(var i=0;i<schWed.length;i++){ 
								$itemBox.append(appendStr);
							}
							var $cover = $itemBox.find(".cover");
							var $title = $itemBox.find(".title");
							var $epiCount = $itemBox.find(".epiCount");
							for(var i=0;i<$cover.length;i++){ 
								$cover.eq(i).css("background-image",schWed[i]["cover"]);
								$title.eq(i).text(schWed[i]["title"]);
								$epiCount.eq(i).text(schWed[i]["epiCount"]);
							}
							break;
						case 4:
							if(curIndex>0){ 
								$weekday.eq(curIndex).text($weekday.eq(curIndex).text().substring(1));
							}
							curIndex = 4;
							$weekday.eq(4).text("周四").prepend("<div class=\"icon\" style=\"background-position:-548px -36px;\"></div>").siblings().find(".icon").remove();
							for(var i=0;i<schThu.length;i++){ 
								$itemBox.append(appendStr);
							}
							var $cover = $itemBox.find(".cover");
							var $title = $itemBox.find(".title");
							var $epiCount = $itemBox.find(".epiCount");
							for(var i=0;i<$cover.length;i++){ 
								$cover.eq(i).css("background-image",schThu[i]["cover"]);
								$title.eq(i).text(schThu[i]["title"]);
								$epiCount.eq(i).text(schThu[i]["epiCount"]);
							}
							break;
						case 5:
							if(curIndex>0){ 
								$weekday.eq(curIndex).text($weekday.eq(curIndex).text().substring(1));
							}
							curIndex = 5;
							$weekday.eq(5).text("周五").prepend("<div class=\"icon\" style=\"background-position:-676px -36px;\"></div>").siblings().find(".icon").remove();
							for(var i=0;i<schFri.length;i++){ 
								$itemBox.append(appendStr);
							}
							var $cover = $itemBox.find(".cover");
							var $title = $itemBox.find(".title");
							var $epiCount = $itemBox.find(".epiCount");
							for(var i=0;i<$cover.length;i++){ 
								$cover.eq(i).css("background-image",schFri[i]["cover"]);
								$title.eq(i).text(schFri[i]["title"]);
								$epiCount.eq(i).text(schFri[i]["epiCount"]);
							}
							break;
						case 6:
							if(curIndex>0){ 
								$weekday.eq(curIndex).text($weekday.eq(curIndex).text().substring(1));
							}
							curIndex = 6;
							$weekday.eq(6).text("周六").prepend("<div class=\"icon\" style=\"background-position:-804px -36px;\"></div>").siblings().find(".icon").remove();
							for(var i=0;i<schSat.length;i++){ 
								$itemBox.append(appendStr);
							}
							var $cover = $itemBox.find(".cover");
							var $title = $itemBox.find(".title");
							var $epiCount = $itemBox.find(".epiCount");
							for(var i=0;i<$cover.length;i++){ 
								$cover.eq(i).css("background-image",schSat[i]["cover"]);
								$title.eq(i).text(schSat[i]["title"]);
								$epiCount.eq(i).text(schSat[i]["epiCount"]);
							}
							break;
						case 7:
							if(curIndex>0){ 
								$weekday.eq(curIndex).text($weekday.eq(curIndex).text().substring(1));
							}
							curIndex = 7;
							$weekday.eq(7).text("周日").prepend("<div class=\"icon\" style=\"background-position:-932px -36px;\"></div>").siblings().find(".icon").remove();
							for(var i=0;i<schSun.length;i++){ 
								$itemBox.append(appendStr);
							}
							var $cover = $itemBox.find(".cover");
							var $title = $itemBox.find(".title");
							var $epiCount = $itemBox.find(".epiCount");
							for(var i=0;i<$cover.length;i++){ 
								$cover.eq(i).css("background-image",schSun[i]["cover"]);
								$title.eq(i).text(schSun[i]["title"]);
								$epiCount.eq(i).text(schSun[i]["epiCount"]);
							}
							break;
						default:
							return false;
					}
					$weekday.eq(index).addClass("selected").siblings().removeClass("selected");
				//	$weekday.eq(index).prepend("<div class=\"icon\"></div>").siblings().find(".icon").remove();
				}
		}

		for(var i=0;i<$weekday.length;i++){ 
			$weekday.eq(i).on("click",weekdayClick(i));
		}
		$weekday.eq(0).trigger("click");

		var $schDisStage = $(".schedule .schedule-display .stage");
		var $schDisCover = $(".schedule .schedule-display .screen .cover");
		var $schDisTitle = $(".schedule .schedule-display .screen .title");
		var $schDisBarOuter = $(".schedule .schedule-display .bar-outer");
		var $schDisBarInner = $(".schedule .schedule-display .bar");
		var disIndex = 0;
		var disTimer = "";

		var disInterval = function(){ 
			return function(){ 
				switch(disIndex){ 
					case 0:
						$schDisBarOuter.eq(1).trigger("click");
						disIndex = 1;
						break;
					case 1:
						$schDisBarOuter.eq(0).trigger("click");
						disIndex = 0;
						break;
					default:
						return false;
				}
			}
		}
		var barEnter = function(index){ 
			return function(){
				disIndex = index;
				clearInterval(disTimer); 
				$schDisStage.css({"left":index*-100+"%"});
				$schDisTitle.text(schDis[index]["title"]);
				$schDisBarOuter.eq(index).addClass("selected-outer").siblings().removeClass("selected-outer");
				$schDisBarInner.eq(index).addClass("selected-inner").parent().siblings().find(".bar").removeClass("selected-inner");
			}
		}
		var barLeave = function(){ 
			return function(){ 
				disTimer = setInterval(disInterval(),5000);
			}
		}
		var barClick = function(index){ 
			return function(){
				disIndex = index; 
				$schDisStage.css({"left":index*-100+"%"});
				$schDisTitle.text(schDis[index]["title"]);
				$schDisBarOuter.eq(index).addClass("selected-outer").siblings().removeClass("selected-outer");
				$schDisBarInner.eq(index).addClass("selected-inner").parent().siblings().find(".bar").removeClass("selected-inner");
			}
		}

		for(var i=0;i<$schDisCover.length;i++){
			$schDisCover.eq(i).css("background-image",schDis[i]["cover"]); 
			$schDisBarOuter.eq(i).on({"mouseenter":barEnter(i),"mouseleave":barLeave(),"click":barClick(i)});
		}
		$schDisBarOuter.eq(0).trigger("click");
		disTimer = setInterval(disInterval(),5000);

		var $schItemCover = $(".schedule .schedule-display .item .cover");
		var $schItemEpiTal = $(".schedule .schedule-display .item .epiTotal");
		var $schItemTitle = $(".schedule .schedule-display .item .title");
		for(var i=0;i<$schItemCover.length;i++){ 
			$schItemCover.eq(i).css("background-image",schDisItem[i]["cover"]).attr("title",schDisItem[i]["title"]);
			$schItemEpiTal.eq(i).text(schDisItem[i]["epiTotal"]);
			$schItemTitle.eq(i).text(schDisItem[i]["title"]).attr("title",schDisItem[i]["title"]);
		}
		
}

//anchor
initAnc();
function initAnc(){
		var $anchor = $("#anchor-ul");
		var $anchorLi = $("#anchor-ul .anchor-li");
		var $contentWrapper = $(".content-wrapper").eq(0);
		var anchorLeft = $contentWrapper.offset().left + parseInt($contentWrapper.css("width")) + 5;
		$anchor.css({"left":anchorLeft});
		var $category = $(".category");
		var contentTop = $contentWrapper.offset().top;
		var aniTop = $category.eq(1).offset().top - 200;
		var epiTop = $category.eq(2).offset().top - 200;
		var musTop = $category.eq(3).offset().top - 200;
		var danTop = $category.eq(4).offset().top - 200;
		var gamTop = $category.eq(5).offset().top - 200;
		var sciTop = $category.eq(6).offset().top - 200;
		var lifTop = $category.eq(7).offset().top - 200;
		var kicTop = $category.eq(8).offset().top - 200;
		var fasTop = $category.eq(9).offset().top - 200;
		var adTop = $category.eq(10).offset().top - 200;
		var entTop = $category.eq(11).offset().top - 200;
		var movTop = $category.eq(12).offset().top - 200;
		var tvTop = $category.eq(13).offset().top - 200;

		window.onscroll = function(){ 
			if($(window).scrollTop()>=contentTop){ 
				$anchor.css("top",0);
				$anchorLi.removeClass("selected");
			}else if($(window).scrollTop()<contentTop){ 
				$anchor.css("top","231px");
			}

			if($(window).scrollTop()>=aniTop && $(window).scrollTop()<epiTop){ 
				$anchorLi.eq(0).addClass("selected").siblings().removeClass("selected");
			}else if($(window).scrollTop()>=epiTop && $(window).scrollTop()<musTop){ 
				$anchorLi.eq(1).addClass("selected").siblings().removeClass("selected");
			}else if($(window).scrollTop()>=musTop && $(window).scrollTop()<danTop){ 
				$anchorLi.eq(2).addClass("selected").siblings().removeClass("selected");
			}else if($(window).scrollTop()>=danTop && $(window).scrollTop()<gamTop){ 
				$anchorLi.eq(3).addClass("selected").siblings().removeClass("selected");
			}else if($(window).scrollTop()>=gamTop && $(window).scrollTop()<sciTop){ 
				$anchorLi.eq(4).addClass("selected").siblings().removeClass("selected");
			}else if($(window).scrollTop()>=sciTop && $(window).scrollTop()<lifTop){ 
				$anchorLi.eq(5).addClass("selected").siblings().removeClass("selected");
			}else if($(window).scrollTop()>=lifTop && $(window).scrollTop()<kicTop){ 
				$anchorLi.eq(6).addClass("selected").siblings().removeClass("selected");
			}else if($(window).scrollTop()>=kicTop && $(window).scrollTop()<fasTop){ 
				$anchorLi.eq(7).addClass("selected").siblings().removeClass("selected");
			}else if($(window).scrollTop()>=fasTop && $(window).scrollTop()<adTop){ 
				$anchorLi.eq(8).addClass("selected").siblings().removeClass("selected");
			}else if($(window).scrollTop()>=adTop && $(window).scrollTop()<entTop){ 
				$anchorLi.eq(9).addClass("selected").siblings().removeClass("selected");
			}else if($(window).scrollTop()>=entTop && $(window).scrollTop()<movTop){ 
				$anchorLi.eq(10).addClass("selected").siblings().removeClass("selected");
			}else if($(window).scrollTop()>=movTop && $(window).scrollTop()<tvTop){ 
				$anchorLi.eq(11).addClass("selected").siblings().removeClass("selected");
			}else if($(window).scrollTop()>=tvTop){ 
				$anchorLi.eq(12).addClass("selected").siblings().removeClass("selected");
			}
		};
		var $body = $("body");
		var $html = $("html");
		var anchorClick = function(index){ 
			return function(){
				if(index==$anchorLi.length-1){ 
					$body.animate({"scrollTop":0},400);
					$html.animate({"scrollTop":0},400);
				}else{ 
					$body.animate({"scrollTop":($category.eq(index+1).offset().top)},400);
					$html.animate({"scrollTop":($category.eq(index+1).offset().top)},400);
				}
				
			}
		}
		for(var i=0;i<$anchorLi.length;i++){ 
			$anchorLi.eq(i).on("click",anchorClick(i));
		}
}
