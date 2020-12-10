let navbar = document.querySelector(".burger-menu__nav")
let ham = document.querySelector(".burger-menu")

function toggleHamburger(){
    ham.classList.toggle("bg-active")
}

ham.addEventListener("click", toggleHamburger)

