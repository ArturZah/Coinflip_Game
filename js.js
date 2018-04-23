$(document).ready(function() {

	setInterval(function(){

  		if ($('html').width() < 639) {
		$(".char-left").prop("src", "img/logo-left.png");
		$(".char-right").prop("src", "img/logo-right.png");
		}
		if ($('html').width() > 639) {
		$(".char-left").prop("src", "img/char-left.png");
		$(".char-right").prop("src", "img/char-right.png");
		}
    }, 100);



	//AUDIO


		if ($('html').width() > 300 || $('html').height() > 500) {

			$(".bg-audio").get(0).volume = 0.0;
			$(".bg-audio2").get(0).volume = 0.0;
			$(".volume").click(function() {
				$(".volume-on").toggleClass("volume-off");
				if ($(".bg-audio").get(0).volume === 0.2 && $(".bg-audio2").get(0).volume === 0.16) {
					$(".bg-audio").get(0).volume = 0;
					$(".bg-audio2").get(0).volume = 0;
				} else if ($(".bg-audio").get(0).volume === 0 && $(".bg-audio2").get(0).volume === 0) {
					$(".bg-audio").get(0).volume = 0.2;
					$(".bg-audio2").get(0).volume = 0.16;
				}
			});
		}

	setInterval(function(){

		if ($('html').width() < 300 || $('html').height() < 500) {
			$(".bg-audio").get(0).volume = 0;
			$(".bg-audio2").get(0).volume = 0;
			if ($(".volume-on").hasClass("volume-off") === false) {
				$(".volume-on").addClass("volume-off");
			}
		}
    }, 100);

	//BACGROUNDS


	$(".char-left").mouseover(function(){
		$(".logo-left").addClass("logo-hover");
		$(".label-1").addClass("bigfont");
		$(".logo-right").removeClass("logo-hover");
	});

	$(".char-left").mouseout(function(){
		$(".logo-left").removeClass("logo-hover");
			$(".label-1").removeClass("bigfont");
	});

	$(".char-right").mouseover(function(){
		$(".logo-left").removeClass("logo-hover");
		$(".label-2").addClass("bigfont");
		$(".logo-right").addClass("logo-hover");
	});

	$(".char-right").mouseout(function(){
		$(".logo-right").removeClass("logo-hover");
		$(".label-2").removeClass("bigfont");
	});

	$(".char-right").click(function(){
		if ($(".white").prop("checked", true)) {
			$(".shot").get(0).play();
			$(".highlight-left").css("opacity", "0.7");
			$(".highlight-right").css("opacity", "0");
			$(".black").prop("checked", false);
			}

		if ($('html').width() > 399) {
			$(".label-1").css("background-color", "transparent");
			$(".label-2").css("background-color", "#d80808");
		}
	});

	$(".char-left").click(function(){
		if ($(".black").prop("checked", true)) {
			$(".shot").get(0).play();
			$(".highlight-left").css("opacity", "0");
			$(".highlight-right").css("opacity", "0.7");
			$(".white").prop("checked", false);
			}

		if ($('html').width() > 399) {
			$(".label-1").css("background-color", "#d80808");
			$(".label-2").css("background-color", "transparent");
		}
	});

	//PAGE LOADER
	setTimeout(function() {
		$(".loader-ctn").fadeOut(1000);

	}, 2000 );


	//CLICK SLIDE BOX
	$(".slide-box-label-facebook").click(function() {

		$(".slide-box-content-facebook").toggleClass("visible");
		$(".slide-box-content-google").removeClass("visible");
		$(".slide-box-label-google").toggleClass("label-down-google");
		$(".slide-box-label-facebook").toggleClass("label-down-facebook");

	});


	$(".content").click(function() {

		$(".slide-box-content-google").removeClass("visible");
		$(".slide-box-content-facebook").removeClass("visible");
		$(".slide-box-label-google").removeClass("label-down-google");
		$(".slide-box-label-facebook").removeClass("label-down-facebook");



	});

	$(".slide-box-label-google").click(function() {

		$(".slide-box-content-google").toggleClass("visible");
		$(".slide-box-content-facebook").removeClass("visible");
		$(".slide-box-label-google").removeClass("label-down-google");
		$(".slide-box-label-facebook").removeClass("label-down-facebook");
	});


	//CHECKBOXS

	$(".white").click(function() {

		if ($(".white").prop("checked", true)) {

			$(".label-1").css("background-color", "transparent");
			$(".label-2").css("background-color", "#d80808");
			$(".black").prop("checked", false);

			}
		});

	$(".black").click(function() {

		if ($(".black").prop("checked", true)) {

			$(".label-1").css("background-color", "#d80808");
			$(".label-2").css("background-color", "transparent");
			$(".white").prop("checked", false);
			}
		});


	//COIN FLIP
	$('.betplus').click(function(){
		var bet = $('.bet').val();
		var b =parseInt(bet, 10);
		var money = $('.money').val();

			if (money > b) {
				$(".btn-sound").get(0).play();
				var betplus = $('.betplus').val();
				var plus = parseInt(bet, 10) + parseInt(betplus, 10);
				$('.bet').val(plus);
				$(".bet").toggleClass("betspin");
			};
	});

	$('.betminus').click(function(){
		var bet = $('.bet').val();
		if (bet > 0) {
			$(".btn-sound").get(0).play();
			var bet = $('.bet').val();
			var betminus = $('.betminus').val();
			var minus = bet - betminus;
			$('.bet').val(minus);
			$(".bet").toggleClass("betspin");
		};
	});

	$('.betmore').click(function(){
		var bet = $('.bet').val();
		var b =parseInt(bet, 10);
		var money = $('.money').val();
		if (money - 200 > b) {
			$(".btn-sound").get(0).play();
			var bet = $('.bet').val();
			var betmore = $('.betmore').val();
			var plus = parseInt(bet, 10) + parseInt(betmore, 10);
			$('.bet').val(plus);
			$(".bet").toggleClass("betspin");
		};

	});

	$('.flip').on('click', function(){
		var bet = $('.bet').val();
		var b =parseInt(bet, 10);
		var money = $('.money').val();
		$(".btn-sound").get(0).play();

		if (money < b) {
			$('.massages').html('<p class="paragraph">Hold up!</p><p class="paragraph2">Earn some credits</p>');
		}else if (b === 0) {
			$('.massages').html('<p class="paragraph">No risk no fun</p><p class="paragraph2">Lets bet!</p>');
		} else{

		$(".flip").css("pointer-events", "none");

			if ($(".black").prop("checked") === true || $(".white").prop("checked") === true) {
				$(".spin-sound").get(0).play();
				var money = $('.money').val();
				var bet = $('.bet').val();

				var saldo = money - bet;
				$('.money').val(saldo);
				$(".money").toggleClass("moneyspin");

				$('.massages').html('');

			    var flipResult = Math.random();
			    $('#coin').removeClass();
			    setTimeout(function(){

			      if(flipResult <= 0.5){

			        $('#coin').addClass('heads');

			        setTimeout(function() {

			        	if ($(".black").prop("checked") === true ) {

			        		$('.massages').html('<p class="paragraph">Ez peasy lemon squeezy!</p><p class="paragraph2">YOU WON</p>');
									$('.money').val(saldo + (bet*2));
									$(".money").toggleClass("moneyspin");
									$(".flip").css("pointer-events", "auto");
			        	} else {
			        		$('.massages').html('<p class="paragraph">Counter-Terrorists Win!</p><p class="paragraph2">YOU LOSE</p>');
									$(".flip").css("pointer-events", "auto");
			        	}

						}, 2700 );
			      }
			      else{

			        $('#coin').addClass('tails');
			        setTimeout(function() {

			        	if ($(".white").prop("checked") === true ) {

			        		$('.massages').html('<p class="paragraph">Ez peasy lemon squeezy!</p><p class="paragraph2">YOU WON</p>');
									$('.money').val(saldo + (bet*2));
									$(".money").toggleClass("moneyspin");
									$(".flip").css("pointer-events", "auto");
			        	} else {
			        		$('.massages').html('<p class="paragraph">Terrorists Win!</p><p class="paragraph2">YOU LOSE</p>');
									$(".flip").css("pointer-events", "auto");
			        	}
						}, 2700 );
			      }
			    }, 100);
			} else {
				$('.massages').html('<p class="paragraph">Don`t be so shy</p><p class="paragraph2">Choose a side!</p>');
				$(".flip").css("pointer-events", "auto");
			}
		}
	  });

});
