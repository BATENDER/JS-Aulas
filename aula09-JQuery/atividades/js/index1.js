$('#btnCalcular').on('click', function() {
   let tabuada = Number($('#tabuada').val());

   for (var i = 0; i <= 10; i++) {
      document.querySelector('#resultadoTabuada').innerHTML += `${i} x ${tabuada} = ${i*tabuada} <br>`; 
   }
});