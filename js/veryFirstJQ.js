
// jQuery(document).ready(function(){
// 			jQuery("h2").css("color", "red");
// 		});

(function($, undefined){

	$(function(){
		$("h2").css("color", "red");
	});

	$(function(){
		$("#block.border").css({
			"color": "black",
			"font-size": "30px",
			"font-family": "Arial",
			"border": "3px solid black"
		});
	});

	$(function(){
		$("#block").hasClass("border");
	});

	$(function(){
		$("#block").addClass("border");
	});

	$(function(){
		$("#block").toggleClass("notice active");
	});

	// $(function(){
	// 	$("#block").hasClass("active");
	// });

	// $(function(){
	// 	$("#block").removeClass("active notice");
	// });

	
	// $(function(){
	// 	$("#menu li a").click(function(event){
	// 		alert("Hello");
	// 		event.stopPropagation();
	// 	});
	// });

	$(function(){
		$("#menu").click(function(event){
			alert("Hello");
		});	
	});


		//THIS IS JQuery ANIMATION
	



	// $(function(){
	// 	$("#btn").click(function(event){
	// 		if($("#menu").css("display")!="none")
	// 		$("#menu").hide('slow');
	// 	else
	// 		$("#menu").show('slow');
	// 	});
	// });

	// $(function(){
	// 	$("#btn").click(function(event){
	// 		$("#menu").toggle('slow');
	// 	});
	// });
	
	$(function(){
		$("#btn").click(function(event){
			$("#menu").slideToggle('slow');
		});
	});


	$(function(){
		$("#btn-block").click(function(event){
			$(".yellowBlock").animate({
				'opacity': '-=0.1',
				'height': '+=10px',
				
			});
		});
	});

	$(function(){
		$("#sleepNumberBeds").click(function(event){
			$("#items1").slideToggle();
			event.preventDefault();
		});
		$("#specialityBeds").click(function(event){
			$("#items2").slideToggle();
			event.preventDefault();
		});
		$("#pillowsAndBeddings").click(function(event){
			$("#items3").slideToggle();
			event.preventDefault();
		});

		// NEW MENU CODE
		
		$("#vegetableTitle").click(function(event){
			$("#vegetableList").slideToggle();
		});

		$("#fruitTitle").click(function(event){
			$("#fruitList").slideToggle();
		});

		$("#milkTitle").click(function(event){
			$("#milkList").slideToggle();
		});
		
	});
	
})(jQuery);