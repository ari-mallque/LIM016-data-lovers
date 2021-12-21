/* eslint-disable no-undef */
//import athletes from "./data/athletes/athletes";


 const optionGender=(athletes)=> {
  const gender = athletes.map(athletes => athletes.gender);
  const genderList = [...new Set(gender)];
  return genderList.sort();
}
const optionSport=(athletes)=>{
const sport = athletes.map(athletes => athletes.sport);
const sportList = [...new Set(sport)];
return sportList.sort();
}
const optionTeam=(athletes)=> {
  const team = athletes.map(athletes => athletes.team);
  const teamsList = [...new Set(team)];
  return teamsList.sort();
}
const optionMedal=(athletes)=> {
  const medal = athletes.map(athletes => athletes.medal);
  const medalList = [...new Set(medal)];
  return medalList;
}


// const sortAz=()=>{
//   const newArray = Array.from(data.athletes);
//   //console.log(newArray);

//   return newArray.sort((nombre, nombre1) => {
//     return (nombre.name < nombre1.name) ? -1 : 1
//     //console.log(newArray);
//   }); 
  
  
// }
// console.log(newArray);




// const sortZa=(athletes)=>{
//   const newArray= Array.from(athletes);
//   return newArray.reverse();

// }
//const filtergender=(athletes,gender,seleccionado)=>{
  //const genders = athletes.filter(athlete => athlete.gender===seleccionado);
  //return genders
//}



export{optionGender,optionSport, optionTeam, optionMedal,

  }
