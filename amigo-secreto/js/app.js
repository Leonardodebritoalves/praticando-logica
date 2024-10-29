let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    if (amigo.value == '') {
        alert('É necessário digitar um nome.')
        return;
    }

    let amigoMaiusculo = amigo.value.toUpperCase();

    if (amigos.includes(amigoMaiusculo)) {
        alert('Esse nome já foi adicionado!')
        return;
    }

    
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigoMaiusculo);

    if (lista.textContent == '') {
        lista.textContent = amigoMaiusculo;
    } else {
        lista.textContent = lista.textContent + ', ' + amigoMaiusculo;
    }
    amigo.value = '';
}

function sortear() {
    if ( amigos.length < 4) {
        alert('Adicionar pelo menos 4 amigos!')
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
            }
    }

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
} }

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}