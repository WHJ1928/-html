$(function(){
	
	
	
//	/*  控制顶层弹出菜单层 : start  */
//	/* 弹出层  和 弹出小三角   初始应该为 隐藏  */
	$(".popup").hide();

	$('#add').click(function(){
		$(".popup").toggle(200);
		
	})
	/*  控制顶层弹出菜单层 : end  */
	
	// 点击弹出层本身   也会消失
	$(".popup").click(function(){
		$(".popup").hide();
	});
	
	
	
})