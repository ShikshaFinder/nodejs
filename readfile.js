const fs = require("fs");
// fs.readFile("harsh.txt",'utf-8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data.toString());
// });
const a = fs.readFileSync("harsh.txt");
console.log(a.toString());
fs.writeFileSync("harsh.txt","ye ham ne bad me execute kiya hai",(data,err)=>{
    console.log(data)
    console.log(err)
})

console.log("ye ham ne bad me execute kiya hai")