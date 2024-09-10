$(document).ready(function() {
  // Show disclaimer and rotate the present when the present is clicked
  $(".present").on("click", function() {
      $(".disclaimer").removeClass("hidden").fadeIn(500); // Show disclaimer
      
      // Rotate and hide the present, then show options
      $(this).css("transform", "rotateY(180deg)").fadeOut(500, function() {
          $("h1").text("Click one of these").addClass("h1Style"); // Update heading style
          $(".option").removeClass("hidden").fadeIn(500); // Show all options
          $(".message").removeClass("hidden").fadeIn(1000); // Show footer message
      });
  });

  // Hide disclaimer when clicked
  $(".disclaimer").on("click", function() {
      $(this).fadeOut(500, function() {
          $(this).addClass("hidden"); // Ensure hidden class is added after fading out
      });
  });

  // Envelope click action: Open the envelope and show the message
  $(".envelope").on("click", function() {
      $(this).toggleClass("envelope-open");
      $(".envelope-message").toggleClass("hidden visible"); // Toggle visibility of envelope message
  });
});
