$(".icon").mouseover(function () {
  $(".message-container").addClass("message-container--show");
});

$(".icon").mouseleave(function () {
  $(".message-container").removeClass("message-container--show");
});

// $(".icon").on("click", function () {
//   $(".message-container").toggleClass("message-container--show");
// });
