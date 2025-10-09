const fs = require("fs");
fs.unlink("example.txt", (err) => {
  if (err) console.log("File not found!");
  else console.log("File deleted successfully!");
});