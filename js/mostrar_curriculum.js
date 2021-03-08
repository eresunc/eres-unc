let modalTitle = document.querySelector("#curriculumModal .modal-title")
let modalDesc = document.querySelector("#curriculumModal .modal-body")
let modalFooter = document.querySelector("#curriculumModal .modal-footer")

let verPerfilBtns = document.querySelectorAll(".ver-perfil")
let cardMembers = document.querySelectorAll(".team-member-card")

for (let btnPerfil of verPerfilBtns) {
  btnPerfil.addEventListener("click", (e) => {
    let _btnPerfil = e.target
    let curr = curriculums[_btnPerfil.id]

    modalTitle.innerHTML = curr.nombre
    modalDesc.innerHTML = curr.html
    modalFooter.innerHTML = curr.redes

    let cardMember = _btnPerfil.parentNode.parentNode
    let content = cardMember.innerHTML
    cardMember.innerHTML = content

    refreshElement(_btnPerfil.id)
  })
}

function refreshElement(btnPerfilId) {
  let btnPerfil = document.getElementById(btnPerfilId)
  btnPerfil.addEventListener("click", (e) => {
    let _btnPerfil = e.target
    let curr = curriculums[_btnPerfil.id]

    modalTitle.innerHTML = curr.nombre
    modalDesc.innerHTML = curr.html
    modalFooter.innerHTML = curr.redes

    let cardMember = _btnPerfil.parentNode.parentNode
    let content = cardMember.innerHTML
    cardMember.innerHTML = content

    refreshElement(_btnPerfil.id)
  })
}
