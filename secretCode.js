const secretPassword = (str) => {
  if (str.length < 9 && ! str.isLower) {
    console.log( "BANG! BANG! BANG!")
  }
  let part1 = str.substr(0,3)
  let part2 = str.substr(3,3)
  let part3 = str.substr(6,3)
  part1 = (part1.charCodeAt(0) - 96) + part1.substr(1,1) + (part1.charCodeAt(2) - 96)
  part2 = part2.split("").reverse().join("")
  let temp = "";
  for (let i = 0; i < part3.length; i++) {
    if (part3.substr(i,1) !== 'z') {
      temp = temp + String.fromCharCode(part3.charCodeAt(i) + 1)
    } else {
      temp = temp + String.fromCharCode(part3.charCodeAt(i) - 25)
    }
  }
  part3 = temp;
  const result = part2 + part3 + part1
  return result;
}

console.log(secretPassword('mubashirz'))