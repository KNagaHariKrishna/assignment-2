const express = require("express");
const bodyParser = require('body-parser');

const Post = require("../Models/SchemaPost")

const router = express.Router();

router.use(bodyParser.json());

router.post("/posts",async(req,res)=>{
    try{
        const post=await Post.create({
            title:req.body.title,
            body:req.body.body,
            image:req.body.image,
            user:req.user
        })
        res.json({
            status:"Success",
            post
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})

router.get("/posts", async (req, res) => {
    try{
        const post = await Post.find();
        res.json({
            status: "Success",
            post
        })

    }catch(e){
        return res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});
module.exports = router;