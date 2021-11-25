//import { example } from './data.js';
//import athletes from './data/athletes/athletes.js';
// import data from './data/lol/lol.js';
import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
//console.log(data.athletes);

/*for (let i = 0; i < data.athletes.length; i++) {
    console.log(data.athletes[i].name)//
    let atletas= document.createElement("h3");
    let contenido = document.createTextNode("");

    atletas.appendChild(contenido);
    document.body.appendChild(atletas);

    let contenedor = document.getElementById("container");
    contenedor.appendChild(atletas);
}*/



const sectionCenter = document.getElementById("section-center");
const newAthletes = new Set(data.athletes);


    const mostrarAtletas = data.athletes.forEach(function(item){
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
/*funcion click p/ boton genero*/
const botonGenero = document.getElementById("genero");
botonGenero.addEventListener("click",()=>{

let gender = data.athletes.filter(athletes => athletes.gender==="M");
const genderList = [...new Set(gender)];
console.log(genderList);
},false);


/*funcion click p/ boton deporte*/
const botonDeporte = document.getElementById("deporte");
botonDeporte.addEventListener("click",()=>{

let sport = data.athletes.map(athletes => athletes.sport);
const sportsList = [...new Set(sport)];
console.log(sportsList);

},false);


/*funcion click p/ boton equipo*/
const botonEquipo = document.getElementById("equipo");
botonEquipo.addEventListener("click",()=>{

let team = data.athletes.map(athletes => athletes.team);

const teamsList = [...new Set(team)];
console.log(teamsList);
teamsList.forEach(element => {
  const createElement = document.createElement("ul");
  const template = `
  <li>${element}</li>
  `
  createElement.innerHTML=template; 
    sectionCenter.appendChild(createElement)
});
},false); 







