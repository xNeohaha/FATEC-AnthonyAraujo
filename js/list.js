window.onload = () => { // Começa quando carrega a janela
  const container = document.querySelector(".product-cards"); //Container onde fica os Cards
// Codigo feito com muita fé e ajuda do Diego.
  try {
    const response = fetch('./data/projetos.json').then( // "Puxa" o JSON 
      response => {
        return response.json();
      }
    ).then(
      projetos => {
        projetos.forEach(projeto => { // Pra cada projeto, repete as ações abaixo com os dados do JSON.
        console.log("Criado: "+ projeto.titulo) // Alerta que deu certo de certa forma
        const card = document.createElement("div"); // Cria a DIV
        card.classList.add("card"); // Cria o Class Card

        const title = document.createElement("h3"); // Cria um H3
        title.textContent = projeto.titulo; // Seta o texto do H3 para o conteúdo "titulo" do JSON.
        card.appendChild(title); // NÃO SEI SÓ EXPLICAR MAS PEGA O NODE DA CHILD DE UM PARENTE, sendo a const title.

        const desc = document.createElement("p"); // Cria o <p> paragrafo da silva
        desc.textContent = projeto.descricao; // Puxa a descrição do Json
        card.appendChild(desc); // PEGA O NODE DA CHILD DE UM PARENTE, sendo a const desc.

        projeto.links.forEach(linkData => { // Pega os links e repete caso haja mais de um. (CASO HAJA MAIS DE UM)
          const link = document.createElement("a"); // Cria o anexo
          link.href = linkData.url; // Puxa o url do Json
          link.textContent = linkData.texto; // Puxa o texto do JSON
          card.appendChild(link); // PEGA O NODE DA CHILD DE UM PARENTE, sendo a const link.
        });

        container.appendChild(card); // Finaliza o Card
         console.log("Titulo: "+ projeto.titulo + "\nDescrição: "+ projeto.descricao) // Recap
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