window.onload = () => {
  const container = document.querySelector(".product-cards");

  try {

    // const response = await fetch("../data/projetos.json");
    // const projetos = await response.json();

    const response = fetch('../data/projetos.json').then(
      resposta => {
        return resposta.json();
      }
    ).then(
      projetos => {
        projetos.forEach(projeto => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.textContent = projeto.titulo;
        card.appendChild(title);

        const desc = document.createElement("p");
        desc.textContent = projeto.descricao;
        card.appendChild(desc);

        projeto.links.forEach(linkData => {
          const link = document.createElement("a");
          link.href = linkData.url;
          link.textContent = linkData.texto;
          card.appendChild(link);
        });

        container.appendChild(card);
      });
      }
    )

    // projetos.forEach(projeto => {
    //   const card = document.createElement("div");
    //   card.classList.add("card");

    //   const title = document.createElement("h3");
    //   title.textContent = projeto.titulo;
    //   card.appendChild(title);

    //   const desc = document.createElement("p");
    //   desc.textContent = projeto.descricao;
    //   card.appendChild(desc);

    //   projeto.links.forEach(linkData => {
    //     const link = document.createElement("a");
    //     link.href = linkData.url;
    //     link.textContent = linkData.texto;
    //     card.appendChild(link);
    //   });

      // container.appendChild(card);
    // });
  } catch (error) {
    console.error("Erro ao carregar os projetos:", error);
    container.innerHTML = "<p>Não foi possível carregar os projetos.</p>";
  }
};

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