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

window.addEventListener('click', () => {
  console.log("Clicked !!!");
})

function insertarEstructurasPilares(key) {
  let html = `
          <label for="chk-${key}" class="pilar">
            ${pilares[key].name}
            <br>
            <span class="ver-propuestas">ver propuestas</span>
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
  let checkBx = document.querySelector(`#chk-${key}`)
  let front = document.querySelector(`#${key} .seccion-front`)
  let seccionPropuestas = document.querySelector(`#${key}`)
  let height = 170
  let factor = 50

  if (screen.width <= 460) {
    height = 150
    factor = 35
  }

  height += extraItems > 0 ? extraItems * factor : 0
  front.style.height = height + "px"

  checkBx.addEventListener("change", () => {
    if (checkBx.checked) seccionPropuestas.style.height = height + 100 + "px"
    else seccionPropuestas.style.height = "0"
  })
}
