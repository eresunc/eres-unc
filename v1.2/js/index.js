let DOM = {
  modalTitle: document.querySelector("#propuestaModal .modal-title"),
  modalDesc: document.querySelector("#propuestaModal .modal-body"),
  seccionPilares: document.querySelector(".seccion-pilares"),
}

for (let key in pilares) {
  insertarEstructurasPilares(key)
  addPropuestasListener(key)
  setSeccionPropuestasHeight(key, pilares[key].propuestas.length - 2)
}

function insertarEstructurasPilares(key) {
  let html = `
          <label for="chk-${key}" class="pilar">
            ${pilares[key].name}
            <br>
            <span class="ver-propuestas"><img class="d-arrow" src="./img/arrow-down.jpg" alt="ver propuestas"></span>
          </label>
          <input class="check-hidden" id="chk-${key}" type="checkbox" hidden />
      `

  const pilarName = pilares[key].name.split(":")[1]

  html += `
      <section id="${key}" class="seccion-propuestas">
          <section class="seccion-front">
              <span class="txt-rot-vertical">${pilarName}</span>
          </section>

          <section class="seccion-back">
              <div class="items-container">
      `

  pilares[key].propuestas.forEach((_, ind) => {
    html += `
                  <div class="item-propuesta" data-toggle="modal" data-target="#propuestaModal">
                      <span class="circle">
                          <i class="gg-pentagon-right"></i>
                      </span>

                      <div class="propuesta-title">
                          <span>Propuesta Nro. ${ind + 1}</span>
                      </div>
                  </div>
      `
  })

  html += `
              </div>
          </section>
      </section>
    `

  DOM.seccionPilares.insertAdjacentHTML("beforeend", html)
}

function addPropuestasListener(key) {
  let propuestasItems = document.querySelectorAll(`#${key} .item-propuesta`)
  propuestasItems.forEach((item, ind) => {
    item.addEventListener("click", () => {
      let propuesta = pilares[key].propuestas[ind]
      DOM.modalTitle.innerHTML = `Propuesta Nro. ${ind + 1}`
      DOM.modalDesc.innerHTML = `
          ${
            propuesta.problematica
              ? `<h6 class="prop-problematica">PROBLEMÁTICA</h6>
          <p>${propuesta.problematica}</p>`
              : ""
          }

          <h6 class="prop-propuesta">PROPUESTA</h6>
          <p>${propuesta.propuesta}</p>

          <h6 class="prop-estrategia">ESTRATEGIAS</h6>
          <ul class="lista-estrategias">
            ${propuesta.estrategias
              .map((item) => `<li>${item}</li>`)
              .join()
              .replace(/,/g, "")}
          </ul>
        `
    })
  })
}

function setSeccionPropuestasHeight(key, extraItems) {
  // Section fron min height: 170px, can hold 2
  // after 2, height should increase by 50px for each extra item
  const checkBx = document.querySelector(`#chk-${key}`)
  const front = document.querySelector(`#${key} .seccion-front`)
  const seccionPropuestas = document.querySelector(`#${key}`)
  let height = 170
  let factor = 50

  if (screen.width <= 460) {
    height = 150
    factor = 35
  }

  height += extraItems > 0 ? extraItems * factor : 0
  front.style.height = height + "px"

  checkBx.addEventListener("change", () => {
    document.querySelectorAll('.pilar + .check-hidden')
      .forEach(chk => {
        if (chk !== checkBx)
        {
          let propuestaId = chk.id.split('-')[1]
          chk.checked = false
          document.getElementById(propuestaId).style.height = "0"
        }
      });

    document.querySelectorAll(`.d-arrow`).forEach(img => (img.src = './img/arrow-down.jpg'))

    let img = checkBx.previousElementSibling.querySelector('.d-arrow')
    if (checkBx.checked) {
      seccionPropuestas.style.height = height + 100 + "px"
      img.src = './img/arrow-up.png'
    } else {
      seccionPropuestas.style.height = "0"
      img.src = './img/arrow-down.jpg'
    }
  })
}

function addIframe() {
  const postsContainer = document.getElementById('fb-posts')
  const mainContent = document.getElementById('main-content')
  postsContainer.innerHTML = ''
  const height = mainContent.offsetHeight
  const width = (window.innerWidth > 850)? 250: (window.innerWidth > 500)? 500: window.innerWidth - 100
  const iframe = `<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Feres.unc.cajamarca%2F&tabs=timeline&width=${width}&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1220978138367772" width="${width}" height="${height}" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>`

  postsContainer.innerHTML = iframe
}

addIframe()
window.addEventListener('resize', addIframe)
