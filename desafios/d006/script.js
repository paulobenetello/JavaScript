function convert(){
    const res = document.getElementById('res');

    let temp = prompt('Digite apenas os numeros da temperatura em ºC (celsius)');
    let crr = parseFloat(temp.replace(',', '.'));

    res.innerHTML = `<h2>${temp} celsius corresponde a:</h2>`;
    res.innerHTML += `<p>${((crr + 273.15).toFixed(3)).replace('.', ',')}K (kelvin)</p>`;
    res.innerHTML += `<p>${(((crr * 1.8) + 32).toFixed(3)).replace('.', ',')}ºF (Fahrenheit)</p>`;
}