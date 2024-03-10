$('#navbtn').click(function(){
		$('#mySidenav').addClass('over_mob');
		$('.over_click').addClass('on');
		$('body').addClass('scroll_mob');
	});

	$('.closebtn').click(function(){
		$('#mySidenav').removeClass('over_mob');
		$('.over_click').removeClass('on');
		$('body').removeClass('scroll_mob');
	});
	
	$('.sidenav .direct').on('click', function() {
		$(this).parent().toggleClass('open').children('.mob_menu').collapse('toggle');
		$(this).parent().siblings().removeClass('open').children('.mob_menu.in').collapse('hide');
	});

$(".pro_drop").hover(function(){
		$(this).parent().find(".pro_menu").slideToggle();
	});

$(".mainslider").owlCarousel({
      items:1,
      autoplay:false,
      rtl:true,
      loop: true,
  }); 

$(window).scroll(function () {
		//if you hard code, then use console
		//.log to determine when you want the 
		//nav bar to stick.  
		if ($(window).scrollTop() > 800) {
			$('.down_nav').addClass('scroll_nav');
		}
		if ($(window).scrollTop() < 801) {
			$('.down_nav').removeClass('scroll_nav');
		}
	});


/**************************counter js************************/
   $(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".num")) && !viewed) {
      viewed = true;
      $('.num').each(function() {
            var current = $(this);
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },

            {

              duration: 1800,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
                $(current).prepend(' <span>+</span>');
              }

            });
            
            
        });
  }
}

$('.pro_slider-1').owlCarousel({
		items:4,
		autoplay:false,
		loop: true,
        margin:20,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			991:{
				items:3
			},
			1199:{
				items:4
			}
		}
	}); 

$('.pro_slider-2').owlCarousel({
		items:3,
		autoplay:false,
		loop: true,
        margin:28,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			991:{
				items:2
			},
			1199:{
				items:3
			}
		}
	}); 