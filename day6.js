const addAstronautToRoster = (roster, astronaut) => {
  roster.push(astronaut)
 return roster;
 
}
const exampleRoster = []
   const exampleAstronaut = {
     firstName:"Chris",
     lastName: "Hadfield",
     nickname:"Space Oddity",
     prefix:"Astronaut"
   }
   
 console.log( addAstronautToRoster(exampleRoster, exampleAstronaut))