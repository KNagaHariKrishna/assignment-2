const express = require("express");
const Reguser = require("../Models/SchemaReg");
const bodyParser = require("body-parser");

const router = express.Router();

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

//parse application/json

router.use(bodyParser.json());

//POST Creating data in database

// router.post("/", async (req, res) => {
//     console.log(req.body);
//     try{
//         const user =await Reguser.create(req.body)
//         res.status(201).json({
//             status:"Success",
//             user
//         })
//     }
//     catch(e) {
//         res.status(500).json({
//             status: "Failed",
//             message: e.message
//         })
//     }
// });

router.get("/",async (req,res)=>{

    try{
        const users=await Reguser.find()

        res.status(200).json({
            status: "Success",
            users
        })
    }catch(e){
        res.status(500).json({
            status:"Failed",
            message:e.message
        })
    }
})

router.get("/:postId", async (req, res) => {
    // Write the ,code to fetch the data
    try{
        const user = await Reguser.find({_id : req.params.postId});
        res.status(200).json({
            status: "Success",
            user
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});

router.put("/:postId", async (req, res) => {
    // Write the ,code to fetch the data
    try{
        await Reguser.updateOne({_id : req.params.postId}, req.body);
        const user =  await Reguser.findOne({_id : req.params.postId});
        res.status(200).json({
            status: "Success",
            user
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});

router.delete("/:postId", async (req, res) => {
    // Write the ,code to fetch the data
    try{
        const user = await Reguser.deleteOne({_id : req.params.postId});
        res.status(200).json({
            status: "Success",
            user
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});


module.exports = router;