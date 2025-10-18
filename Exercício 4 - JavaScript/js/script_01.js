const paragrafo = document.getElementById("p_texto");
const button = document.getElementById("btn_1");
function MudarTexto() {
paragrafo.textContent = "Voce gosta de homens kkkkk"
}


button.addEventListener('click',MudarTexto)