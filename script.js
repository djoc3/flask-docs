$(document).ready(function() {
    $(".icon").click(function() {
      if ($(".icon").css("display") == "block"){
        event.preventDefault();
        $("#nav-links").toggle();
      }
    });
    $(".nav-link").click(function() {
      if ($(".icon").css("display") == "block"){
        $("#nav-links").toggle();
      }
    });
    $(window).resize(function() {
      if ($(window).width() > 800) {
        $("#nav-links").show();
      } else {
        $("#nav-links").hide();
      }
    });
});