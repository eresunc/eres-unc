window.onscroll = function () {
  myFunction()
}

var navbar = document.getElementById("sticky-nav")
var redesCirculo = document.getElementById("redesCirculo")
var sticky = navbar.offsetTop

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    redesCirculo.classList.add("d-opacity-1")
  } else {
    navbar.classList.remove("sticky")
    redesCirculo.classList.remove("d-opacity-1")
  }
}
