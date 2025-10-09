const fs = require("fs");
fs.writeFileSync("example.txt", "Hello, this is my first file!");
const data = fs.readFileSync("example.txt", "utf-8");
console.log("File content:", data);
fs.appendFileSync("example.txt", "\nAdding more content here...");
console.log("New content added!");
const newData = fs.readFileSync("example.txt", "utf-8");
console.log("Updated content:\n", newData);