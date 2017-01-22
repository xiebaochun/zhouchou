$(function(){
	$('header .back').click(function(){
		history.back(); 
	});
	setTimeout(function(){
		window.location && window.location.reload();
	},2000);
});