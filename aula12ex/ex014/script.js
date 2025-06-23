function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.toLocaleTimeString('pt-BR');
    var simpleshora = data.getHours();
    var dia = data.toLocaleDateString('pt-BR')
    msg.innerHTML = `Hoje é ${dia} e são ${hora}.`;


    if(simpleshora >= 0 && simpleshora < 12){
        //Bom dia
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#FDD882'
    }else if(simpleshora <= 18){
        //Boa tarde
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#D99559'
    }else{
        //Boa noite
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#033F73'
    }

    setInterval(carregar, 1000);
}