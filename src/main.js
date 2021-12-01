//import { example } from './data.js';
//import athletes from './data/athletes/athletes.js';
// import data from './data/lol/lol.js';
import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
//console.log(data.athletes);

const sectionCenter = document.getElementById("section-center");

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
//select genero
function cboGender() {
  const gender = data.athletes.map(athletes => athletes.gender);
  const genderList = [...new Set(gender)];
  genderList.sort();
  
  let select = document.getElementById("gender");
  for (var i in genderList) {
    var option = document.createElement("option");
    option.classList.add(`genero${i}`);
    option.text = genderList[i];
    select.add(option);
  }
  }
  cboGender();
  

  



  const botonFemenino = document.querySelector('.genero0');
  botonFemenino.addEventListener("click",()=>{
  const genderFem = data.athletes.filter(athletes => athletes.gender==="F");
  console.log(genderFem);
  },false);

  
  const botonMasculino = document.querySelector('.genero1');
  botonMasculino.addEventListener("click",()=>{
  const genderFem = data.athletes.filter(athletes => athletes.gender==="M");
  console.log(genderFem);
  },false);



//select deporte
function cboSport() {
  const sport = data.athletes.map(athletes => athletes.sport);
  const sportList = [...new Set(sport)];
  sportList.sort();
  
  let select = document.getElementById("sport");
  for (var i in sportList) {
    var option = document.createElement("option");
    option.text = sportList[i];
    select.add(option);
  }
  }
  
  
  cboSport();
  

//select equipo
/*const botonEquipo = document.getElementById("team");
botonEquipo.addEventListener("click",()=>{*/


function cboTeam() {
const team = data.athletes.map(athletes => athletes.team);
const teamsList = [...new Set(team)];
teamsList.sort();

let select = document.getElementById("team");
for (var i in teamsList) {
  var option = document.createElement("option");
  option.text = teamsList[i];
  option.value = teamsList[i];
  select.add(option);

 
 
  
}
}
cboTeam();

// para llamar a las opciones del select equipo
const $selectTeam = document.querySelector(".team");

const opcionCambiadaTeam = () => {
  console.log("Cambio");
};

$selectTeam.addEventListener("change", opcionCambiadaTeam);




// select medalla
function cboMedal() {
  const medal = data.athletes.map(athletes => athletes.medal);
  const medalList = [...new Set(medal)];
  //medalList.sort();
  
  let select = document.getElementById("medal");
  for (var i in medalList) {
    var option = document.createElement("option");
    option.classList.add(`medal${i}`);
    option.text = medalList[i];
    select.add(option);
  }
  }
  cboMedal();

  const botonGold = document.querySelector('.medal2');
  botonGold.addEventListener("click",()=>{
  const medalGold = data.athletes.filter(athletes => athletes.medal==="Gold");
  console.log(medalGold);
  },false);

  const botonSilver = document.querySelector('.medal1');
  botonSilver.addEventListener("click",()=>{
  const medalSilver = data.athletes.filter(athletes => athletes.medal==="Silver");
  console.log(medalSilver);
  },false);

  const botonBronze = document.querySelector('.medal0');
  botonBronze.addEventListener("click",()=>{
  const medalBronze = data.athletes.filter(athletes => athletes.medal==="Bronze");
  console.log(medalBronze);

  },false);


 