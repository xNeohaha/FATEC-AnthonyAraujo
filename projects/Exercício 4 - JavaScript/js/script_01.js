const paragrafo = document.getElementById("p_texto");
const button = document.getElementById("btn_1");
function MudarTexto() {
paragrafo.textContent = "CONCORDO!"
}


button.addEventListener('click',MudarTexto)