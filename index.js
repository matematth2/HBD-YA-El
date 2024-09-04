$(".present").on("click", function() {
  // Show the disclaimer when the present is clicked
  $(".disclaimer").removeClass("hidden").fadeIn(500);

  $(this).css("transform", "rotateY(180deg)").fadeOut(500, function() {
      $("h1").text("Click one of these").addClass("h1Style");
      $(".envelope").removeClass("hidden").fadeIn(500);
      $(".game").removeClass("hidden").fadeIn(500);
      $(".message").removeClass("hidden").fadeIn(1000);
  });
});

// Hide the disclaimer when it is clicked
$(".disclaimer").on("click", function() {
    $(this).addClass("hidden").fadeOut(500);
});

$(".envelope").on("click", function() {
  $(this).addClass("envelope-open");
  $(".envelope-message").removeClass("hidden").addClass("visible");
});
