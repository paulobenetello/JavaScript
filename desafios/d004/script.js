function calculo(){
    let nam = prompt('Que vc ja comprando ai pq eu sou cego');
    let price = prompt('beleza, agora quanto que custa isso ai?(só numeros pfvr)');
    let pay = prompt('Agora me fala quanto vc vai pagar(só numeros tambem pfvr)');

    if(isNaN(price) || isNaN(pay)){
        alert('escreve direito os preço ai que eu não enxergo');
    }else if(price > pay){
        alert(`Ta querendo me roubar é? o ${nam} custa R$${price},00 e vc ta querendo pagar R$${pay},00`);
    }else{
        let crr = pay - price;
        alert(`Ok! Vc comprou ${nam} que custa R$${price},00 e vai me pagar R$${pay},00 , então seu troco é R$${crr},00!`);
    }
}