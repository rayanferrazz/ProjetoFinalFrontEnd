const html = document.getElementById("html");

function alterarModo() {
    if(html.classList.contains("dark-mode")) {
        html.removeAttribute("class", "light-mode");
        alterar.innerHTML = "Change to Dark Mode:";
} else {
     html.setAttribute("class", "dark-mode");
     alterar.innerHTML = "Change to Light Mode:";
}
}