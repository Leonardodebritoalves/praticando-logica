let totalGeral;
limpar();



function adicionar () {
    //recuperar valores - nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    
    if ( !produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }
    
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let nomeProduto = produto.split('-')[0];
    let valorUnitario =  produto.split('R$')[1];  
    

    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    
    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul"> R$${preco} </span>
        </section>`;
        
   
     //atualizar o valor total da compra
     totalGeral = totalGeral + preco;
     let campoTotal = document.getElementById('valor-total');
     campoTotal.textContent = `R$ ${totalGeral}`;
     document.getElementById('quantidade').value = 0;


   
    
    


}

function limpar () {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0,00';
}


function modificarConteudo() {
    const paragrafo = document.getElementById('meuParagrafo');
    paragrafo.textContent = 'Texto alterado no Javascript';
}

//Desafio 4: Soma de dois números
    const numero1 = 15;
    const numero2 = 20;

    const soma = numero1 + numero2;
    const mensagem = `a soma de ${numero1} + ${numero2} é ${soma}.`;
    console.log(mensagem);

//Desafio 5: Separar duas sentenças com ponto e vírgula
const duasSentencas = "Criar o que não existe ainda deve ser a pretensão de todo sujeito que está vivo; A tarefa mais importante de uma pessoa que vem ao mundo é criar algo"
const frasesSeparadas = duasSentencas.split(';');

console.log(frasesSeparadas);

//Desafio 6
const numeros = "0,1,2,3,4,5,6,7,8,9,10";
const numerosSeparados = numeros.split(',');

console.log(numerosSeparados);

