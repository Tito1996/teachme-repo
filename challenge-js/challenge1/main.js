var clic = 0;
$(document).ready(function () {
  $(".hamburguesa").hover(
    function () {
      $(".arriba").addClass("pintar-rosa");
      $(".medio").addClass("pintar-rosa");
      $(".abajo").addClass("pintar-rosa");
    },
    function () {
      $(".arriba").removeClass("pintar-rosa");
      $(".medio").removeClass("pintar-rosa");
      $(".abajo").removeClass("pintar-rosa");
    }
  );
  $("#container").click(function () {
    if (clic === 1) {
      $("#container").addClass("hamburguesa");
      $("#container").animate({ rotate: "0deg" }, 300);
      $("#container").removeClass("arrow");
      clic = 0;
    } else {
      $("#container").animate({ rotate: "180deg" }, 300);
      $("#container").addClass("arrow");
      $("#container").removeClass("hamburguesa");
      clic = 1;
    }
  });
});
