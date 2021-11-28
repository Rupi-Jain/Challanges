const addJobToAstronaut = (astronaut, job) => {
  return {...astronaut, job}
}
const exampleAstronaut = {
      firstName:"Chris",
      lastName: "Hadfield",
      nickname:"Space Oddity",
      prefix:"Astronaut"
    }
  
  console.log(exampleAstronaut, "Shuttle DJ")