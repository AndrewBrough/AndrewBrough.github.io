$(document).ready(function () {
  
  var header = "header";
  var mainContent = ".mainContent";

  $(header).hover(function () {
    console.log("hihihihi");
    $(mainContent).animate({ top: "280px" }, 200);
  },
  function () {
    console.log("byebyebye");
    $(mainContent).animate({ top: "50px" }, 200);
  });
});