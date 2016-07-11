$(function(){
	navFocus();
	$('.img-wrap a img').each(function(index){
		$(this).parent().css({'background-image':'url('+$(this).attr('src')+')'}).attr('href',$(this).attr('src'));
	});
});