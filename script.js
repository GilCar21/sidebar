let btn = document.querySelector("#btn")
let sidebar = document.querySelector(".sidebar")
let pesquisa = document.querySelector(".lupa")

btn.onclick = function(){
    sidebar.classList.toggle("active")
}
pesquisa.onclick = function(){
    sidebar.classList.toggle("active")
}