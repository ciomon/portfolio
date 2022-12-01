$(document).on("change", "select[name=family_site]", function () {
    url = $(this).val();
    if (url != "") {
      window.open(url);
    }
  
    $(this).val("");
  });
  
  $(function () {
    $(".top-btn").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1400
      );
      return false;
    });
  
    $(window).scroll(function () {
      //스크롤 내렸을때 탑버튼 나타나도록
      if ($(this).scrollTop() > $(window).height() * 0.1) {
        $(".top-btn").addClass("over");
      } else {
        $(".top-btn").removeClass("over");
      }
    });
  });
  
  const btt = document.querySelector(".top-btn");
  let scrollAmount;
  
  window.addEventListener("scroll", function () {
    scrollAmount = this.scrollY;
    if (scrollAmount > scrollAmount / 4) {
      btt.classList.add("visible");
    } else {
      btt.classList.remove("visible");
    }
  });
  btt.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(btt.getAttribute("#top"))
      .scrollIntoView({ behavior: "smooth" });
  });
  