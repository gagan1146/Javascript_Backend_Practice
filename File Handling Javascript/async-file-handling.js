const fs = require("fs");
fs.writeFile("async.txt", "This is written asynchronously!", (err) => {
  if (err) throw err;
  console.log("File written successfully!");
  fs.readFile("async.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
  });
});