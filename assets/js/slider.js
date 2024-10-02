// hero section slider
$(".multiple-items").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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

// destination slider
$(".destination_slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 675,
      settings: {
        slidesToShow: 1.6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1,
      },
    },
  ],
});

// testimonial slider
$(".testimonial_outer_div").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 300,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});