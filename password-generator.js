const Password = require("generate-password");

const pass = Password.generate({ length: 8, numbers: true });
console.log("Password:", pass);
