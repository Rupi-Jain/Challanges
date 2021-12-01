const averageWindSpeed = (weatherEntries) => {
  let sum = 0;
 
  for(let entry of weatherEntries) {
    sum  += entry.windSpeed 
  }

  return Math.round(sum / weatherEntries.length)
}
   const exampleEntries = [
      { 
        temperature:0, 
        weather:"sunny", 
        windDirection: "NNE", 
        windSpeed:24
      },
      { 
        temperature:10, 
        weather:"cloudy", 
        windDirection: "NNE", 
        windSpeed:9 
      }
    ] 
    
  console.log(averageWindSpeed(exampleEntries))