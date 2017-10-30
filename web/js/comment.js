$(function(){
	//星级
	$("#starLevel").raty({
		number:5,
        starOn : 'img/star-on.png',  
        starOff : 'img/star-off.png',
		readOnly:false,
		size:20,
		score:2,
		hints:['不满意','基本满意','比较满意','满意','非常满意'],
	});
});