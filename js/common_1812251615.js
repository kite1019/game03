$(function () {

	$(window).load(function () {
		$('.loading_mask').addClass('fadeOut').show().delay(500).fadeOut(0);
		setTimeout(function () {
			$('.animation').css('display', 'block');
		}, 500);
		setTimeout(function () {
			$('.animation').remove();
			$('.razor').css('display', 'block');
		}, 3300);
	});

	//點擊gif消失
	$('body').on('click', function () {
		$('.animation').remove();
		$('.razor').css('display', 'block');
	});
	// 側邊 LINE，FB分享
	$('.share').click(function () {
		$('.more_shore').toggleClass("open_all");
	});
	var navp = $('.right_box');
	$(window).scroll(function () {
		if ($(window).scrollTop() == 0) {
			navp.css({
				'display': 'none',
				'opacity': '0',
				'width': '0'
			});
			$('.primecard').css('width', '0');

		} else {
			navp.css({
				'display': 'block',
				'opacity': '1',
				'width': '42px'
			});
			$('.primecard').css('width', '65px');
		}
	});

	// 燈箱
	$('.open-popup-link').magnificPopup({
		type: 'inline',
		midClick: true,
		fixedContentPos: 'true',
		fixedBgPos: 'true',
		removalDelay: 100,
		mainClass: 'my-mfp-zoom-in'
	});

	// 裝置判斷 PC or Mobile
	var isMobile = {
		iMob: function () {
			return navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);
		}
	};
	if (isMobile.iMob()) {
		console.log('mob');
		$('#menu').addClass('scroll_mob');

		// 連結滑動效果，Mobile不同定位
		$.scrollTo = $.fn.scrollTo = function (x, y, options) {
			if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);
			var mobTopmenu = -($('#mob_topmenu').outerHeight() - -45);

			options = $.extend({}, {
				gap: {
					x: 0,
					y: mobTopmenu
				},
				animation: {	// 滑動效果設定
					easing: 'swing',
					duration: 300,
					complete: $.noop,
					step: $.noop
				}
			}, options);

			return this.each(function () {
				var elem = $(this);
				elem.stop().animate({
					scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
					scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
				}, options.animation);
			});
		};

		$("#menu a").click(function (evn) {
			evn.preventDefault();
			$('html,body').scrollTo(this.hash, this.hash);
		});

	} else {
		console.log('pc');
		$('#menu').addClass('scroll_pc');
	};
	$('.header_mobile .media_share').click(function () {
		$('.header_mobile ul.social_media').toggle();
	});
	// 隨機 
	function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	getNum = getRandom(1, 5);
	if (getNum == 1) {
		console.log('1', getNum);
		var backHtml = '';
		backHtml += '<div class="txt_box back"><img class="purse" src="img/purse.png">';
		backHtml += '<h3>哎呀~謝謝你</h3><div class="text_bot">';
		backHtml += '<p>好運都拿來遇見了我<br>明天等你回來唷</p>';
		backHtml += '<img src="img/heart.png"></div><div class="btn">';
		backHtml += '<a href="https://24h.m.pchome.com.tw/">';
		backHtml += '<img src="img/btn_back.png"></a></div></div><img src="img/coupon.png">';
		$('.coupon').html(backHtml);
	} else if (getNum == 2) {
		console.log('2', getNum);
		$('.txt_box p').html('俄羅斯草本西伯利亞<br>限時搶購63折起');
		$('.btn').html('<a href="https://24h.pchome.com.tw/store/DDAOLI" target="_blank"><img src="img/btn_get_1120.png"></a>');
	} else if (getNum == 3) {
		console.log('3', getNum);
		$('.txt_box p').html('露得清身體乳<br>買1送1');
		$('.btn').html('<a href="https://24h.pchome.com.tw/store/DDABUW" target="_blank"><img src="img/btn_get_1120.png"></a>');
	}
	else if (getNum == 4) {
		console.log('4', getNum);
		$('.txt_box p').html('金士頓<br>全館8折起');
		$('.btn').html('<a href="https://24h.pchome.com.tw/store/DGAGBA" target="_blank"><img src="img/btn_get_1120.png"></a>');
	}


	if (isMobile.iMob()) {
		console.log('mob');
		$('#scratch').wScratchPad({
			size: 20,
			bg: 'img/scratch_1120v2_2.png',
			fg: 'img/scratch_1120_2a.png',
			// cursor: 'url("img/coin.png") 5 5, default',
		});
		$('.scratchpad canvas').on('touchstart touchmove touchend touchcancel', function (event) {
			$('.razor').remove();
			$('.scratchpad canvas')
				.delay(5000)
				.queue(function (next) {
					$('.coupon').show().addClass('bounceIn');
					$('.mask').css('display', 'block');
					$('.mask').on('touchstart touchmove touchend touchcancel', function () {
						this.remove();
					});
				});
		});
	} else {
		console.log('pc');
		$('#menu').addClass('scroll_pc');
		$('#scratch').wScratchPad({
			size: 40,
			bg: 'img/scratch_1120v2_2.png',
			fg: 'img/scratch_1120_2a.png',
			cursor: 'url("img/coin.png") 5 5, default',
		});
		$('.scratchpad').on('click mousedown', function () {
			$('.razor').remove();
			$('.scratchpad canvas')
				.delay(5000)
				.queue(function (next) {
					$('.coupon').show().addClass('bounceIn');
					$('.mask').css('display', 'block');
					$('.mask').on('click', function () {
						this.remove();
					});
				});
		});
	};




	// 禁用雙指縮放
	document.documentElement.addEventListener('touchstart', function (event) {
		if (event.touches.length > 1) {
			event.preventDefault();
		}
	}, false);

	// 禁用手指雙擊縮放
	var lastTouchEnd = 0;
	document.documentElement.addEventListener('touchend', function (event) {
		var now = Date.now();
		if (now - lastTouchEnd <= 300) {
			event.preventDefault();
		}
		lastTouchEnd = now;
	}, false);

	document.body.addEventListener('touchmove', function (e) {
		e.preventDefault(); //阻止默認的處理方式(阻止下拉滑動的效果)
	}, { passive: false }); //passive 參數不能省略，用來兼容ios和android

});