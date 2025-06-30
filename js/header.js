// ナビゲーション制御
$(".h-open").click(function () {
  $(this).toggleClass("active");
  $("#h-nav").toggleClass("panelactive");
});

$("#h-nav a").click(function () {
  $(".h-open").removeClass("active");
  $("#h-nav").removeClass("panelactive");
});

// scroll-indicator の line を3秒後にフェードイン
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 50) {
    $(".scroll-indicator .line").addClass("visible");
  }
});

  function setRealVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  window.addEventListener("resize", setRealVH);
  window.addEventListener("load", setRealVH);
