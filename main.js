$(document).ready(function() {
  $('header button').click(function() {
    $('form').slideDown();
  })

  $('#botao-cancelar').click(function() {
    $('form').slideUp();
  })

  $('form').on('submit', function(e) {
    e.preventDefault();
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //val é uma função, no JS puro usaria value
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); //appendto pega o elemento $(`<img src="${enderecoDaNovaImagem}" />`) e insere dentro do li
    $(`
      <div class="overlay-img-link" >
        <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real"> 
          Ver imagem em tamanho real
        </a>
      </div>
    `).appendTo(novoItem); //target="_blank faz com o que o link abra em outra aba
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000); //fadein função para surgir após aplicar display none. 1000 é 1s
    $('#endereco-imagem-nova').val(''); //limpa o campo de link após adc
  })
})