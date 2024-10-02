$(".hamburger").click(function () {
  $(".mobile_nav").css("left", "0");
  $("body").css("overflow", "hidden")
});

$(".closeBtn").click(function(){
  $(".mobile_nav").css("left","-100%")
  $("body").css("overflow", "auto");
  $(".content").addClass("hide_menu").hide();
  $(".up_down_arrow").removeClass("arrow_flip");
})

$(".dropdown_footer").click(function () {
  if (!$(this).parents(".dropdown_content").find(".hidden_dropdown").hasClass("hide_dropdown")) {
    $(".hidden_dropdown").removeClass("hide_dropdown");
    $(".dropdown_right_arrow").removeClass("arrow_flip");
    $(this).parents(".dropdown_content").find(".hidden_dropdown").addClass("hide_dropdown");
    $(this).find(".dropdown_right_arrow").addClass("arrow_flip");
  } else {
    console.log("else");
    $(".hidden_dropdown").removeClass("hide_dropdown");
    $(".dropdown_right_arrow").removeClass("arrow_flip");
  }
});

$(".dropdown").click(function () {
  var $currentContent = $(this).next(".content");
  var $isOpen = $currentContent.is(":visible");
  $(".content").addClass("hide_menu").hide();
  $(".up_down_arrow").removeClass("arrow_flip");
  if (!$isOpen) {
    $currentContent.removeClass("hide_menu").show();
    $(this).find(".up_down_arrow").addClass("arrow_flip");
  }
});
