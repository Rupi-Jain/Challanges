const checkGaugeStatus = (gauge) => {
  if (gauge.current > gauge.min && gauge.current < gauge.max){
    return true;
  } 
  return false;
 }
  const exampleGauge = {
       current:0.4,
       min:0.1,
       max:0.9
     }
  const exampleGauge2 = {
    current:1.4,
    min:0.1,
    max:0.4
  }   
  console.log(checkGaugeStatus(exampleGauge))
  console.log(checkGaugeStatus(exampleGauge2))