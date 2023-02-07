const toggleMenuElement = document.getElementById('toggle-menu');
const navListElement = document.getElementById('nav-list');
const ref = document.getElementById('ref')
toggleMenuElement.addEventListener('click',()=>{
    navListElement.classList.toggle('nav-list--show')
})

if(navListElement.classList == 'nav-list--show'){
    ref.addEventListener('click',()=>{
        navListElement.classList('nav-list')
})
}