let contenedorPersonajes = document.getElementById("personajes")

fetch("https://randomuser.me/api")
.then((response)=>response.json())
.then((datos)=>{

console.log(datos)
console.log(datos.results)

datos.results.forEach((elementos) => {
 //console.log(elementos.name)

 const contenedorCreado = document.createElement('div')
    
 contenedorCreado.innerHTML = `
 <h4> Nombre: ${elementos.name.title} ${elementos.name.first} ${elementos.name.last}</h4>
 <h4> Correo: ${elementos.email} </h4>
<h4> Telefono: ${elementos.phone} </h4>

 <img src="${elementos.picture.large}">



 `;


contenedorPersonajes.append(contenedorCreado)

 
 
});
 })

