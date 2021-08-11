function calcula() {
    let numero = document.fdatos.entrada.value;
    let dato = document.getElementById("lista");
    let valor = dato.options[lista.selectedIndex].value;
    let datoP = document.getElementById("parking");
    let park = datoP.options[parking.selectedIndex].value;
    //let spa = document.fdatos.spasi.value;
    //let spano = document.fdatos.spano.value;
    //let spanoN = parseInt(spano);
    //let spaN = parseInt(spa);

    if (numero === "") {
        alert("Por favor introduce el número de noches");
        return;
    }
  
    let hab = (numero * valor);
    let aparc =(numero * park);
    let resultado = (hab) + (aparc);
    
    document.getElementById("salida").innerHTML = "El total de tu reserva es de:  " + resultado + "€";
  }
