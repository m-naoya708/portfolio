console.log('test');


// DOM （Document of Model => HTML/CSS)の読込完了後(※画像は含まない)
$(function(){


	$(window).on('scroll',  function(){
		// console.log('scroll');
		var pos = $(this).scrollTop();
		var btm = pos + $(this).height();

		$('.situations_item').each(function(i,e){
			if(btm > $(this).offset().top){
				$(this).addClass('active');
			}else{
				$(this).removeClass('active');
			}

		})
	});




});