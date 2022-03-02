var valorTemperatura
var valorOrigem
var valorDestino
var valorResultado

document.querySelector("button").onclick=function(){
    var valorTemperatura = document.getElementById("temp").value;
    var valorOrigem = document.getElementById("origem").value;
    var valorDestino = document.getElementById("destino").value;
    var valorResultado = valorTemperatura;

    if(valorOrigem == 'fahrenheit' && valorDestino == 'celsius'){
        valorResultado = (valorTemperatura - 32)/1.8
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'celsius' && valorDestino == 'fahrenheit'){
        valorResultado = (valorTemperatura * 1.8) + 32
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'celsius' && valorDestino == 'kelvin'){
        valorResultado = valorTemperatura + 273.15;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'kelvin' && valorDestino == 'celsius'){
        valorResultado == (valorTemperatura) - 273.15;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'kelvin' && valorDestino == 'fahrenheit'){
        valorResultado = (valorTemperatura - 273.15)*9/5+32;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'fahrenheit' && valorDestino == 'kelvin'){
        valorResultado = (valorTemperatura - 32)*5/9+273.15;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'celsius' && valorDestino == 'rankine'){
        valorResultado = (valorTemperatura * 9)/5+491.67;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'rankine' && valorDestino == 'celsius'){
        valorResultado = (valorTemperatura)*5/9-273.15;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'rankine' && valorDestino == 'kelvin'){
        valorResultado = valorTemperatura / 1.8;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'kelvin' && valorDestino == 'rankine'){
        valorResultado = valorTemperatura * 1.8;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'rankine' && valorDestino == 'fahrenheit'){
        valorResultado = valorTemperatura + 459.67;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'fahrenheit' && valorDestino == 'rankine'){
        valorResultado = (valorTemperatura) + 459.67;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    limparCampos();

    if(valorOrigem == valorDestino){
        alert("Não é possivel converter o mesmo tipo de temperatura")
    }
    
}

function limparCampos(){
    document.getElementById('temp').value=null
}
