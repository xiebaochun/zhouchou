$(function(){
	$('header .back').click(function(){
		history.back(); 
	});
	if(window.location.search.indexOf('dev=true') > 0){
		setTimeout(function(){
			window.location && window.location.reload();
		},2000);
	}
});