window.onscroll = function () {
  myFunction()
}

var navbar = document.getElementById("sticky-nav")
var divImgLogo = document.getElementsByClassName("div-img-logo")[0]
var redesCirculo = document.getElementById("redesCirculo")
var sticky = navbar.offsetTop

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    divImgLogo.classList.add("flex-center")
    redesCirculo.classList.add("d-opacity-1")
  } else {
    navbar.classList.remove("sticky")
    divImgLogo.classList.remove("flex-center")
    redesCirculo.classList.remove("d-opacity-1")
  }
}
