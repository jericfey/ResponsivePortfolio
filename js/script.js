$(document).ready(function () {
  //Hide this div upon page start
  function hideWelcome() {
    $("#welcome").hide();
  }

  //After 5 seconds render the div visible
  setInterval(function showWelcome() {
    $("#welcome").show(3000, function () {
      $("#welcome").hide();
    });
  }, 5000);

  hideWelcome();

  //Move the button div down page
  setInterval(function myMove() {
    var elem = document.getElementById("welcome");
    var pos = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
      }
    }
  }, 7000);

  
});
