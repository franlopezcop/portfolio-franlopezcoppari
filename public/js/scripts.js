const toggleMenuElement = document.getElementById('toggle-menu');
const navListElement = document.getElementById('nav-list');
// const body = document.getElementsByClassName('nav_item')
toggleMenuElement.addEventListener('click',()=>{
    navListElement.classList.toggle('nav-list--show')
})

// if(navListElement.classList == 'nav-list--show'){
//     document.addEventListener('click',()=>{
//         navListElement.classList('nav-list')
// })
// }