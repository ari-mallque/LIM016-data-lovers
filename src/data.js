// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
  

 //boton Buscar

 const formulario =document.querySelector('#formulario');
 const boton = document.querySelector('#botonSeach');

 const filtrar = ()=>{
   //console.log(formulario.value);

    document.getElementById("section-center").innerHTML="";

   //const texto = formulario.value.toLowerCase();


   const sectionCenter = document.getElementById("section-center");
   const valorstring = document.getElementById("formulario").value;

   const dat  = data.athletes.filter(athletes => athletes.name===valorstring);
   //console.log(dat);
   const mostrarAtletas = dat.forEach(function(item){
       //const newAthletes = [...new Set(item.name)];
       const createElement = document.createElement("div");
       const template = `
       <article class="atletla-item">
       <div class="item-nombre">
         <h2>${item.name}</h2>
       <br>
       <div class="imagen">
       <img src="img/usuario.jpg" class="photo" alt="atletla item"/>
       </div>
       <br>
         <div class="info" >
         <h3 class="noc">${item.noc}</h3>
         </div>
         <div class="info">
         <h3 class="sport">${item.event}</h3>
         </div>
       </div>
       </article>
     `;
   
   createElement.innerHTML=template; 
   sectionCenter.appendChild(createElement)
   //console.log(template);
   return template
});


 }
 boton.addEventListener('click',filtrar)


 /*cambio de vista para buscador
 function cambioVista(vista){
   let vista1;
   let vista2;
   switch (vista) {
     case "v2":
         vista1 = document.getElementById("section-center");
         vista1.style.display = "none";
         vista2 = document.getElementById("vista_2");
         vista2.style.display = "block";
         break;
   }
 }*/

    
