let amigo = {
    nome: 'josé',
    peso: 70,
    engordar(p=0){
        this.peso += p;
    }
}

amigo.engordar(10);
console.log(amigo.peso)