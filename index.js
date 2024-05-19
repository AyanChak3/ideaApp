/**
 * Start the server
 */
const express = require('express')
const app = express() //app is the main player through which we will make the server
app.use(express.json()) //convert from JSON to JS Object form
//Stitching the route here
require("./routes/idea.routes")(app)//function execution

app.listen(8000,()=>{
    console.log("App started on the port number ",8000);
})
