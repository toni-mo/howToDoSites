(function($, undefined){

	$(function(){
		$(".firstTab").click(function(event){
		$(".firstBlock").css("display", "block");
		$(".secondBlock").css("display", "none");

		$(".firstTab").addClass("activeTab");
	});
	$(".secondTab").click(function(event){
		$(".firstBlock").css("display", "block");
		$(".secondBlock").css("display", "block");

		$(".firstTab").removeClass("activeTab");
	});

	$(".innerInlineBlock").click(function(event){
		$(".innerInlineBlock").addClass("innActiveTab");
		$(".secondInnerBlock").removeClass("innActiveTab");

		$(".anotherLowerBlock").css("display", "none");
		$(".lowerBlock").css("display", "block");
	});

	$(".secondInnerBlock").click(function(event){
		$(".innerInlineBlock").removeClass("innActiveTab");
		$(".secondInnerBlock").addClass("innActiveTab");

		$(".lowerBlock").css("display", "none");
		$(".anotherLowerBlock").css("display", "block");
	});

	node=document.getElementById('hi').parentNode.parentNode;
	console.log(node);

	});	
})(jQuery);