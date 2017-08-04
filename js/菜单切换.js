$(function(){
		

	/* 控制切换 */	
	$(".box").click(function(){
		
		/* 将菜单图标都改为 normal */
		$(".box").each(function(){
			$(this).find("img").attr("src" , $(this).data("normal"));
		})
		
		/* 再将被点击图标改为 press */
		var Press = $(this).data("press")
		$(this).find("img").attr("src" , iocnPress)
		
		
		
		/* 获取 中间部分的层   切换页面 */

		var target = $(this).data("target")
		$("#chat , #friend , #discovery , #me").each(function(){
			
			if( $(this)[0].id==target ) {
				$(this).show(200);
			} else {
				$(this).hide();
			}
		
		})