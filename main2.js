$(document).ready(function () {

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
});