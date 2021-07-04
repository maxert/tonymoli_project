if (document.querySelectorAll(".slider_head")[0]) {
  $(".slider_head").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
}
if (window.innerWidth < 1200) {
  if (document.querySelectorAll(".container_besseller_items")[0]) {
    $(".container_besseller_items").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 767,
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
}
