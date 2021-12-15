
import data from "./data/athletes/athletes.js";
import {  optionGender,optionSport, optionTeam, optionMedal } from "./data.js";


//Mostrar tarjetas
const sectionCenter = document.getElementById("section-center");

     data.athletes.forEach(function(item){
        //const newAthletes = [...new Set(item.name)];
        const createElement = document.createElement("div");
        const imgAthlete =
        //data.athletes.gender === "F"
        item.gender === "F"
        ? "./img/femenino.jpg"
        : "./img/masculino.jpg";
        const template = `
        <article class="atletla-item">
        <div class="cardContainer">
        <div class="item-nombre">
          <h2>${item.name}</h2>
        </div>
        <div class="imagen">
        <img src=${imgAthlete} class="photo" alt="atletla item"/>
       
        </div>
        <br>
          <div class="info" >
          <p class="age">Edad: ${item.age}</p>
          <p class="height">Altura: ${item.height} cm</p>
          <p class="weight">Peso: ${item.weight} kg</p>
          <p class="team">País: ${item.team}</p>
          <p class="medal">Medalla: ${item.medal}</p>
          <p class="sport">Deporte: ${item.sport}</p>
          </div>
        </div>
        </article>
      `;
    
    createElement.innerHTML=template; 
    sectionCenter.appendChild(createElement)
    //console.log(template);
    return template
});


//select genero (opciones)
function genderAll() {
  let arrayGender = optionGender(data.athletes);
  
  let select = document.getElementById("gender");
  for (var i in arrayGender) {
    var option = document.createElement("option");
    option.classList.add(`genero${i}`);
    option.value = arrayGender[i];
    option.text = arrayGender[i];
    select.add(option);
  }
  }

  genderAll();
  

//select deporte (opciones)
function cboSport() {
  let arraySport = optionSport(data.athletes);
  let select = document.getElementById("sport");
  for (var i in arraySport) {
    var option = document.createElement("option");
    option.classList.add(`deporte${i}`);
    option.text = arraySport [i];
    option.value = arraySport[i];
    select.add(option);
  }
  }
  
  cboSport();
  

//select team (opciones)
function cboTeam() {
let arrayTeam = optionTeam(data.athletes);
let select = document.getElementById("team");
for (var i in arrayTeam) {
  var option = document.createElement("option");
  option.text = arrayTeam[i];
  option.value = arrayTeam[i];
  select.add(option);
  
}
}
cboTeam();


// select medalla (opciones)
function cboMedal() {
  let arrayMedal = optionMedal(data.athletes);
  let select = document.getElementById("medal");
  for (var i in arrayMedal) {
    var option = document.createElement("option");
    option.classList.add(`medal${i}`);
    option.text = arrayMedal[i];
    option.value = arrayMedal[i];
    select.add(option);
  }
  }
  cboMedal();

//Seleccionar la opción y mostrar las tarjetas (gender)
const genderSelect= document.getElementById("gender")
genderSelect.addEventListener("change", (event)=>{
const selectObject= event.target.value;
const gender = data.athletes.filter(athletes => athletes.gender===selectObject);

    while(sectionCenter.firstChild){
      sectionCenter.removeChild(sectionCenter.firstChild);
    }
     gender.forEach(function(item){
      //const newAthletes = [...new Set(item.name)];
      const createElement = document.createElement("div");
      const imgAthlete =
      item.gender === "F"
        ? "./img/femenino.jpg"
        : "./img/masculino.jpg";
        const template = `
        <article class="atletla-item">
        <div class="cardContainer">
        <div class="item-nombre">
          <h2>${item.name}</h2>
        </div>
        <div class="imagen">
        <img src=${imgAthlete} class="photo" alt="atletla item"/>
       
        </div>
        <br>
          <div class="info" >
          <p class="age">Edad: ${item.age}</p>
          <p class="height">Altura: ${item.height} cm</p>
          <p class="weight">Peso: ${item.weight} kg</p>
          <p class="team">País: ${item.team}</p>
          <p class="medal">Medalla: ${item.medal}</p>
          <p class="sport">Deporte: ${item.sport}</p>
          </div>
        </div>
        </article>
      `;
  
  createElement.innerHTML=template; 
  sectionCenter.appendChild(createElement)
  //console.log(template);
  return template
});
});


//Seleccionar la opción y mostrar las tarjetas (sport)
 
const sportSelect= document.getElementById("sport")
 sportSelect.addEventListener("change", (event)=>{
const selectObject= event.target.value;
const sport = data.athletes.filter(athletes => athletes.sport===selectObject);

    while(sectionCenter.firstChild){
      sectionCenter.removeChild(sectionCenter.firstChild);
    }  

        sport.forEach(function(item){
        //const newAthletes = [...new Set(item.name)];
        const createElement = document.createElement("div");
        const imgAthlete =
       // data.athletes.gender === "F"
       item.gender === "F"
        ? "./img/femenino.jpg"
        : "./img/masculino.jpg";
        const template = `
        <article class="atletla-item">
        <div class="cardContainer">
        <div class="item-nombre">
          <h2>${item.name}</h2>
        </div>
        <div class="imagen">
        <img src=${imgAthlete} class="photo" alt="atletla item"/>
       
        </div>
        <br>
          <div class="info" >
          <p class="age">Edad: ${item.age}</p>
          <p class="height">Altura: ${item.height} cm</p>
          <p class="weight">Peso: ${item.weight} kg</p>
          <p class="team">País: ${item.team}</p>
          <p class="medal">Medalla: ${item.medal}</p>
          <p class="sport">Deporte: ${item.sport}</p>
          </div>
        </div>
        </article>
      `;
    
    createElement.innerHTML=template; 
    sectionCenter.appendChild(createElement)
  
    return template
  });
  });

  //Seleccionar la opción y mostrar las tarjetas (medal)
  const medalSelect= document.getElementById("medal")
    medalSelect.addEventListener("change", (event)=>{
  const selectObject= event.target.value;
  const medal = data.athletes.filter(athletes => athletes.medal===selectObject);

      while(sectionCenter.firstChild){
        sectionCenter.removeChild(sectionCenter.firstChild);
      }
      medal.forEach(function(item){
        //const newAthletes = [...new Set(item.name)];
        const createElement = document.createElement("div");
        const imgAthlete =
        //data.athletes.gender === "F"
        item.gender === "F"
        ? "./img/femenino.jpg"
        : "./img/masculino.jpg";
        const template = `
        <article class="atletla-item">
        <div class="cardContainer">
        <div class="item-nombre">
          <h2>${item.name}</h2>
        </div>
        <div class="imagen">
        <img src=${imgAthlete} class="photo" alt="atletla item"/>
       
        </div>
        <br>
          <div class="info" >
          <p class="age">Edad: ${item.age}</p>
          <p class="height">Altura: ${item.height} cm</p>
          <p class="weight">Peso: ${item.weight} kg</p>
          <p class="team">País: ${item.team}</p>
          <p class="medal">Medalla: ${item.medal}</p>
          <p class="sport">Deporte: ${item.sport}</p>
          </div>
        </div>
        </article>
      `;
    
    createElement.innerHTML=template; 
    sectionCenter.appendChild(createElement)
    //console.log(template);
    return template
  });
  });
    
  //Seleccionar la opción y mostrar las tarjetas (team)
  const teamSelect= document.getElementById("team")
    teamSelect.addEventListener("change", (event)=>{
  const selectObject= event.target.value;
  const team = data.athletes.filter(athletes => athletes.team===selectObject);

      while(sectionCenter.firstChild){
        sectionCenter.removeChild(sectionCenter.firstChild);
      }
        team.forEach(function(item){
        //const newAthletes = [...new Set(item.name)];
        const createElement = document.createElement("div");
        const imgAthlete =
       //data.athletes.gender === "F"
       item.gender === "F"
        ? "./img/femenino.jpg"
        : "./img/masculino.jpg";
        const template = `
        <article class="atletla-item">
        <div class="cardContainer">
        <div class="item-nombre">
          <h2>${item.name}</h2>
        </div>
        <div class="imagen">
        <img src=${imgAthlete} class="photo" alt="atletla item"/>
       
        </div>
        <br>
          <div class="info" >
          <p class="age">Edad: ${item.age}</p>
          <p class="height">Altura: ${item.height} cm</p>
          <p class="weight">Peso: ${item.weight} kg</p>
          <p class="team">País: ${item.team}</p>
          <p class="medal">Medalla: ${item.medal}</p>
          <p class="sport">Deporte: ${item.sport}</p>
          </div>
        </div>
        </article>
      `;
    
    createElement.innerHTML=template; 
    sectionCenter.appendChild(createElement)
    //console.log(template);
    return template
  });
  });

  //Boton Buscador
  //const formulario = document.querySelector('#formulario');
  
  const filtrar = ()=>{
    document.getElementById("section-center").innerHTML="";
 
    const sectionCenter = document.getElementById("section-center");
    const valorstring = document.getElementById("formulario").value;
    const dat  = data.athletes.filter(athletes =>{
      const search = athletes.name.toLowerCase() 
      return search.includes(valorstring.toLowerCase())
    });
   
     dat.forEach(function(item){
      const createElement = document.createElement("div");
      const imgAthlete =
      //data.athletes.gender === "F"
      item.gender === "F"
       ? "./img/femenino.jpg"
       : "./img/masculino.jpg";
       const template = `
       <article class="atletla-item">
       <div class="cardContainer">
       <div class="item-nombre">
         <h2>${item.name}</h2>
       </div>
       <div class="imagen">
       <img src=${imgAthlete} class="photo" alt="atletla item"/>
      
       </div>
       <br>
         <div class="info" >
         <p class="age">Edad: ${item.age}</p>
         <p class="height">Altura: ${item.height} cm</p>
         <p class="weight">Peso: ${item.weight} kg</p>
         <p class="team">País: ${item.team}</p>
         <p class="medal">Medalla: ${item.medal}</p>
         <p class="sport">Deporte: ${item.sport}</p>
         </div>
       </div>
       </article>
       `;
        
     /*   const createElement = document.createElement("div");
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
      `;*/
    
    createElement.innerHTML=template; 
    sectionCenter.appendChild(createElement)
    //console.log(template);
    return template
 });
 };

  const inputTex = document.getElementById("formulario");
  inputTex.addEventListener('keyup',filtrar)
 

    const teamSelect1= document.getElementById("sort")
    teamSelect1.addEventListener("change", (event)=>{
    const selectObject1= event.target.value;
  
    if (selectObject1 === "ascendente")
    {
      Ascendente();
     // const arrayAthletes1 =  data.athletes.sort((athletes, oathletes) => athletes.name.localeCompare(oathletes.name)); 
    }
    else 
    {
      Descendente();
      //const arrayAthletes2 =  data.athletes.sort((athletes, oathletes) => oathletes.name.localeCompare(athletes.name)); 
    }
  });

  function Ascendente(){
    const arrayAthletes1 =  data.athletes.sort((athletes, oathletes) => athletes.name.localeCompare(oathletes.name)); 
 
    while(sectionCenter.firstChild){
      sectionCenter.removeChild(sectionCenter.firstChild);
    }  
         arrayAthletes1.forEach(function(item){
          //const newAthletes = [...new Set(item.name)];
          const createElement = document.createElement("div");
          const imgAthlete =
          //data.athletes.gender === "F"
          item.gender === "F"
           ? "./img/femenino.jpg"
           : "./img/masculino.jpg";
           const template = `
           <article class="atletla-item">
           <div class="cardContainer">
           <div class="item-nombre">
             <h2>${item.name}</h2>
           </div>
           <div class="imagen">
           <img src=${imgAthlete} class="photo" alt="atletla item"/>
          
           </div>
           <br>
             <div class="info" >
             <p class="age">Edad: ${item.age}</p>
             <p class="height">Altura: ${item.height} cm</p>
             <p class="weight">Peso: ${item.weight} kg</p>
             <p class="team">País: ${item.team}</p>
             <p class="medal">Medalla: ${item.medal}</p>
             <p class="sport">Deporte: ${item.sport}</p>
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

  function Descendente(){
 const arrayAthletes1 =  data.athletes.sort((athletes, oathletes) => oathletes.name.localeCompare(athletes.name)); 

 while(sectionCenter.firstChild){
   sectionCenter.removeChild(sectionCenter.firstChild);
 }  
      arrayAthletes1.forEach(function(item){
       //const newAthletes = [...new Set(item.name)];
       const createElement = document.createElement("div");
       const imgAthlete =
       //data.athletes.gender === "F"
       item.gender === "F"
        ? "./img/femenino.jpg"
        : "./img/masculino.jpg";
        const template = `
        <article class="atletla-item">
        <div class="cardContainer">
        <div class="item-nombre">
          <h2>${item.name}</h2>
        </div>
        <div class="imagen">
        <img src=${imgAthlete} class="photo" alt="atletla item"/>
       
        </div>
        <br>
          <div class="info" >
          <p class="age">Edad: ${item.age}</p>
          <p class="height">Altura: ${item.height} cm</p>
          <p class="weight">Peso: ${item.weight} kg</p>
          <p class="team">País: ${item.team}</p>
          <p class="medal">Medalla: ${item.medal}</p>
          <p class="sport">Deporte: ${item.sport}</p>
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
   
   // orderAz();
/*
    let arrayAz = sortAz(data.athletes);
    let select = document.getElementById("ascendente");
    const mostrarAtletasAz = arrayAz.forEach(function(item){
      //const newAthletes = [...new Set(item.name)];
      const createElement = document.createElement("div");
      const imgAthlete =
      item.gender === "F"
      ? "./img/femenino.jpg"
      : "./img/masculino.jpg";
      const template = `
      <article class="atletla-item">
      <div class="cardContainer">
      <div class="item-nombre">
        <h2>${item.name}</h2>
      </div>
      <div class="imagen">
      <img src=${imgAthlete} class="photo" alt="atletla item"/>
     
      </div>
      <br>
        <div class="info" >
        <p class="age">Edad: ${item.age}</p>
        <p class="height">Altura: ${item.height} cm</p>
        <p class="weight">Peso: ${item.weight} kg</p>
        <p class="team">País: ${item.team}</p>
        <p class="medal">Medalla: ${item.medal}</p>
        <p class="sport">Deporte: ${item.sport}</p>
        </div>
      </div>
      </article>
    `;
  
  createElement.innerHTML=template; 
  select.appendChild(createElement)
  return template
});*/
