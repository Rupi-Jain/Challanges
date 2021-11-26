const switchToggle = (toggle) => {
  if (toggle.isOn) {
    toggle.isOn = false;
  } else {
    toggle.isOn = true;
  }
  return toggle;
}
const someToggle = {
      name:"toggleA",
      isOn:false
    }
    // If ran twice
const someToggle = {
  name:"toggleB",
  isOn:true
}
        
console.log(switchToggle(someToggle))
console.log(switchToggle(someToggle2))