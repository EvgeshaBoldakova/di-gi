$(document).ready(function(){
  $("#block_2").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    dotsContainer: ".pagination_one",
    startPosition: 1
  });

  $("#block_8").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    dotsContainer: ".pagination_two",
    startPosition: 1
  });

  $(".pagination_one .circle").click(function () {
    let index = $(this).index();
    $("#block_2").trigger("to.owl.carousel", [index, 300]);
  });

  $(".pagination_two .circle1").click(function () {
    let index = $(this).index();
    $("#block_8").trigger("to.owl.carousel", [index, 300]);
  });

  $(".roundabout_left").click(function () {
    $("#block_2").trigger("prev.owl.carousel");
  });

  $(".roundabout_right").click(function () {
    $("#block_2").trigger("next.owl.carousel");
  });
});
