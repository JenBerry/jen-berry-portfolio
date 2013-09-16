$(document).ready(function(){

//home animation
	$("#title-i-am").fadeIn(1000,function(){
		$("#title-web-developer").fadeIn(1000,function(){
			$("#title-obsessed").slideDown(500);
		});
	});

//skills detail sliders
	function deselectSkill(){
		var $skillDescription = $('.skills-description');
		$skillDescription.find('p').animate({
				'opacity':0
			},500);
		$skillDescription.slideUp(500);
		$skillDescription.find('p').css("display","none");
		$("#skills circle").css(
			'stroke', '#d5d5d5'
		);
	}

	function selectSkill(circle, paragraph, box){
		deselectSkill();
		paragraph.css("display","block");
		box.slideDown(500, function(){
			paragraph.animate({
				'opacity':1
			},500);
		});
		circle.css(
			'stroke', '#fc5703'
		);
	}

	$("#skill1").on('click',function(){
		selectSkill($(this),$("#skill1-desc"),$("#top-left"));
	});

	$("#skill2").on('click',function(){
		selectSkill($(this),$("#skill2-desc"),$("#top-right"));
	});

	$("#skill3").on('click',function(){
		selectSkill($(this),$("#skill3-desc"),$("#bottom-right"));
	});

	$("#skill4").on('click',function(){
		selectSkill($(this),$("#skill4-desc"),$("#bottom-left"));
	});

	$("#skill5").on('click',function(){
		selectSkill($(this),$("#skill5-desc"),$("#bottom-left"));
	});

	$("#skill6").on('click',function(){
		selectSkill($(this),$("#skill6-desc"),$("#top-left"));
	});



// blog sliders
	var activeBlog=0;
	$(".blog-header").on('click',function(){
		var index = $(".blog-header").index(this) +1;
		var $blogIndex = $("#blog li:nth-child("+index+")");
		
		if (activeBlog === index)
		{
			$blogIndex.find('.blog-content').slideUp("slow");
			$blogIndex.find('.blog-header').css("background-color","#313131");
			activeBlog=0;
		}
		else
		{
			var $blogActive = $("#blog li:nth-child("+activeBlog+")");
			$blogActive.find('.blog-content').slideUp("slow");
			$blogIndex.find('.blog-content').slideDown("slow");
			$blogActive.find('.blog-header').css("background-color","#313131");
			$blogIndex.find('.blog-header').css("background-color","#fc5703");
			activeBlog=index;
		}
	});

//project sliders
	var activeProject=0;
	var $projectBrief = $("#projects .project-brief");
	$projectBrief.find('svg, .live-link').on('click',function(event){
		event.stopPropagation();
	});

	$projectBrief.on('click',function(){
		var index = $projectBrief.index(this) + 1;
		if(activeProject !== index)
		{
			$("#projects li:nth-child("+activeProject+") .project-details")
				.slideUp("slow");
			$("#projects li:nth-child("+index+") .project-details")
				.slideDown("slow");
			activeProject=index;
		}
		else
		{
			$("#projects li:nth-child("+index+") .project-details")
				.slideUp("slow");
			activeProject = 0;
		}

	});
	$("#projects .details-close").on('click',function(){
		var index = $("#projects .details-close").index(this) +1;
		$("#projects li:nth-child("+index+") .project-details")
				.slideUp("slow");
		activeProject = 0;
	});


//scrolling
	$('a.scroll').on('click',function(event) {
		event.preventDefault();
		var href=$(this).attr('href');
		href = href.replace("#","");
		$('html,body').animate({
			'scrollTop' :
			$('a[name='+href+']').offset().top-105
		},1000);

	});
	$('a.do-nothing').on('click',function(event){
		event.preventDefault();
	});

	$(window).scroll(function(){
		var windscroll = $(window).scrollTop() + 105;

		$('section').each(function(i) {

			var positionOfSection = $(this).position().top;
			var heightOfSection = $(this).height();
			
			if(windscroll + $(window).height() >= $(document).height())
			{
				$('nav a').eq(i).css('color','#313131');
				$('nav a').eq(5).css('color','#fc5703');
			}
			else
			{

				if (positionOfSection - 150 <= windscroll && positionOfSection + heightOfSection - 150 > windscroll)
				{
					$('nav a').eq(i).css('color','#fc5703');
				}
				else
				{
					$('nav a').eq(i).css('color','#313131');
				}
			}
		});

	});

});