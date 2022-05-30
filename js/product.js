var produtos = [
  {
    imagem: "../images/balm.png",
    nome: "Balm para barba viking",
    texto: " Loção pós barba com hidratação intensiva e aloe vera.",
  },
  {
    imagem: "../images/pomada.jpg",
    nome: "Pomada capilar matte",
    texto: "Este produto é perfeito para quem busca eficácia e naturalidade.",
  },
  {
    imagem: "../images/minoxidil.jpg",
    nome: "Minoxidil Kirkland",
    texto: "Indicado para tratamentos contra calvíce e falhas.",
  },
  {
    imagem: "../images/kitbarba.jpg",
    nome: 'Kit "Barba de macho"',
    texto: "Inclui óleo, shampoo e balm de extrema qualidade.",
  },
];
produtos.map((produto) => {
  document.getElementById("produtos").innerHTML += `
        <div class="produto">
            <img src="${produto.imagem}">
            <div>
            <h2>${produto.nome}</h2>
            <hr>
            <p>${produto.texto}</p>
            <br><br><br>
            <button>Comprar</button>
            </div>
        </div>
      `;
});
