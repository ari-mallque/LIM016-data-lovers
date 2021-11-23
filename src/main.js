//import { example } from './data.js';
//import athletes from './data/athletes/athletes.js';
// import data from './data/lol/lol.js';
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


    const mostrarAtletas = data.athletes.forEach(function(item){
        //console.log(item);
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
          <h3 class="sport">${item.sport}</h3>
          </div>
        </div>
        </article>
      `;
    
    createElement.innerHTML=template; 
    sectionCenter.appendChild(createElement)
    console.log(template);
    return template
});

