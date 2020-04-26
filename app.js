let slides = document.querySelectorAll(".my-slides"),
    dots = document.querySelectorAll(".dot"),
    dotsArea = document.querySelector(".dots"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    number = document.querySelectorAll(".number-text"),
    img = document.querySelectorAll("img");
    input = document.querySelector("input"),
    slideindex = 1;

function showSlide(n) {
  if (n < 1) {
    slideindex = slides.length;
  } else if (n > slides.length) {
    slideindex = 1;
  }

  for (let i = 0; i < slides.length; i++) {
    dots[i].classList.remove("active-dot");
    slides[slideindex - 1].classList.add("visible");
    dots[slideindex - 1].classList.add("active-dot");
  }
  setSlideNumber();
}

showSlide(slideindex);

prev.onclick = function() {
  showSlide(slideindex -= 1);
}

next.onclick = function() {
  showSlide(slideindex += 1);
}

function setSlideNumber() {
  for (let i = 0; i < number.length; i++) {
    number[i].innerHTML = slideindex + "/" + number.length;
  }
}

dotsArea.onclick = function(e) {
  for (let i = 0; i < dots.length + 1; i++) {
    if (e.target == dots[i - 1]) {
      showSlide(slideindex = i);
    }
  }
}


let  insFiles = input.files;

for(let i = 0; i < insFiles.length; i++) {

  let div = document.createElement("div");
  div.classList.add("my-slides");
  document.querySelector(".slideshow").prepend(div);

  let num = document.createElement("div");
  num.classList.add("number-text");
  document.querySelector(".my-slides").append(num);

  let image = document.createElement("img");
  img.src = URL.createObjectURL(insFiles[i]);
  document.querySelector(".my-slides").append(img);
}

