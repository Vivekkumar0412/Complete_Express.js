let fs = require("fs");
let path = require("path");
let http = require("http");
let htmlDoc = path.join(__dirname,"public","index.html");
console.log(htmlDoc);

let dataa = fs.readFileSync(htmlDoc,"utf-8");
http.createServer((req,res)=>{
    res.end(dataa);

}).listen(9000);