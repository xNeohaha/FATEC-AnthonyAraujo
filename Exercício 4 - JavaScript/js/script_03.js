
const button = document.getElementById("btn_03");
function ExibirSeuNome() {
const inputNome = document.getElementById("camp-name");
const resultado = document.getElementById("res-name");
const newname = inputNome.value;
resultado.textContent = `Olá, ${newname}! Bem-vindo!!`;
}


button.addEventListener('click',function(){
const inputNome = document.getElementById("camp-name");
const resultado = document.getElementById("res-name");
const newname = inputNome.value;
resultado.textContent = `Olá, ${newname}! Bem-vindo!!`;

}

)