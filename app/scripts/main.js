$('a[href^="#"]').click(function() {
	var the_id = $(this).attr("href");
	$('html, body').animate({
		scrollTop: $(the_id).offset().top
	}, 'slow');
	return false;
});

 $(".rslides").responsiveSlides({
 	 timeout: 3000,  
 	  pager: true,
 });



$('.menu li a,.hamburger').click(function() {
	$('.hamburger').toggleClass('active');
	$('.menu').toggleClass('show');

})