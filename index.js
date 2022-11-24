let colors = require("colors");
let express = require("express");
let fs = require("fs")
let path = require("path");
let app = new express();


let htmlFile = path.join(__dirname,"public");
app.use(express.static(htmlFile));
app.listen(5000);


// console.log(htmlFile);
// let data = fs.readFileSync(htmlFile,"utf-8");
// console.log(data);

// app.get("",(req,res)=>{
//     res.send(data);
// })
// app.listen(5900);

// app.get("",(req,res)=>{
//     console.log(req.query.name);
//     res.send(`welcome to home page ${ req.query.name}`)
// })
// app.get("/ab",(req,res)=>{
//     res.send("about page hai pagli");
// })
// app.listen(5900);
// console.log("Express js".rainbow)
// let btn= document.getElementById("btn");
// btn.addEventListener("click",()=>{
//     alert("hi")
// })

// app.get("",(req,res)=>{
//     res.send(`<input type="text" placeholder="user name" value = "${req.query.name}"/>
//                 <button id="btn">CLICK </button>
//                 <a href="/ab">Go to about page</a>`);
    // res.write(`<`);
    // res.send();
// })
// app.get("/ab",(req,res)=>{
//     // res.write(JSON.stringify([
//     //     {
//     //         name:"vivek singh",roll:59
//     //     },
//     //     {
//     //         name:"Ved",roll:60
//     //     }
//     // ]))
//     // res.write()
//     res.send(`<a href="/">Go to home page</a>`)
// })
// app.get("/v",(req,res)=>{
//     if(req.query.name == "vivek"){
//         res.send("Hi Mr.Vivek Singh Rajput")
//     }else if(req.query.name == "india" || "india"){
//         res.send("i love INDIA !")   //Bindi India
//     }
//     else{
//         res.send("fake data !")
//     }
// })
// app.listen(5900);
let fs = require("fs");
let express = require("express");
let path = require("path");
let http = require("http");

let htmldoc = path.join(__dirname,"PUBLIC","about.html");
let htmldocc = path.join(__dirname,"PUBLIC");
let data = fs.readFileSync(htmldoc,"utf-8");
http.createServer((req,res)=>{
    res.end(data)
}).listen(7000,"localhost");



// console.log(data);

let app = new express();
app.get("",(req,res)=>{
    res.sendFile(`${htmldocc}/index.html`);
})
app.get("/about",(req,res)=>{
    res.sendFile(htmldoc);
})
app.get("*",(req,res)=>{
    res.sendFile(`${htmldocc}/notfound.html`)
})
app.listen(5000);
// app.use(express.static(htmldocc));
// app.listen(9000);


// app.get("",(req,res)=>{
//     res.sendFile(htmldocc);
    
// })

// app.listen(5900);
