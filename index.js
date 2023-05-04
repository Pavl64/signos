let dia=prompt("ingrese su fecha(1-31)");
let mes=prompt("ingrese su mes(1-12)");

if (dia>31 || dia<1) {
    console.log("esta fecha no exite")
} else {
    if((dia==30 && mes==2)||(dia==31 && mes==2)){
        console.log("esta fecha no existe")
    }else if(dia==29 && mes==2){
        console.log("Acuario-AÑO BISIESTO")
    }
    else{
    if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 19)) {
        console.log("Acuario");
    } else if ((mes == 2 && dia >= 20) || (mes == 3 && dia <= 20)) {
        console.log("Piscis");
    } else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
        console.log("Aries");
    } else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 21)) {
        console.log("Tauro");
    } else if ((mes == 5 && dia >= 22) || (mes == 6 && dia <= 21)) {
        console.log("Géminis");
    } else if ((mes == 6 && dia >= 22) || (mes == 7 && dia <= 22)) {
        console.log("Cáncer");
    } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 23)) {
        console.log("Leo");
    } else if ((mes == 8 && dia >= 24) || (mes == 9 && dia <= 23)) {
        console.log("Virgo");
    } else if ((mes == 9 && dia >= 24) || (mes == 10 && dia <= 23)) {
        console.log("Libra");
    } else if ((mes == 10 && dia >= 24) || (mes == 11 && dia <= 22)) {
        console.log("Escorpio");
    } else if ((mes == 11 && dia >= 23) || (mes == 12 && dia <= 21)) {
        console.log("Sagitario");
    } else if((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)) {
        console.log("Capricornio");
    }
    }
}