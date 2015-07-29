(function($, undefined){
	// $(function(){
	// 	$("#first").css("color", "red");
	// });

	$(function(){
		$("#iTab").click(function(event){
			$("#iBlock").css("display", "block");
			$("#pBlock").css("display", "none");

			$("#iTab").removeClass("infoTab");
			$("#iTab").addClass("activeTab");
			$("#iBlock").removeClass("infoBlock");
			$("#iBlock").addClass("activeBlock");
		});

		$("#pTab").click(function(event){
			$("#iBlock").css("display", "none");
			$("#pBlock").css("display", "block");
		});
	});
})(jQuery);