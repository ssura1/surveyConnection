$(document).ready(function(){
	$('.cateBottom #btnFirst').bindGetFirst();
	$('.cateBottom #btnPrev').bindGetPrev();
	$('.cateBottom #btnNext').bindGetNext();
	$('.cateBottom #btnLast').bindGetLast();
	$('.categories > ul button').bindGetByCategory();
	$('.categories > ul > li:first-child > button').trigger('click');
})