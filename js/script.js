$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	}),
	$('.slider').slick({
		arrows: false,
		dots: true,
		speed: 300,
		slidesToShow:1,
	});
});
$(function(){
	$('a[href^="#"]').click(function(){
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
	return false;
	});
});