let welcome = document.getElementById("welcome");
let Btndelete = document.getElementById("Btndelete");
let nombre = localStorage.getItem("nombre");

window.addEventListener("load", function(event){
  event.preventDefault();
  
  if(localStorage.getItem("nombre")!=null){
   
      welcome.innerText = `Hola ${nombre} bienvenido de nuevo. Ve al Index e ingresa tu nombre`
  }
}); //Load 

Btndelete.addEventListener("click", function(event){
  event.preventDefault();
  localStorage.removeItem("nombre");
});

