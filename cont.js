const botoes = document.querySelectorAll( '.objetivos ');
const textos = document.querySelectorAll( '.aba-conteudo');

for (let x = 0; x<botoes. length; x++){
    console.log(x);
    botoes[x].onclick = fuction () {
    for(let y= 0; y< botoes.length; y++){
        botoes[y].classList.remove('ativo');
        textos[y].classList.remove('ativa');
    }
        botoes[x].classList.add('ativo');
        textos[x].classList.add('ativa');
}
//botoes[x].classList.remove('ativo');}
}

