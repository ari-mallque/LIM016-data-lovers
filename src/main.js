//import { example } from './data.js';
//import athletes from './data/athletes/athletes.js';
// import data from './data/lol/lol.js';
//import { directive } from '@babel/types';
//import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
//console.log(data.athletes);

//Mostrar tarjetas
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

//select genero (opciones)
function cboGender() {
  const gender = data.athletes.map(athletes => athletes.gender);
  const genderList = [...new Set(gender)];
  genderList.sort();
  
  let select = document.getElementById("gender");
  for (var i in genderList) {
    var option = document.createElement("option");
    option.classList.add(`genero${i}`);
    option.value = genderList[i];
    option.text = genderList[i];
    select.add(option);
  }
  }

  cboGender();
  

//select deporte (opciones)
function cboSport() {
  const sport = data.athletes.map(athletes => athletes.sport);
  const sportList = [...new Set(sport)];
  sportList.sort();
  
  let select = document.getElementById("sport");
  for (var i in sportList) {
    var option = document.createElement("option");
    option.text = sportList[i];
    option.value = sportList[i];
    select.add(option);
  }
  }
  
  cboSport();
  

//select team (opciones)
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


// select medalla (opciones)
function cboMedal() {
  const medal = data.athletes.map(athletes => athletes.medal);
  const medalList = [...new Set(medal)];
  
  let select = document.getElementById("medal");
  for (var i in medalList) {
    var option = document.createElement("option");
    option.classList.add(`medal${i}`);
    option.text = medalList[i];
    option.value = medalList[i];
    select.add(option);
  }
  }
  cboMedal();

//Seleccionar la opción y mostrar las tarjetas (gender)
  window.filterGender= function(selectObject){
    const gender = data.athletes.filter(athletes => athletes.gender===selectObject.value);

    while(sectionCenter.firstChild){
      sectionCenter.removeChild(sectionCenter.firstChild);
    }
    const listGender = gender.forEach(function(item){
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
  
//Seleccionar la opción y mostrar las tarjetas (sport)
    window.filterSport= function(selectObject){
      const sport = data.athletes.filter(athletes => athletes.sport===selectObject.value);

      while(sectionCenter.firstChild){
        sectionCenter.removeChild(sectionCenter.firstChild);
      }
      const listSport = sport.forEach(function(item){
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

  //Seleccionar la opción y mostrar las tarjetas (medal)
    window.filterMedal= function(selectObject){
      const medal = data.athletes.filter(athletes => athletes.medal===selectObject.value);

      while(sectionCenter.firstChild){
        sectionCenter.removeChild(sectionCenter.firstChild);
      }
      const listMedal = medal.forEach(function(item){
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
    
  //Seleccionar la opción y mostrar las tarjetas (team)
    window.filterTeam= function(selectObject){
      const team = data.athletes.filter(athletes => athletes.team===selectObject.value);
      while(sectionCenter.firstChild){
        sectionCenter.removeChild(sectionCenter.firstChild);
      }
      const listTeam = team.forEach(function(item){
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