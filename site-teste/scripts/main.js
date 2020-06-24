const MeuCabecalho = document.querySelector('h1'); /*para obter uma referência ao título e armazená-lo em uma variável chamada meuCabecalho */
MeuCabecalho.textContent = 'Te damos la bienvenida'; /*  você define o valor da propriedade textContent para "Hello world!", na variável meuCabecalho */
let minhaImagem = document.querySelector('img'); // mudar a imagem com um clik

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src'); //função sem nome (uma função "anônima")
    if(meuSrc === 'imagens/logo.png') {
      minhaImagem.setAttribute ('src','imagens/logo2.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/logo.png');
    }
}
let meuBotao = document.querySelector('button'); // referências para o botão que adicionamos e para o título, e guarda ambos em variáveis
let meuCabecalho = document.querySelector('h1');
function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.'); // prompt(), que traz uma caixa de diálogo assim como alert() faz
    localStorage.setItem('nome', meuNome); //chamamos uma API denominada localStorage, o que nos permite guardar dados no navegador para usarmos mais tarde
    meuCabecalho.textContent = 'Te damos la bienvenida, ' + meuNome;
  }
  if(!localStorage.getItem('nome')) {
    defineNomeUsuario(); // código de inicialização
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Te damos la bienvenida, ' + nomeGuardado;
  }
  meuBotao.onclick = function() { defineNomeUsuario();
  }
  function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.'); // impedir valor null
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Te damos la bienvenida, ' + meuNome;
    }
  }