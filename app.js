let slides = document.querySelectorAll(".my-slides"),
    dots = document.querySelectorAll(".dot"),
    dotsArea = document.querySelector(".dots"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    number = document.querySelectorAll(".number-text"),
    img = document.querySelectorAll("img"),
    input = document.querySelector("input"),
    slideindex = 1;

function showSlide(n) {
  if (n < 1) {
    slideindex = img.length;
  } else if (n > img.length) {
    slideindex = 1;
  }

  for (let i = 0; i < img.length; i++) {
    dots[i].classList.remove("active-dot");
    img[i].classList.add("hidden");
    img[slideindex - 1].classList.add("visible");
    dots[slideindex - 1].classList.add("active-dot");
  }
  setSlideNumber();
}

prev.onclick = function() {
  showSlide(slideindex -= 1);
}

next.onclick = function() {
  showSlide(slideindex += 1);
}

function setSlideNumber() {
  for (let i = 0; i < img.length; i++) {
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


function handleFileSelect(evt) {
  let files = evt.target.files;

  for(let i = 0, f; f = files[i]; i++) {
    let reader = new FileReader();
    reader.onload = (function(theFile) {
      return function(e) {

        let newImg = document.createElement("img");
        newImg.src = e.target.result;
        document.querySelector(".my-slides").append(newImg);
      }
    })(f);

    reader.readAsDataURL(f);
  }
  callback(showSlide(slideindex));
}


input.addEventListener('change', handleFileSelect);

input.onchange = function() {
  document.querySelector(".insert-image").classList.add("hidden");
  document.querySelector(".slideshow").classList.add("visible");
}