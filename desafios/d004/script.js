function calculo(){
    let nam = prompt('Que vc ja comprando ai pq eu sou cego');
    let price = prompt('beleza, agora quanto que custa isso ai?(só numeros pfvr)');
    let pay = prompt('Agora me fala quanto vc vai pagar(só numeros tambem pfvr)');

    if(Number(price) === NaN || Number(pay) === NaN){
        alert('escreve direito os preço ai que eu não enxergo');
    }
    else if(price > pay){
        alert(`Ta querendo me roubar é? o ${nam} custa R$${price} e vc ta querendo pagar R$${pay}`);
    }
    console.log(Number(price))
    console.log(pay + ' pay')
}