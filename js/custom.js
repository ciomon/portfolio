$(function () {
    /**
     * 1. 변수 선언
     **/
    var visualWrap = $("#brandVisual"),
      slide = visualWrap.find(".visual_slide>li"),
      slideCount = slide.length,
      stopTimer,
      leftBtn = visualWrap.find(".btnImg>.prev"),
      rightBtn = visualWrap.find(".btnImg>.next"),
      pager = visualWrap.find(".buttonList>li"),
      current = 0;
  
    /* **
    2. 슬라이드 위치 설정
    * */
    var slidePos = slide.each(function (i) {
      $(this).css("left", i * 100 + "%");
    });
  
    timer();
  
    /**
     * autoplay 함수
     **/
    function timer() {
      stopTimer = setInterval(function () {
        var prev = slide.eq(current); //0
        move(prev, 0, "-100%");
        var prevPager = pager.eq(current);
        prevPager.removeClass("on");
        current++; //1
        if (current == slideCount) {
          current = 0;
        }
        var next = slide.eq(current); //1
        move(next, "100%", "0%");
        var nextPager = pager.eq(current);
        nextPager.addClass("on");
      }, 3000);
    }
  
    /**
     * 슬라이드 애니메이트
     * * */
    function move(tg, start, end) {
      tg.css("left", start).stop().animate({ left: end }, 1000,"easeInOutCirc");
    }
  
    /**
     * 마우스오버시 슬라이드정지
     * * */
    visualWrap.hover(
      function () {
        $(this).addClass("on");
        clearInterval(stopTimer);
      },
      function () {
        $(this).removeClass("on");
        timer();
      }
    );
  
    /**
     * 좌우 버튼 UI
     * ** */
    rightBtn.click(function () {
      var prev = slide.eq(current);
      move(prev, 0, "-100%");
      var prevPager = pager.eq(current);
      prevPager.removeClass("on");
  
      current++; //1
      if (current == slideCount) {
        current = 0;
      }
      var next = slide.eq(current);
      move(next, "100%", "0%");
      var nextPager = pager.eq(current);
      nextPager.addClass("on");
    });
  
    leftBtn.click(function () {
      var prev = slide.eq(current); //0
      move(prev, 0, "100%"); //slide.eq(0),0,100%
      var prevPager = pager.eq(current);
      prevPager.removeClass("on");
  
      current--; //1
      if (current < 0) {
        current = slideCount - 1;
      }
      var next = slide.eq(current); //2
      move(next, "-100%", "0%");
      var nextPager = pager.eq(current);
      nextPager.addClass("on");
  
    });
  
    /**
     * 페이저UI
     */
    pager.click(function () {
      var tg = $(this);
      var i = tg.index();
      pager.removeClass("on");
      tg.addClass("on");
      pagerMove(i);
    });
  
    function pagerMove(i) {
      if (current == i) return;
      var currentEl = slide.eq(current);
      var nextEl = slide.eq(i);
      currentEl.css("left", "0").stop().animate({ left: "-100%" }, 1000,"easeInOutCirc");
      nextEl.css("left", "100%").stop().animate({ left: "0%" }, 1000,"easeInOutCirc");
      current = i;
    }
  
    /**
     * 카운터 동적생성
     */
    var counterEl = "<div class='counter'>1";
    $("#wrap").append(counterEl);
  }); //jQuery
  