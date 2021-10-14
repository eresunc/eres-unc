const navbar = document.getElementById("sticky-nav")
const mainContainer = document.querySelector("body")
const sticky = navbar.offsetTop

function addStickyStyle() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    mainContainer.style.marginTop = '70px'
  } else {
    navbar.classList.remove("sticky")
    mainContainer.style.marginTop = 'inherit'
  }
}

function addListenersToMenuOptions() {
  const menuItems = document.querySelectorAll('.item-menu')

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(it => it.classList.remove('active'))
      item.classList.add('active')
      setTimeout(() => {
        window.scrollBy(0, -70)
      }, 10)
    })
  })
}

window.onscroll = function () {
  addStickyStyle()
}
addListenersToMenuOptions()
