function tabuada(){
    var num = document.getElementById('txtn');
    var sel = document.getElementById('seltab');

    if(num.value.length != 0){
        sel.innerHTML = '';
        var n = Number(num.value);
        for (let i = 1; i < 11; i++) {
            var option = document.createElement('option');
            option.text = `${n} X ${i} = ${n * i}`;
            option.value = `sel${i}`;
            sel.appendChild(option);
        }
    }else{
        window.alert('Por Favor digite um numero!');
    }
}