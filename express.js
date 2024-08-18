const express = require('express'); 

const path = require("path");


const app = express();
app.listen(3000, () => { 
    console.log("Server running on port 300");
});
app.get("/harsh", (req,res) => { 
    // app.get to handle GET requests
    // req - http request, res - desired response
    res.send("ha ha"); // send Hello World to this route
});
app.use(express.static(path.join(nodejs, "./public")));
