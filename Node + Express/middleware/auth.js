const auth = (req, res, next) => {
  console.log("Hi i am inside auth.js file");
  next();
};
export default auth;