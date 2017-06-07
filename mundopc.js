<<<<<<< HEAD
$("a[href^='#']").click(function(e) {
	e.preventDefault();

	var position = $($(this).attr("href")).offset().top;

	
    
$("body, html").animate({
		scrollTop: position -200
	}, 1000 );
});

 
$(".accordion").on("click", ".accordion-header", function() {
 	$(this).toggleClass("active").next().slideToggle();
 });





=======
$("a[href^='#']").click(function(e) {
	e.preventDefault();

	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}, 1000 );
});

 
$(".accordion").on("click", ".accordion-header", function() {
 	$(this).toggleClass("active").next().slideToggle();
 });





>>>>>>> e4b70b4cdbac560de9850034c22d1aee6065d8c0
