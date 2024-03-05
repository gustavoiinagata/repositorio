alert('não gozei');
let nomeUsuario = "";
let anterior = document.querySelector('#texto');

while( nomeUsuario == ""){
    nomeUsuario = prompt('Qual é o seu rapper favorito?');
}
if(nomeUsuario ==null){
    anterior.textContent = 'usuario';
} else {
   anterior.textContent = nomeUsuario;
}
