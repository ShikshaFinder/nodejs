const halu = require("fs");

halu.writeFileSync("./nasdme.txt","harsh jani is og and he understands everything")
halu.writeFile("ni.txt","try", function(err) {
  console.log(err);
});