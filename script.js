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
});