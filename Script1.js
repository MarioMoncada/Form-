// JavaScript source code
// manipulacion del formulario
  $(document).ready(function(){
      // con este codigo empezamos a habilitar los campos de informacion, segun la seleccion del usuario 
     $("#paypal").click(function () {
          
          $("#email").attr("disabled", false).focus().css("background-color", "white");
          $("#date").attr("disabled", true).css("background-color", " #373838");
          $("#numero_tarjeta").attr("disable", true).css("background-color", " #373838");
      });
        //activando los campos de informacion si se preciosna la opcion de visa
      $("#visa").click(function () {
         
          $("#numero_tarjeta").attr("disabled", false).focus().css("background-color","white");
          $("#date").attr("disabled", false).css("background-color", "white");
          $("#email").attr("disabled", true).css("background-color"," #373838");

      });
      //activando los campos de informacion si se preciosna la opcion de masterCard
      $("#master").click(function () {

          $("#numero_tarjeta").attr("disabled", false).focus().css("background-color", "white");
          $("#date").attr("disabled", false).css("background-color", "white");
          $("#email").attr("disabled", true).css("background-color", "#373838");

      });
      // escodiendo los campos de input, pero aparecen cuando el usuario selecciona una accion. 
     $("#master").click(function () {
          $("#numero_tarjeta").css("visibility", "initial").attr("disabled", false).focus().css("background-color", "white");
          $("#date").css("visibility", "initial").attr("disabled", false).css("background-color", "white");
          $("#email").css("visibility", "hidden");
      });
      $("#visa").click(function () {
          $("#numero_tarjeta").css("visibility", "initial").attr("disabled", false).focus().css("background-color", "white");
          $("#date").css("visibility", "initial").attr("disabled", false).css("background-color", "white");
          $("#email").css("visibility", "hidden");
      });
      $("#paypal").click(function () {

          $("#email").css("visibility", "initial").attr("disabled", false).focus().css("background-color", "white");
          $("#numero_tarjeta").css("visibility", "hidden");
          $("#date").css("visibility", "hidden");

      });
      var submit = document.getElementById("enviar");
      function checkUser(e) {
          var nombre = document.getElementById("nombre").value;
          if (nombre == "") {
              alert("rellena el espacio nombre");
              e.preventDefault();
          }
         
      }
      function checkAddress(e) {
          var address = document.getElementById("address").value;
          if (address == "") {
              alert("rellena el espacio de la direccion");
             e.preventDefault();
          }
      }
      function checkCity(e) {
          var city = document.getElementById("city").value;
          if (city == "") {
              alert("Introduce tu cuidad");
             e.preventDefault();
          }
      }
      function checkCp(e) {
          var c_postal = document.getElementById("cp").value;
          if (c_postal.length > 4 || c_postal.length<4) {
              alert("verifique el codigo postal");
              e.preventDefault(e);
          }
          
          if (isNaN(c_postal)) {
              alert("El valor introducido no es un numero");
              e.preventDefault(e);
          }
      }
      function validate(e) {
          checkUser(e);
          checkAddress(e);
          checkCity(e);
          checkCp(e);

      }
      submit.addEventListener("click", validate,false);
   });



  

    
 

  