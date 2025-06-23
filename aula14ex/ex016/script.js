function cont() {
    var ini = Number(window.document.getElementById('ini').value);
    var fim = Number(window.document.getElementById('fim').value);
    var pas = Number(window.document.getElementById('pas').value);
    var res = document.querySelector('.res');

    res.innerHTML = ``;
    if(ini.length == 0 || fim.length == 0 || pas.length == 0){
        //Verificar se tem numero(Inutil pq eu coloquei number la em cima)
        alert('Faltam dados')
    }else if (fim == 0) {
        //Ve se o fim esta em 0
        res.innerHTML = 'Dados invalidos, impossivel contar'
    } else if(ini > fim){
        //verifica se passo == 0
        if (pas <= 0) {
            window.alert('Numero de passo invalido, mudando automaticamente para 1');
            pas = 1;
        }
        //Faz a contagem decrescente
        while(ini >= fim){
            res.innerHTML += `${ini.toString()} \u{1F449} `;
            ini -= pas;
        }
        res.innerHTML += `\u{1F3C1}`
    } else {
        //verifica se passo == 0
        if (pas <= 0) {
            window.alert('Numero de passo invalido, mudando automaticamente para 1');
            pas = 1;
        }
        //Faz contagem crescente
        while (ini <= fim) {
            res.innerHTML += `${ini.toString()} \u{1F449} `;
            ini += pas;
        }
        res.innerHTML += `\u{1F3C1}`
    }
}