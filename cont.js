const botoes = document.querySelectorAll( '.objetivos ');
const textos = document.querySelectorAll( '.aba-conteudo');

for (let x = 0; x<botoes. length; x++){
    console.log(x);
    botoes[x].onclick = function () {
    for(let y= 0; y< botoes.length; y++){
        botoes[y].classList.remove('ativo');
        textos[y].classList.remove('ativa');
    }
        botoes[x].classList.add('ativo');
        textos[x].classList.add('ativa');
}
//botoes[x].classList.remove('ativo');}
}

const contadores = document. querySelectorAll('.contador');
let tempoAtual = new Date ();
let tempoObjetivo1 = new Date ('2024-04-28T00:00:00');
let tempoFinal = tempoObjetivo1 - tempoAtual;

let segundos = tempoFinal/1000;

contadores[0].textContent = tempoFinal;


