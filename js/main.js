let txtName = document.getElementById("txtName");
let btnGuardar = document.getElementById("btnGuardar");



btnGuardar.addEventListener("click", function(event){
    event.preventDefault();
    let nombre = txtName.value;
    localStorage.setItem("nombre",nombre);

})



  
 
//!=null
//guarda el correo electronico en el navegador
//localStorage.setItem("email", "jperez@hotmail.com");