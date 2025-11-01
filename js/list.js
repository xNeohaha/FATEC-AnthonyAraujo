window.onload = () => { // Começa quando carrega a janela
  const container = document.querySelector(".product-cards"); //Container onde fica os Cards
  // Codigo feito com muita fé e ajuda do Diego.
  try {
    const response = fetch('./data/projetos.json').then( // "Puxa" e chama o JSON 
      response => {
        return response.json();
      }
    ).then(
      projetos => {
        projetos.forEach(projeto => { // Pra cada projeto, repete as ações abaixo com os dados do JSON.
          console.log("Criado: " + projeto.titulo) // Alerta que deu certo de certa forma
          const card = document.createElement("div"); // Cria a DIV
          card.classList.add("card"); // Cria o Class Card

          const title = document.createElement("h3"); // Cria um H3
          title.textContent = projeto.titulo; // Seta o texto do H3 para o conteúdo "titulo" do JSON.
          card.appendChild(title); // Passa para o Node Parent Card

          if (projeto.semestre) { // Verifica se o Há um semestre atribuido.

            const semester = document.createElement("h4"); // Cria um H4
            semester.textContent = (projeto.semestre + "º Semestre"); // Seta o texto do H4 para o conteúdo "semestre" do JSON.
            card.appendChild(semester); // Passa para o Node Parent Car
          } else {
            console.error("O projeto " + projeto.titulo + " não possui semestre.");
          }
          if (projeto.status) {

            const statustext = document.createElement("h5"); // Cria um H5
            if (projeto.status == true) {
              statustext.textContent = ("O exercício está completo."); // Seta o texto do H4 para o conteúdo "semestre" do JSON.
            } else if (projeto.status == false) {
              statustext.textContent = ("O exercício está incompleto. Talvez um erro."); // Seta o texto do H4 para o conteúdo "semestre" do JSON.
            }
            card.appendChild(statustext); // Passa para o Node Parent Car
          }

          const desc = document.createElement("p"); // Cria o <p> paragrafo da silva
          desc.textContent = projeto.descricao; // Puxa a descrição do Json
          card.appendChild(desc);


          projeto.links.forEach(linkData => { // Pega os links e repete caso haja mais de um. (CASO HAJA MAIS DE UM)
            const link = document.createElement("a"); // Cria o anexo
            link.href = linkData.url; // Puxa o url do Json
            link.textContent = linkData.texto; // Puxa o texto do JSON
            card.appendChild(link); // Passa para o Node Parent Car
          });

          container.appendChild(card); // Finaliza o Card
          console.log("Titulo: " + projeto.titulo + "\nDescrição: " + projeto.descricao) // Recap
        });
      }
    )


  } catch (error) {
    console.error("Erro ao carregar os projetos:", error); // Incompetência do Programador 
    container.innerHTML = "<p>Não foi possível carregar os projetos.</p>";
  }
};





// IGNOREEEEEEEEEE


// document.addEventListener("DOMContentLoaded", async () => {
//   const container = document.querySelector(".product-cards");

//   try {

//     const response = await fetch("../data/projetos.json");
//     const projetos = await response.json();

//     const response = fetch('../data/projetos.json').then(
//     //   resposta => {
//     //     return resposta.json();
//     //   }
//     // ).then(
//     //   () => {

//     //   }
//     // )

//     projetos.forEach(projeto => {
//       const card = document.createElement("div");
//       card.classList.add("card");

//       const title = document.createElement("h3");
//       title.textContent = projeto.titulo;
//       card.appendChild(title);

//       const desc = document.createElement("p");
//       desc.textContent = projeto.descricao;
//       card.appendChild(desc);

//       projeto.links.forEach(linkData => {
//         const link = document.createElement("a");
//         link.href = linkData.url;
//         link.textContent = linkData.texto;
//         card.appendChild(link);
//       });

//       container.appendChild(card);
//     });
//   } catch (error) {
//     console.error("Erro ao carregar os projetos:", error);
//     container.innerHTML = "<p>Não foi possível carregar os projetos.</p>";
//   }
// });