const sideBars = [
    {name: 'Menu', icon: ''},
    {name: 'Quản lí đơn hàng', icon: 'mdi mdi-account'},
    {   name: 'Quản lí xe',
        icon: 'mdi mdi-account',
        icon2: 'mdi mdi-chevron-down',
        children: [
            {name: 'Quản Lý Xe Máy', icon: 'mdi mdi-account'},
            {name: 'Quản Lý Xe Hơi', icon: 'mdi mdi-account'},
        ]
    },
    {name: 'Quản lí dịch vụ', icon: 'mdi mdi-account'},
    {name: 'Cài Dặt khác', icon: 'mdi mdi-account'},
]
let sideBarWrap = document.querySelector('.side-bar')
sideBars.forEach(sideBar => {
    if(sideBar.children) {
        const newDiv = document.createElement("div");
        newDiv.classList.add('side-bar__item', 'level2')
        newDiv.innerHTML += `
            <div class="side-bar__item-content">
                <span class="${sideBar.icon}"></span>
                <span>${sideBar.name}</span>
                <div><span class="${sideBar.icon2}"></span></div>
            </div>
        `
        const newDiv2 = document.createElement("div");
        newDiv2.classList.add('side-bar__item__child', 'none')
        sideBar.children.forEach(child => {
            newDiv2.innerHTML += `
                <div class="side-bar__item__child_item">
                    <span class="${child.icon}"></span>
                    <span>${child.name}</span>
                </div>
            `
        })
        newDiv.append(newDiv2) 
        sideBarWrap.appendChild(newDiv)
    } else {
        sideBarWrap.innerHTML += `
        <div class="side-bar__item">
            <div class="side-bar__item-content">
                <span class="${sideBar.icon}"></span>
                <span>${sideBar.name}</span>
            </div>
        </div>
    `
    }
})
// Onclick sidebar level2
const sideBarLevel2 = document.querySelectorAll('.side-bar__item.level2')
sideBarLevel2.forEach(e => {
    e.onclick = () => {
       e.children[1].classList.toggle('none')
    }
})

// Members
const members = [
    {id: 1, name: 'Lực', email: 'a@test.com'},
    {id: 2, name: 'Dũng',  email: 'a@test.com'},
    {id: 3, name: 'Vượng', email: 'a@test.com'}
]
const keys = ['Id', "Name", "Email", "Action"]

const table = document.querySelector('.table') 
const thead = document.querySelector('.table-header')
// Table header
keys.forEach(key => {
    thead.innerHTML += `<div class="table-header__cell">${key}</div>`
})
// Table body
members.forEach(member => {
    const newDiv = document.createElement("div");
    newDiv.classList.add('table-body')
    newDiv.innerHTML = `
        <div class="table-body__cell">${member.id}</div>
        <div class="table-body__cell">${member.name}</div>
        <div class="table-body__cell">${member.email}</div>
        <div class="table-body__cell">
            <button class="edit-btn">
                <span class="mdi mdi-pencil"></span>
                edit
            </button>
            <button class="del-btn">
                <span class="mdi mdi-trash-can-outline"></span>
                delete
            </button>
        </div>
    `
    table.append(newDiv)
})
// Onclick Button
const btnEdits = document.querySelectorAll(".edit-btn")
const overlay = document.querySelector('.overlay')
btnEdits.forEach(btnEdit => {
    btnEdit.onclick = () => {
        overlay.classList.remove('none')
    }
})
// Hidden overlay
function remove() {
    overlay.classList.add('none')
}