// FOOTER

footer320();
$(window).on('resize', footer320);


function footer320() {
	if($('#container').width()<386){
		$('#col-menu').removeClass('col-4');
		$('#col-menu').toggleClass('col-12');
		$('.contact').toggleClass('mt-5')
	}
}

// SLIDER

var step = 0;
var factor = 0;
var limit = 0;
var clicks = 0;
$('#b-right').on('click', function(){preMove(1)});
$('#b-left').on('click', function(){preMove(-1)});

function preMove(a) {

	if($('#container').width()>=930){
		factor = 496;
		limit = factor;
	}
	else if($('#container').width()>=720) {
		factor = 396;
		limit = 2*factor;
	}
	else if ($('#container').width()>=510) {
		factor = 500;
		limit = 2*factor;
	}
	else if ($('#container').width()>=384) {
		factor = 390;
		limit = 2*factor;
	}
	else{
		factor = 290;
		limit = 2*factor;
	}


	if(a>0)
		sRight();
	else
		sLeft();

}

function sRight() {
	clicks++
	step += factor;

	if($('#swiper-wrapper').position().left == 0)
  		step = -limit;

 	// if(clicks == 1)
 	// 	step = -2*factor;
 	// else if(step>limit)
 	// 	step = 0;

	$('#swiper-wrapper').css({
		'left' : step +'px'
	});
}

function sLeft() {
	step -= factor;

	if(step < -limit)
 		step = 0;

	$('#swiper-wrapper').css({
		'left' : step +'px'
	});
}
