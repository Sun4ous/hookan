$(document).ready(function () {
	$('.header_burger').click(function (event) {
		$('.header_burger, .header_menu, .hookan_logo, .social').toggleClass('active');
		$('body').toggleClass('lock');
	});
});