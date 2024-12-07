const express= require("express")

// express app
const app=express()

// listen for requests
app.listen(7000,()=>{
    console.log("app is listening on port 3000")
})

// routes
app.get("/",(req,res)=>{
    // res.send("<p>hello </p>")
    res.sendFile("./views/index.html",{root:__dirname})
})

app.get("/about",(req,res)=>{
    // res.send("<p>hello </p>")
    res.sendFile("./views/about.html",{root:__dirname})
})

// redirects
app.get("/about-us",(req,res)=>{
    res.redirect("/about")
})

// 404 page
app.use((req,res)=>{
    res.status(404).sendFile("./views/404.html",{root:__dirname})
})