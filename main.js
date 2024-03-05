alert('não gozei');
let nomeUsuario = "";
let anterior = document.querySelector('#texto');

while( nomeUsuario == "" || nomeUsuario == null){
    nomeUsuario = prompt('Qual é o seu rapper favorito?');
}

anterior.textContent = nomeUsuario;