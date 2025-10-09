const fs = require("fs");
fs.mkdirSync("myFolder");
fs.writeFileSync("myFolder/note.txt", "This is inside the folder.");
const files = fs.readdirSync("myFolder");
console.log("Files in folder:", files);
fs.rmSync("myFolder", { recursive: true, force: true });
console.log("Folder deleted!");