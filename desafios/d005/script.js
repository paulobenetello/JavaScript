function convert(){
    const res = document.getElementById('res');
    let m = prompt('Escreva a distãncia em metros(m)');
    let mvir = parseFloat(m.replace(',', '.'));

    res.innerHTML = `<h2>${mvir} metros, corresponde a:</h2>`
    res.innerHTML += `<p>${(mvir / 1000.).toFixed(3)} em quilometros(Km)</p>`
    res.innerHTML += `<p>${(mvir / 100.).toFixed(3)} em hectometro(Hm)</p>`
    res.innerHTML += `<p>${(mvir / 10.).toFixed(3)} em decametro(Dam)</p>`
    res.innerHTML += `<p>${(mvir * 10.).toFixed(3)} em decimetro(dm)</p>`
    res.innerHTML += `<p>${(mvir * 100.).toFixed(3)} em centimetro(cm)</p>`
    res.innerHTML += `<p>${(mvir * 1000.).toFixed(3)} em milimetro(mn)</p>`
}