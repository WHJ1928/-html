

var i = 2 ;

function changeImg() {
	
	var url ="http://127.0.0.1:8020/web.07-24/img/images/xiaomi/max/"+i+".jpg"
		
	$('#max-img').get(0).src = url;
	
	i++;
	if( i == 5) i = 1;
}
	
//当页面加载时
$(function(){

	setInterval( "changeImg()" , 2000 )
	
})

