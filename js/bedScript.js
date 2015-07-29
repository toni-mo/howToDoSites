(function($, undefined){

	$(function(){
		$("#sleepNumberBeds").click(function(event){
			$(".innerList").slideToggle();
			$("#sleepNumberBeds").toggleClass("activeItem")
		});
	});
})(jQuery);