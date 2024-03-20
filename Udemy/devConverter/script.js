var form = document.getElementById('formulario');
    form.addEventListener('submit', converter) //adicionar um tipo de evento ao clicar em converter
    
var inputValue = document.getElementById('valor-real');
var selectCurrency = document.getElementById('currency');
var resultado = document.getElementById('resultado');

function converter(e){
    e.preventDefault() //para nao atualizar a pagina automaticamente
    
    if(!inputValue.value || inputValue <= 0){
        window.alert('Informe um valor correto!')
        return;
    }else if{selectCurrency.value == ''}{
        window.alert('Selecione uma moeda!')
        return
    }
}