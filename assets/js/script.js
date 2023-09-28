const apiKey = "a5d68467"; //código da api
const frmPesquisa = document.querySelector("form"); //pegando o elemento do formulário

frmPesquisa.onsubmit = (ev) => {
  //função anônima para fazer a requisição na api quando clicar em submit
  ev.preventDefault();

  const pesquisa = ev.target.pesquisa.value;

  if (pesquisa == "") {
    alert("Preencha o campo!");
    return;
  }

  fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${pesquisa}`)
    .then((result) => result.json())
    .then((json) => carregaLista(json));
};

const carregaLista = (json) => {
  // função que cria os cards dos filmes e insere no HTML
  const lista = document.querySelector("div.lista");
  const catalogo = document.querySelector("section.catalogo")

  if (json.Response == "False") {
    alert("Nenhum filme ou série encontrado!");
    return;
  }

  lista.innerHTML = "";
  catalogo.innerHTML = "";

  json.Search.forEach((element) => {
    let item = document.createElement("div");
    item.classList.add("item");

    item.innerHTML = `<img src="${element.Poster}" alt=""/> <h2>${element.Title}</h2>`;

    lista.appendChild(item);
    catalogo.appendChild(lista);
  });
};
