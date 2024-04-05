const botos = document.querySelectorAll( '.objetivos ');


for (let x = 0; x<botoes. length; x++){
    console.log(x);
    botoes [x].onclick = fuction () {
    for(let y= 0; y< botoes.length; y++){
        botoes [y].classList.remove('atvo');
    }
        botoes [x].classList.add('atvo');}
}
//botoes [x].classList.remove('atvo');}
}

