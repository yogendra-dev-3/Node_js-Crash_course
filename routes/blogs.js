const express= require("express")
const Blog=require("../models/blog")
const router=express.Router()
const blogController=require("../controllers/blogController")

const {blog_index,blog_details,blog_create_get,blog_create_post,blog_delete}=blogController
// blog routes
router.get("/",blog_index)

router.post("/",blog_create_post)

router.get("/create",blog_create_get );

router.get("/:id",blog_details)

router.delete("/:blogId",blog_delete)

module.exports=router