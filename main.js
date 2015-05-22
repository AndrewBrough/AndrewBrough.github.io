$(window).scroll(function () {
  if($(window).scrollTop() > 0)
  {
    $("#backToTop").css("top", 0);
  }
  else
  {
    $("#backToTop").css("top", -3 + "em");
  }
});

$(document).ready(function () {

  //game needs a name text cursor blink
  var id_gameNeedsName = "gameNeedsName";
  var gameNeedsName = "This Game Needs A Name";
  var gameNeedsName_ = "This Game Needs A Name_";

  setInterval(function () {
    var text = document.getElementById(id_gameNeedsName).textContent;

    if(text == gameNeedsName)
    {
      document.getElementById(id_gameNeedsName).textContent = gameNeedsName_;
    }
    else
    {
      document.getElementById(id_gameNeedsName).textContent = gameNeedsName;
    }
  }, 1000);

  //setup navigation scrolling
  for (var i = 0; i < navItems.length; i++)
  {
    $("#" + navItems[i] + "NAV").click(function () {
      var targetID = "#" + this.id.replace("NAV", "PROJ");
      $(targetID).goTo();
    });
  }
  //back to top
  $("#backToTop").click(function () {
    $("body").animate({
      scrollTop: 0
    }, "fast");
  });
});

//navigation scrolling
var navItems = ["apples",
                "unannouncedmagmic",
                "phase10facebook",
                "ottawajs",
                "liftoff",
                "hyperion",
                "gameneedsname",
                "sloesite"];

//jquery scroll function from http://stackoverflow.com/questions/4801655/how-to-go-to-a-specific-element-on-page by user Reigel
(function ($) {
  $.fn.goTo = function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top + 'px'
    }, 'fast');
    return this; // for chaining...
  }
})(jQuery);