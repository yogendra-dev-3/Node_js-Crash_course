const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes=require("./routes/blogs")
// connect to mongodb
const dbURI =
  "mongodb+srv://Yogendra:Yogendra2002@cluster0.znhey.mongodb.net/node_couse?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbURI)
  .then(() => {
    // listen for requests
    app.listen(7000, () => {
      console.log("app is listening on port 7000");
      console.log("connected to the db");
    });
  })
  .catch((err) => {
    console.log(err);
  });
// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// logs middleware
// app.use((req,res,next)=>{
//     console.log("new request made")
//     console.log("Host: ",req.hostname);
//     console.log("Path: ",req.path);
//     console.log("Method: ",req.method);
//     next()
// })

// middleware and static files
app.use(express.static("public"));

// accepting form data
app.use(express.urlencoded({extended:true}))
// 3rd party middleware
app.use(morgan("tiny"));

// routes
app.get("/", (req, res) => {
  // res.send("<p>hello </p>")
  // res.sendFile("./views/index.html",{root:__dirname})
//   const blogs = [
//     {
//       title: "Node",
//       snippet:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, porro.",
//     },
//     {
//       title: "Express",
//       snippet:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, porro.",
//     },
//     {
//       title: "Mongo",
//       snippet:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, porro.",
//     },
//   ];
//   res.render("index", { title: "Home", blogs });
res.redirect("/blogs")
});

// log middleware
// app.use((req,res,next)=>{
//     console.log("in the next middleware");
//     next();
// })

app.get("/about", (req, res) => {
  // res.send("<p>hello </p>")
  // res.sendFile("./views/about.html",{root:__dirname})
  res.render("about", { title: "About" });
});

app.use("/blogs",blogRoutes)
// 404 page
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html",{root:__dirname})
  res.status(404).render("404", { title: "404" });
});
