let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function cliqueBotao(){

    console.log('O Botão foi Clicado')

}

function alerta(){
    alert("Eu amo js")
}

function cidades(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function calculo(){
    let numero1 = parseInt(prompt("Digite um numero:"));
    let numero2 = parseInt(prompt("Digite o segundo numero:"));

    /*let soma = numero1 + numero2;
    alert(soma); */ 

    if (isNaN(numero1) || isNaN(numero2)){

        alert("Não e um numero interiro");

    }else{

        let soma = numero1 + numero2;
        alert(`Resultado: ${soma}`);     
    }

}