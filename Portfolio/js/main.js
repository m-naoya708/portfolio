$(function(){
	$('a[href^="#"]').on('click', function(){
		var speed = 500;	// 変数（入れ物・箱）
		var link = $(this).attr('href');
		var target = $(link == "#" ? 'html' : link);
		var position = target.offset().top;
		$("html, body").animate({scrollTop : position},speed,"swing");
		return false;
	});


	$(window).on('scroll',function(){
		var y = $(this).scrollTop();
		// console.log(y); 

		$('section').each(function(i,e){
			var posY = $(this).offset().top;  //各セクションの上端位置の取得
			
			var offset = $(window).height() * 2 / 3;
			// console.log(offset);

			// if(y >= posY - offset){
			// 	$(this).addClass('active');
			// }else{
			// 	$(this).removeClass('active');
			// }	
			// 三項演算子
			(y >= posY - offset) ? $(this).addClass('active') : $(this).removeClass('active');
		});
	});

});
