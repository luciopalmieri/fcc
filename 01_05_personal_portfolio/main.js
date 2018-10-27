$(document).ready(function() {
  $("#fullpage").fullpage({
    // Design
    sectionsColor: ["#763626", "#41637C", "#336B87", "#763626"],
    // Navigation
    anchors: ["s1", "s2", "s3", "s4"],
    menu: "#menu",

    // Scrolling
    css3: true,
    scrollBar: true,
    autoScrolling: false,
    scrollingSpeed: 700,

    //Accessibility
    keyboardScrolling: true
  });
});
