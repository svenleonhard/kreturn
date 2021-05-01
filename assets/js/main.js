/*
	Twenty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $header.height() + 10; }
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			expandMode: (browser.mobile ? 'click' : 'hover')
		});

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

	// Week Count
	
	$("#week-count").text(getWeeks());
	$("#progress-label").text(getProgressLabel());
	document.getElementById("progress").value = progress();
	document.getElementById("progress").max = sumWeeks();
	$("#weekends").text(getWeeks());
	$("#working-days").text(getWorkingDays());

})(jQuery);

function getWeeks() {
	return Math.round(Math.abs(targetReturn() - today()) * 0.00000000165);
}

function getDays() {
	return Math.round(Math.abs(targetReturn() - today()) * 0.00000001157407);
}

function getWorkingDays() {
	return getDays() - 2 * getWeeks();
}

function sumWeeks() {
	return Math.round(Math.abs(targetReturn() - start()) * 0.00000000165);
}

function getProgressLabel() {
	return progress() + " von " + "insgesamt " + sumWeeks() + " Wochen geschafft"
}

function progress() {
	return Math.round(Math.abs(today() - start()) * 0.00000000165);
}

function today() {
	return new Date();
}

function targetReturn() {
	return new Date("Feb 28 2022");
}

function start() {
	return new Date("Apr 25 2021")
}