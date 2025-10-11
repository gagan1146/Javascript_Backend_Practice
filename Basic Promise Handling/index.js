// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected!");
  }
});
myPromise
  .then((message) => {
    console.log("Then:", message);
  })
  .catch((error) => {
    console.log("Catch:", error);
  })
  .finally(() => {
    console.log("Finally: Promise completed!");
  });