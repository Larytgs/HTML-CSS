function sair(elemento){
    var lista = document.getElementById(elemento).style.lista;
    if (lista == 'block'){
        document.getElementById(elemento).style.lista = 'none';
    }else{
        document.getElementById(elemento).style.lista = 'block';
    }
}