
let slides = document.querySelectorAll(".myslides"),
	dots = document.querySelectorAll(".dot"),
	prev = document.querySelector(".prev"),
	next = document.querySelector(".next"),
	number = document.querySelectorAll(".numbertext"),
	slideindex = 1;

showSlide(slideindex);

function showSlide(n) {
	if (n < 1) {
		slideindex = slides.length;
	} else if (n > slides.length) {
		slideindex = 1;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
	}
	
	slides[slideindex - 1].style.display = "block";
	dots[slideindex - 1].classList.add("active");
	counter();
}

function counter() {
	for (let i = 0; i < number.length; i++) {
		number[i].innerHTML = slideindex + "/3";
	}
}

function plusSlide(n) {
	showSlide(slideindex += n);
}

prev.onclick = function() {
	plusSlide(1);
}

next.onclick = function() {
	plusSlide(-1);
}

function currentSlide(n) {
	showSlide(slideindex = n);
}



