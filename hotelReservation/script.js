function calcula() {
    let numero = document.fdatos.entrada.value;

    let dato = document.getElementById("lista");
    let valor = dato.options[lista.selectedIndex].value;
    let datoP = document.getElementById("parking");
    let park = datoP.options[parking.selectedIndex].value;

    let yes = document.getElementById("spasi"); 
    let no = document.getElementById("spano"); 
    let hab = (numero * valor);
    let aparc =(numero * park); 
       
      if (yes.checked == true && no.checked == true){  
        return document.getElementById("error").innerHTML = "(Por favor, marca solo una opción)";  
      }  
      else if (yes.checked == true){  
        var y = document.getElementById("spasi").value;  
        return document.getElementById("result").innerHTML = (hab) + (aparc) + Number(y) + "€";   
      }   
      else if (no.checked == true){  
        var n = document.getElementById("spano").value;  
        return document.getElementById("result").innerHTML = (hab) + (aparc) + Number(n) + "€";  
      }  
      else {  
        return document.getElementById("error").innerHTML = "*Por favor, marca una de las opciones, Sí o No";  
      }  
    }  
