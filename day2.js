const exampleAstronaut = {
  firstName: "Yuri",
  lastName: "Gagarin",
  nickname: "First!",
  prefix: "Cosmonaut"
}
const exampleAstronaut2 = {
  firstName: "Neil",
  lastName: "Armstrong",
  nickname: "Steps",
  prefix: "Astronaut"
}
const generateAstronautTag = (astronaut) => {
return `${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`
}

console.log(generateAstronautTag(exampleAstronaut))
console.log(generateAstronautTag(exampleAstronaut2))