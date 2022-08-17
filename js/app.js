function myFunction() {
    var dots = 
    document.getElementById("dots");
    var moreText = 
    document.getElementById("more");
    var btnText = 
    document.getElementById("myBtn");

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction1() {
    var dots = 
    document.getElementById("dots1");
    var moreText = 
    document.getElementById("more1");
    var btnText = 
    document.getElementById("myBtn2");

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction2() {
    var dots = 
    document.getElementById("dots2");
    var moreText = 
    document.getElementById("more2");
    var btnText = 
    document.getElementById("myBtn3");

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

mybutton = document.getElementById("topBtn");

window.onscroll = function(){scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
