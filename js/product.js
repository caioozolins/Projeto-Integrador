var produtos = [
    {
      imagem: '../images/balm.jpg',
      nome: 'Balm para barba viking',
      texto: 'Loção pós barba com hidratação intensiva e aloe vera',
    }
  ]
  
  produtos.map((produto) => {
      document.getElementById('produtos').innerHTML += `
        <div class="produto">
            <img src="${produto.imagem}">
            <h2>${produto.nome}</h2>
            <p>${produto.texto}</p>
            <button>comprar</button>
        </div>
      `
  })