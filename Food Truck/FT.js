// function createMasterMenu(menu){
//     const masterMenu = new Set;
//     menu.map(m => m.map(mm => masterMenu.add(mm)))
//     return masterMenu
// }
function createMasterMenu(menu){
    const masterMenu = new Set;
    menu.flat().map(m => masterMenu.add(m))
    return masterMenu
}

const list = document.querySelector("#master-menu")
const masterMenu = createMasterMenu([['Tacos', 'Burgers'], ['Pizza'], ['Burgers', 'Fries']])
for (let item of masterMenu){
    list.insertAdjacentHTML("beforeend", `<li>${item}</li>`)
}
