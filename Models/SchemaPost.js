const mongoose=require("mongoose")
const Schema=mongoose.Schema

const ObjId=Schema.ObjectId

const PostSchema=new Schema({
    title:{type:String,require:true},
    body:{type:String,require:true},
    image: {
        type: String,
        match: /^(.*)(\.jpg|\.jpeg)$/i,
        required: true
      },
    user:{type:ObjId,ref:"assignment"}
})

const Postmodel=mongoose.model("Post",PostSchema)

module.exports=Postmodel