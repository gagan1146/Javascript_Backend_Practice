const login = (req, res, next) => {
  console.log("Hi i am inside login.js file");
//   res.send("Some Error Occurred");
  next();
};
export default login;