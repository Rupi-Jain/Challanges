const parseMessage = (origin, message) => {
  return `${origin}: ${message}`;
}

console.log(parseMessage("Mission Control", "Hello there!"))