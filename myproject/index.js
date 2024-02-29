const { error } = require("console");
const express = require("express")
const app = express();
const path = require("path")
let port = 8800
app.use(express.static(path.join(__dirname, "public/css")))
app.use(express.static(path.join(__dirname, "public/js")))
console.log(app);
app.set("view engine", "ejs")

app.listen(port,() =>{
  console.log(`App is listerning ${port}`)
})
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

//  app.use((req,res)=>{
//  console.log(req)
//  console.log("request recievd")
//  res.send("this is local host")
//  })
// app.get("/",(req,res)=>{
//     res.send("local")
// })
// app.get("/search",(req,res)=>{
//     res.send("search")
// })
app.get("/",(req,res)=>{
  // console.log("Home.ejs")
  res.render("Home.ejs")
}
)
// app.get("/ig/:username",(req,res)=>{
//   const followers = ["adam", "yash", "shaddha", "kappor"]
//   let {username} = req.params
//   console.log(followers)
//   res.render("instagram.ejs",{username,followers})
// })
app.get("/ig/:username",(req,res)=>{
  let {username} = req.params
 const instaData = require("./data.json")

const data = instaData[username]
console.log(data)
if(data){
  res.render("instagram.ejs",{data})

 }else{
  res.render("error.ejs")
 }

 })

// app.get("/",(req,res)=>{
//  res.render("Home.ejs")
// })
app.get("/hi",(req,res)=>{
    res.send("gou")
 })
// app.get("*",(req,res)=>{
//     res.send("not exist")
// })
// app.post("*",(req,res)=>{
//     res.send("offset")
// })
// app.get("/:username/:id",(req,res)=>{
// let{username,id} = req.params
// let information = `<h1>Welcome our website @ ${username} </h1`
// res.send(information);
// })

