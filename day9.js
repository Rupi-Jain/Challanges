const listAstronautJobs = (roster) => {
  const jobsArray = [];
  roster.forEach(roster => jobsArray.push(roster.job))
  return jobsArray;
}
const exampleRoster = [
      {
    
        job:"Shuttle DJ"
      },
      {
       
        job:"Space Cook"
      }
    ] 
  
  console.log(listAstronautJobs(exampleRoster))