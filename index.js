
const dependencies = require("./second");//to import something from another file we use require function
console.log(dependencies);
// console.log(exports, require, module, __filename, __dirname);
// node have a by default wrapper function like above which exports all above things
console.log(os.freemem())   // it will give the free memory of the system;
