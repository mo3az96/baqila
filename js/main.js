$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  sal({
    once: true,
  });
  /* ~~~~~~~~~~~~~~~ Navigation ~~~~~~~~~~~~~~~ */
  new bootstrap.ScrollSpy(document.body, {
    target: "#fixedNavbar",
  });

  $("#fixedNavbar ul li a[href^='#'], ul.footer-nav li a[href^='#']").on(
    "click",
    function (e) {
      e.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top,
        },
        500,
        function () {
          window.location.hash = hash;
        }
      );
      if ($(window).width() <= 767) {
        $(".navbar").fadeOut(300);
        $(".overlay").fadeOut(300);
        $(".nav").removeClass("active");
        $("body").removeClass("overflow");
      }
    }
  );

  /* ~~~~~~~~~~~~~~~ Fixed Header ~~~~~~~~~~~~~~~ */
  var prevScroll = $(window).scrollTop();

  $(this).scrollTop() >= 250
    ? $("header").addClass("header-scroll")
    : $("header").removeClass("header-scroll fixsedt");
  $(window).scroll(function () {
    $(this).scrollTop() >= 250
      ? $("header").addClass("header-scroll")
      : $("header").removeClass("header-scroll fixsedt");

    var currentScroll = $(window).scrollTop();
    prevScroll < currentScroll && prevScroll > 0
      ? $("header").removeClass("fixsedt")
      : $("header").addClass("fixsedt"),
      (prevScroll = currentScroll);
  });

  /* ~~~~~~~~~~~~~~~ Mobile Menu ~~~~~~~~~~~~~~~ */
  $(".menu-btn").on("click", function (e) {
    $(".navbar").fadeIn(300);
    $(".overlay").fadeIn(300);
    $(".nav").addClass("active");
    $("body").addClass("overflow");
  });
  $(".close-btn,.overlay").on("click", function (e) {
    $(".navbar").fadeOut(300);
    $(".overlay").fadeOut(300);
    $(".nav").removeClass("active");
    $("body").removeClass("overflow");
  });
  /* ~~~~~~~~~~~~~~~ States Counter ~~~~~~~~~~~~~~~ */
  var a = 0;
  $(window).scroll(function () {
    if (a == 0 && $(this).scrollTop() >= $(".states-sec").offset().top - 500) {
      $(".num span").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 1000,
              easing: "swing",
              step: function (now) {
                $(this).text(now.toPrecision(3));
              },
            }
          );
      });
      console.log($(".num span"));
      a++;
    }
  });
  /* ~~~~~~~~~~~~~~~ FAQ ~~~~~~~~~~~~~~~ */
  $(".acc-head").click(function () {
    $(".acc-head").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("display") == "none") {
      $(this).siblings().slideDown(500);
    } else {
      $(this).siblings().slideUp(500);
    }
    $(".acc-head").not(this).siblings().slideUp(500);
  });

  /* ~~~~~~~~~~~~~~~ APP ~~~~~~~~~~~~~~~ */
  var thumbsSwiper = new Swiper(".thumbsSwiper .swiper", {
    pagination: {
      el: ".app-thumbs-head .swiper-pagination",
      clickable: true,
    },
    spaceBetween: 17,
    slidesPerView: 3,
  });
  var activeSwiper = new Swiper(".activeSwiper .swiper", {
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".slides-num",
      type: "fraction",
    },
    navigation: {
      nextEl: ".app-thumbs-head .swiper-button-next",
      prevEl: ".app-thumbs-head .swiper-button-prev",
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
    breakpoints: {
      992: {
        autoplay: false,
        effect: "fade",
      },
    },
  });
});
