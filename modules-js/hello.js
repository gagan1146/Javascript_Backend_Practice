const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};

// module.exports = sayHello;
module.exports = {sayHello, path:module.path};
console.log(module)