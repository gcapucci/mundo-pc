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
