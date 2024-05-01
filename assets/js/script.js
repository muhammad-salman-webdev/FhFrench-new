$(document).ready(function () {
  // Function to handle slider for mobile__switcher element
  if ($(window).width() < 991) {
    if ($(".mobile__switcher").length) {
      $(".mobile__switcher").slick({
        slidesToShow: 1,
        arrows: true,
        dots: false,
      });
      $(".mobile__switcher").on(
        "afterChange",
        function (event, slick, currentSlide, nextSlide) {
          let slideSlide = $(".mobile__switcher .slick-current").attr(
            "data-value"
          );

          // Display corresponding content based on the slider slide
          $(".education__roadmap .outer__education .inner>.media").css(
            "display",
            "none"
          );
          $(
            ".education__roadmap .outer__education .inner>.media." + slideSlide
          ).fadeIn(300);
        }
      );
    }
  }

  // Function to handle hover effect on time__wrapper elements
  $(".time__wrapper>.elem").on("mouseenter", function () {
    if (!$(this).hasClass("current")) {
      $(this).closest(".time__wrapper").find(".elem").removeClass("current");
      $(this).addClass("current");
      $(".outer__education .media").css("display", "none");
      $(".outer__education .media." + $(this).attr("data-block")).fadeIn(300);
    }
  });

  // Function to handle hover effect on outer__hero .btns elements
  $(".outer__hero .btns>a").on("mouseenter", function () {
    $(".outer__hero .btns>a").removeClass("current");
    $(this).addClass("current");
    $(".hero__section .image").css("display", "none");
    $(".hero__section .image." + $(this).attr("data-image")).fadeIn(300);
  });

  // Function to handle slider for hero__section based on window width
  if ($(".hero__section").length) {
    if ($(window).width() < 1360) {
      $(".hero__section .images__wrapper").slick({
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 40000,
        arrows: false,
      });
    } else {
      if ($(".hero__section .images__wrapper ").hasClass("slick-slider")) {
        $(".hero__section .images__wrapper ").slick("unslick");
      }
    }
    $(window).on("resize", function () {
      if ($(window).width() < 1360) {
        if ($(".hero__section .images__wrapper").length) {
          if (!$(".images__wrapper").hasClass("slick-slider")) {
            $(".hero__section .images__wrapper").slick({
              slidesToShow: 1,
              initialSlide: 1,
              dots: true,
              autoplay: true,
              autoplaySpeed: 40000,
              arrows: true,
            });
          }
        }
      } else {
        if ($(".hero__section .images__wrapper ").hasClass("slick-slider")) {
          $(".hero__section .images__wrapper ").slick("unslick");
        }
      }
    });
  }

  // Function to handle hover effect on outer__capabilities .switcher elements
  $(".outer__capabilities .switcher .elem").on("mouseenter", function () {
    if ($(window).width() > 840) {
      if (!$(this).hasClass("current") && !$(this).hasClass("slick-current")) {
        $(this).closest(".switcher").find(".current").removeClass("current");
        $(this).addClass("current");
        $(".active__element .element").css("display", "none");
        $(".active__element .element." + $(this).attr("data-value")).fadeIn(
          300
        );
      }
    }
  });

  // Function to handle slider for capabilities based on window width
  if ($(".capabilities").length) {
    if ($(window).width() < 840) {
      $(".capabilities .switcher").slick({
        slidesToShow: 1,
        initialSlide: 1,
        dots: false,
        arrows: true,
      });
    }
    $(window).on("resize", function () {
      if ($(window).width() < 840) {
        if ($(".capabilities .switcher").length) {
          if (!$(".switcher").hasClass("slick-slider")) {
            $(".capabilities .switcher").slick({
              slidesToShow: 1,
              initialSlide: 1,
              dots: false,
              arrows: true,
            });
          }
        }
      } else {
        if ($(".capabilities .switcher").hasClass("slick-slider")) {
          $(".capabilities .switcher").slick("unslick");
        }
      }
    });
    $(".capabilities .switcher").on(
      "afterChange",
      function (event, slick, currentSlide, nextSlide) {
        let slideSlide = $(".capabilities .slick-current").attr("data-value");
        $(".active__element .element").css("display", "none");
        $(".active__element .element." + slideSlide).fadeIn(300);
      }
    );
  }

  // Function to handle click event on what__we--do .grid .elem elements
  $(".what__we--do .grid .elem").on("click", function (e) {
    e.preventDefault();
    $("body,html").css("overflow-y", "hidden");
    $(".modal__wrapper.more__info").fadeIn(300);
    $(
      ".modal__wrapper.more__info .element__service , .modal__wrapper.more__info .description"
    ).css("display", "none");
    $(".element__service." + $(this).attr("data-id")).fadeIn(300);
    $(
      ".modal__wrapper.more__info .description." + $(this).attr("data-id")
    ).fadeIn(300);
  });

  // Function to close popup
  $(".close__popup").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".modal__wrapper").fadeOut(300);
    $("body,html").css("overflow-y", "initial");
  });

  // Function to handle click event on header .menu>a elements
  $("header .menu>a").on("click", function (e) {
    e.preventDefault();

    if (!$(this).hasClass("opened")) {
      $(this).addClass("opened");
      $("body,html").css("overflow-y", "hidden");
      $(".bubble").css("top", "-2000px");
      $(".bubble").css("right", "-800px");
      setTimeout(function () {
        $(".float__menu").fadeIn(300);
      }, 400);
    } else {
      $("body,html").css("overflow-y", "initial");
      $(".float__menu").fadeOut(300);
      $(".menu>a>span").css("transition", "none");
      $(".menu>a").css("transition", ".4s ease all");
      setTimeout(function () {
        $(".menu>a").css("transition", "none");
        $(".menu>a>span").css("transition", ".4s ease all");
      }, 300);
      $(this).removeClass("opened");
      $(".bubble").css("top", "-5000px");
      $(".bubble").css("right", "-5000px");
    }
  });

  // Function to handle slider for slider__wrapper based on window width
  if ($(".slider__wrapper").length) {
    $(".slider__wrapper").slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    });
  }

  // Function to handle slider for clients__wrapper based on window width
  if ($(".clients__wrapper .outer__clients .box").length) {
    $(".clients__wrapper .outer__clients .box").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    });
  }
});

// Loading Animation

const animElem = document.getElementById("loading-container");
function showLoadingAnimation() {
  // Reseting the Gif
  const gif = animElem.querySelector("img");
  const src = gif.src;
  gif.src = "";
  gif.src = src;

  // Display the loading animation container
  animElem.style.display = "flex";
  document.body.style.overflowY = "hidden";

  // Hide the loading animation container after 3 seconds
  setTimeout(function () {
    animElem.style.opacity = "0";
    setTimeout(function () {
      animElem.style.display = "none";
      document.body.style.overflowY = "initial";
    }, 500);
  }, 2700);
}

// #######

// Function to check if the user has visited the website before and if more than 1 hour has passed since the previous visit
function shouldShowAnimation() {
  const lastVisitTime = localStorage.getItem("lastVisitTime");
  if (!lastVisitTime) {
    localStorage.setItem("lastVisitTime", new Date().getTime());
    showLoadingAnimation();
  } else {
    // Check if more than 1 hour has passed since the last visit
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - parseInt(lastVisitTime);
    const oneHour = 60 * 60 * 1000;
    if (timeDifference >= oneHour) {
      localStorage.setItem("lastVisitTime", new Date().getTime());
      showLoadingAnimation();
    }
  }
}

// If need to show animation on every visit
const animateOnEveryVisit = false;

if (animateOnEveryVisit) {
  showLoadingAnimation();
} else {
  document.addEventListener("DOMContentLoaded", shouldShowAnimation());
}
