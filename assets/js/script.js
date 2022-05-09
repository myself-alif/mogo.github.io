$(document).ready(function () {
  var btn = $(".navbar-toggler");
  var header = $("header");
  btn.on("click", function () {
    if (!btn.hasClass("is-active")) {
      header.css("height", "auto");
      btn.addClass("is-active");
    } else {
      header.css("height", "90vh");
      btn.removeClass("is-active");
    }
  });
  $(".content-wrappar").accordion({
    heightStyle: "content",
    icons: { header: "ui-icon-caret-1-s", activeHeader: "ui-icon-caret-1-n" },
  });
  $(".slider").owlCarousel({
    items: 1,
    // loop: true,
    // autoplay: true,
    // autoplayHoverPause: true,
  });
});

// var buttons = document.querySelectorAll(".card-header button");
// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     var otherButtons = [];
//     var buttonClicked = e.target;
//     buttons.forEach((button) => {
//       if (button != buttonClicked) {
//         otherButtons.push(button);
//       }
//     });
//     var status = [];
//     otherButtons.forEach((otherButton) => {
//       if (otherButton.classList.contains("collapsed")) {
//         status.push("collapsed");
//       } else {
//         status.push("not-collapsed");
//       }
//     });
//     let uniqueItems = [...new Set(status)];
//     if (uniqueItems.length == 1 && uniqueItems[0] == "collapsed") {
//       if (buttonClicked.classList.contains("collapsed")) {
//         buttonClicked.classList.remove("collapsed");
//       }
//       if (buttonClicked.getAttribute("aria-expanded") == "false") {
//         buttonClicked.setAttribute("aria-expanded", "true");
//       }
//       var buttonContent = document.querySelector(
//         buttonClicked.getAttribute("data-target")
//       );
//       if (!buttonContent.classList.contains("show")) {
//         buttonContent.classList.add("show");
//       }
//     }
//   });
// });
