(function($, undefined){
	// $(function(){
	// 	$("#first").css("color", "red");
	// });

	$(function(){
		$("#iTab").click(function(event){
			$("#iBlock").css("visibility", "visible");
			$("#pBlock").css("visibility", "hidden");
		});

		$("#pTab").click(function(event){
			$("#iBlock").css("visibility", "hidden");
			$("#pBlock").css("visibility", "visible");
		});
	});
})(jQuery);