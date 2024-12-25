const fs = require("fs");
fs.writeFileSync("welcome.txt", "Hello Node");
const x = fs.readFileSync("welcome.txt", "utf8");
console.log(x);
