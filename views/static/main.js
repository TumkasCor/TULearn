
(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$main = $('#main');

			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

			$('form').placeholder();

			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

			var $nav = $('#nav');

			if ($nav.length > 0) {

					$main
						.scrollex({
							mode: 'top',
							enter: function() {
								$nav.addClass('alt');
							},
							leave: function() {
								$nav.removeClass('alt');
							},
						});

					var $nav_a = $nav.find('a');

					$nav_a
						.scrolly({
							speed: 1000,
							offset: function() { return $nav.height(); }
						})
						.on('click', function() {

							var $this = $(this);

								if ($this.attr('href').charAt(0) != '#')
									return;

								$nav_a
									.removeClass('active')
									.removeClass('active-locked');

							
								$this
									.addClass('active')
									.addClass('active-locked');

						})
						.each(function() {

							var	$this = $(this),
								id = $this.attr('href'),
								$section = $(id);
								if ($section.length < 1)
									return;

								$section.scrollex({
									mode: 'middle',
									initialize: function() {


											if (skel.canUse('transition'))
												$section.addClass('inactive');

									},
									enter: function() {

											$section.removeClass('inactive');

											if ($nav_a.filter('.active-locked').length == 0) {

												$nav_a.removeClass('active');
												$this.addClass('active');

											}

											else if ($this.hasClass('active-locked'))
												$this.removeClass('active-locked');

									}
								});

						});

			}


			$('.scrolly').scrolly({
				speed: 1000
			});

	});

})(jQuery);