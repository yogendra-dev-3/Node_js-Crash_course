// mongodb and mongo sandbox routes
app.get("/add-blog",(req,res)=>{
    const blog=new Blog({
        title:"new Blog 2",
        snippet:"ABout my new blog",
        body:"More about my new Blog"
    })

    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
    })
})

// get all blogs
app.get("/all-blogs",(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

// get single blog by id
app.get("/single-blog",(req,res)=>{
    Blog.findById("6757282f6dfb6252558f6dca")
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})