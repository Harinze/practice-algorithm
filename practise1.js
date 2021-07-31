// Complete this function to return either
// "Hello, [name]!" or "Hello there!"
// based on the input
const sayHello = name => {
  // You can print to STDOUT for debugging like you normally would:
  console.log(name);
  
  // but you need to return the value in order to complete the challenge  
  return name; // TODO: return the correct value
};

### solution 1

const sayHello = name => `Hello, ${name}!`;

console.log(sayHello('there'));
