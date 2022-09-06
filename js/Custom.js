$(document).ready(function () {
  // navbar hide in scroll down
  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     $("header").css({
  //       top: "0px",
  //     });
  //   } else {
  //     $("header").css({
  //       top: "-100%",
  //     });
  //   }
  //   prevScrollpos = currentScrollPos;
  // };
  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if (appScroll >= 80) {
      $("header .navbar").addClass("headerAnimate");
    } else {
      $("header .navbar").removeClass("headerAnimate");
    }
  });
  //MainSlider
  var mainSlider = new Swiper(".mainSliderContainer", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    // effect: "fade",
    speed: 500,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mainsliderPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mainSliderNext",
      prevEl: ".mainsliderPrev",
    },
  });
  // services slider
  var servicesSlider = new Swiper(".servicesSlider", {
    navigation: {
      nextEl: ".servicesSliderNext",
      prevEl: ".servicesSliderPrev",
    },
    pagination: {
      el: ".servicesSlidePagination",
      type: "fraction",
    },
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
  });
  $(".servicesSlider").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );

  //Categories Slider
  var referencesSlider = new Swiper(".referencesSlider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 5,
    speed: 1000,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });



});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".loader ").fadeOut("slow");
  // select2
  $(".select2search").select2();
  $(".select2").select2({
    minimumResultsForSearch: -1,
  });
  // odometer
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
  // aos
  AOS.init({
    offset: 60,
    delay: 50,
    duration: 500,
    easing: "linear",
    once: true,
  });
  //aos Delay
  function aosDelay() {
    var class_ = "mainSection";
    $("section").each(function (i) {
      class_ = $(this).attr("class");
      $("." + class_ + " div[data-aos]").each(function (i) {
        var d = 0;
        d = i * 100;
        $(this).attr("data-aos-delay", d);
        d = 0;
      });
    });
  }
  aosDelay();
  // tooltip
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
// /////////////////////////////
// /////////////////////////////
// /////////////////////////////
// custom cursor
var cursor = document.querySelector(".customCursor");
var cursorinner = document.querySelector(".customCursorInner");
var a = document.querySelectorAll("a");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});
document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("customClick");
});
document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("customClick");
});
a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("customHover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("customHover");
  });
});
