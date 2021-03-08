let modalTitle = document.querySelector("#curriculumModal .modal-title")
let modalDesc = document.querySelector("#curriculumModal .modal-body")
let modalFooter = document.querySelector("#curriculumModal .modal-footer")

let verPerfilBtns = document.querySelectorAll(".ver-perfil")
let cardMembers = document.querySelectorAll(".team-member-card")

for (let perfil of verPerfilBtns) {
  perfil.addEventListener("click", (e) => {
    let member = e.target
    console.log(member.id)
    let curr = curriculums[member.id]
    let cardMember = member.parentNode.parentNode

    modalTitle.innerHTML = curr.nombre
    modalDesc.innerHTML = curr.html
    modalFooter.innerHTML = curr.redes
  })
}
