function vai(){
    num = prompt('Digite um numero inteiro');

    if(isNaN(num)){
        alert('um numero sua anta');
    }else if(num <= 0){
        alert('Mais doq isso anta');
    }else{
        alert(`Ae conseguio! antes tem ${num - 1} e depois tem ${Number(num) + 1}`);
    }
}