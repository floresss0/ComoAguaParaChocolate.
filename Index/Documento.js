var getData= function(){ 
	alert("Muchas gracias por llenar el formulario. Esperamos que disfrutes de nuestras paginas");
var name= document.getElementById("name").value;
var age= document.getElementById("age").value;
if (name == ""){
document.getElementById("name").focus();
} else{
if (age == ""){
document.getElementById("age").focus();
}
else{
console.log(name+" "+age);
var name= document.getElementById("name").value="";
var age= document.getElementById("age").value="";
document.getElementById("name").focus()

}
}
}