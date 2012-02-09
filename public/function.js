// parallax effect

function parallax(){
	$(window).scroll(function(){
		var y = jQuery(this).scrollTop();


		// background
		$('#bg1b').css('opacity', -y / 500 + 2.5 );
	
		$('#bg1').css('background-position', '50% ' + parseInt( -y / 10 + 0 ) + 'px');
		$('#bg1b').css('background-position', '50% ' + parseInt( -y / 10 + 0 ) + 'px');
		$('#bg2').css('background-position', '50% ' + parseInt( -y / 15 - 50 ) + 'px');
		$('#bg3').css('background-position', '50% ' + parseInt( -y / 10 + 100 ) + 'px');
		$('#bg4').css('background-position', '50% ' + parseInt( -y / 15 + 0 ) + 'px');
		$('#bg5').css('background-position', '50% ' + parseInt( -y / 20 + 10 ) + 'px');


		// item
		$('#beer1').css('background-position', '10% ' + parseInt( -y / 3 + 1050 ) + 'px');
		$('#beer2').css('background-position', '90% ' + parseInt( -y / 3 + 1150 ) + 'px');
		$('#baken').css('background-position', '75% ' + parseInt( -y / .8 + 3200 ) + 'px');
		$('#satutaba1').css('background-position', '40% ' + parseInt( -y / .5 + 4800 ) + 'px');
		$('#pepe').css('background-position', '70% ' + parseInt( -y / .6 + 4600 ) + 'px');
	
		$('#member').css('background-position', '10% ' + parseInt( -y / 3 + 1200 ) + 'px');


	});
}