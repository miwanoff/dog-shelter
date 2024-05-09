let arrSrc = ["images/dog10.png", "images/dog11.jpg", "images/dog12.png"];
let i = 0;
let slider = document.getElementById("slider");
let effect = "fade";
let tm;
function next() {
  if (i < arrSrc.length - 1) {
    i++;
  } else {
    i = 0;
  }
  slider.classList.add(effect);
  clearTimeout(tm);
  tm = setTimeout(change, 500);
}

function change() {
  slider.setAttribute("src", arrSrc[i]);
  slider.classList.remove(effect);
}

function prev() {
  if (i > 0) {
    i--;
  } else {
    i = arrSrc.length - 1;
  }
  slider.classList.add(effect);
  clearTimeout(tm);
  tm = setTimeout(change, 500);
}