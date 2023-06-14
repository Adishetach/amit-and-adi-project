var slideIndex = 1;


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i = 0;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log({
        slides, slideIndex
    })
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;


}

function displayHiddenText(oliveType) {
    document.getElementById('typeOliveOpen_' + oliveType).className = "typeOlive open";
    document.getElementById('learnMore_' + oliveType).style.display = "none"
    document.getElementById('hideLearnMore_' + oliveType).style.display = "block"
    setTimeout(function () {
        document.getElementById('hiddenText_' + oliveType).style.display = "block";
    }, 250);
}


function hideHiddenText(oliveType) {
    document.getElementById('typeOliveOpen_' + oliveType).className = "typeOlive";
    document.getElementById('hiddenText_' + oliveType).style.display = "none";
    document.getElementById('learnMore_' + oliveType).style.display = "block"
    document.getElementById('hideLearnMore_' + oliveType).style.display = "none"
}







