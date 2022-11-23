let colors = require("colors");
let express = require("express");
let app = new express();

app.get("",(req,res)=>{
    res.send("hi")
})
app.get("/ab",(req,res)=>{
    res.send("about page hai pagli");
})
app.listen(5900);
console.log("Express js".rainbow)