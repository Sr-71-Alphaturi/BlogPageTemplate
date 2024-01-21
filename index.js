$(".item").click(function ()
{
    $(".orange").removeClass("orange");
    $("#"+this.id).addClass("orange");
});
function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "Nav") {
      x.className += " responsive";
    } else {
      x.className = "Nav";
    }
  }
