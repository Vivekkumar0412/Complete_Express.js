let fs = require("fs");
let express = require("express");
let app = new express();

let htmldata = fs.readFileSync("f.html","utf-8");
// console.log(htmldata);

app.get((req,res)=>{
    res.send(htmldata);
})
app.listen(5900);