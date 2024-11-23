var BottomLineDiv = document.querySelectorAll(".BottomLineDiv");
var BottomLineSvg = document.querySelectorAll(".BottomLineSvg");

function AlterLineSize() {
  var width = document.documentElement.clientWidth;
  if (width < 1024) {
    for (var x = 0; x < BottomLineDiv.length; x++) {
      BottomLineDiv[x].classList.remove("left-[-15dvw]");
      BottomLineSvg[x].setAttribute("width", "400");
    }
  } else {
    for (var y = 0; y < BottomLineDiv.length; y++) {
      BottomLineDiv[y].classList.add("left-[-15dvw]");
      BottomLineSvg[y].setAttribute("width", "990");
    }
  }
}

AlterLineSize();
window.addEventListener("resize", AlterLineSize);
