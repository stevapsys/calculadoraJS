let listaDeTeclas = document.querySelectorAll ('.teclas');
let conteudoDoVisor = document.querySelector('.visor div');
let buttonResultado = document.querySelector('#resultado')
let buttonLimpar = document.querySelector('#limpar')

//COLOCANDO O CONTEÚDO NO VISOR
//conteudoDoVisor.innerHTML = "Olá"

//PARA VER OS NÚMEROS NO CONSOLE 
listaDeTeclas.forEach(tecla => {
    tecla.onclick = () => {
        //if(tecla.textContent == "=" || tecla.textContent == "CE") {
        //    return
       // }
        // conteudoDoVisor.append(tecla.textContent) - funciona também!
        conteudoDoVisor.innerHTML += tecla.textContent
    }
})

buttonResultado.onclick = () => {
    let resultadoDaOperacao = eval(conteudoDoVisor.textContent)
    conteudoDoVisor.innerHTML = resultadoDaOperacao
}

buttonLimpar.onclick = () => {
    conteudoDoVisor.innerHTML = ""
}