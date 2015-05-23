var $ = jQuery;

(function($) {

function contactForm() {

			$('#submit-form').click(function(){
				var $this = $(this);
				$('#contactform').submit(function(e) {
					e.preventDefault();
					$.post('php/contact.php', $('#contactform').serialize(), function(data){
						$('.form-message').html(data).animate({opacity: 1}, 500, function(){
							if ($(data).is('.send-true')){
								$('#contactform').trigger( 'reset' );
							}
						});
					});
				});
			});

			//Under Construction (write to file)
			$('.join-us').click(function(){
				var $this = $(this);s
				$this.closest('.under-construction').submit(function(e) {
					e.preventDefault();
					$.ajax({
						url  : 'php/u-c.php',
						type : 'POST',
						data : $this.closest('.under-construction').serialize(),
						success : function(data){
							$this.closest('.under-construction').find('.form-message').html(data).animate({opacity: 1}, 500, function(){
								if ($(data).is('.send-true')){
									$this.closest('.under-construction').trigger('reset');
									$this.closest('.under-construction').find('.form-message').animate({opacity: 0}, 1000, function(){
										$this.closest('.under-construction').find('.form-message').html('');
									});
								}
							});
						}
					});
				});
			});
			
			if($(".mailchimp").length>0) {
				$('.mailchimp').ajaxChimp({
					url: '//animaltronix.us10.list-manage.com/subscribe/post?u=1282f8150c3ca30b5c76e4296&amp;id=75a4c59551'
				});
			}
		}
})(jQuery);