const express = require("express");
const conn = require("./connection/conn");
const Regroute = require("./Routes/UserReg");
const login = require("./Routes/Bycryptlogin");
const postRoutes=require("./Routes/UserPosts")


const secret = "RESTAPI";
const jwt = require('jsonwebtoken');
conn();
const app = express();

app.use("/posts",(req,res,next)=>{
    const token = req.headers.authorization?.split("test ")[1]

    if(token){
        jwt.verify(token,secret,function(err,decoded){
            if(err){
                return res.status(403).json({
                    status:"Failed",
                    message:"Token is not valid"
                })
            }
            req.user=decoded.data
            next()
        })
    }else{
        res.status(403).json({
            status:"Failed",
            message:"User is not Authenticated"
        })
    }
})
app.use("/", Regroute);
app.use("/", login);
app.use("/", postRoutes);

app.get("*", (req, res) => {
  res.status(404).send("API IS NOT FOUND");
});

app.listen(3000, () =>
  console.log("Our server is up and running at port 3000")
);
