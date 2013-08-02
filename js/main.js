$(document).ready(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		animationSpeed: 2000,

		// reverse: true, 
	});

	var $window = $(window); //You forgot this line in the above example

	var isChrome = window.chrome;
	if(isChrome) {

	   // is chrome 
	   
	} else {

		$('[data-type="parallax"]').each(function(){
		var $bgobj = $(this); // assigning the object
		$(window).scroll(function() {
			var yPos = $window.scrollTop() - ( $window.scrollTop() / $bgobj.data('speed') );
			// var yPos = $window.scrollTop();
			console.log(yPos);
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
			var coords = yPos;
			// Move the background
			// $bgobj.css({ backgroundPosition: coords });
			$bgobj.css({ 'top': coords+'px' });
			});
		});

	}

}); 
