jQuery(function($) {

	// Ajax contact
	var form = $('.contact-form');
	form.submit(function() {
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		}, 'json');
		return false;
	});

	// Goto Top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop : $("body").offset().top
		}, 500);
	});
	// End goto top
	$.fn.extend({
		scrollToElement : function(item) {
			var offset = item.position().top + this.scrollTop();
			this.animate({
				scrollTop : offset
			}, 1000);
		},
		scrollEnd : function() {
			$(this).each(function(i, e) {
				$(e).animate({
					scrollTop : e.scrollHeight
				}, 1000);
			});

		}

	});

});