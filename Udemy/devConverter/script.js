var form = document.getElementById('form');
    form.addEventListener('submit', converter) //adicionar um tipo de evento ao clicar em converter
    
    var inputValue = document.getElementById('valor-real');
    var selectCurrency = document.getElementById('currency');
    var resultado = document.getElementById('resultado');

function converter(e){

    e.preventDefault() //para nao atualizar a pagina automaticamente
    alert('oi')
}