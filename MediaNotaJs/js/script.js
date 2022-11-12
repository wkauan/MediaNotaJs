function Calcular() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value); 
    var nota4 = parseFloat(document.getElementById("nota4").value);
  
    var mediafinal =  ((nota1 + nota2 + nota3 + nota4) /4).toFixed(1);
    
    var valorFinal = document.getElementById("mediaFinal");
    var valorMediaTotal = "Sua média é " + mediafinal;
  
    var status = document.getElementById("status");
    var media = parseFloat(document.getElementById("infomedia").value);

     if (mediafinal >= media) {
    valorFinal.innerHTML = valorMediaTotal;
    status.innerHTML = ("Você foi aprovado(a)");
  } else {
    valorFinal.innerHTML = valorMediaTotal;
   status.innerHTML =("Você foi reprovado(a)");
  }
}