import mongoose from "mongoose";
const ContentSchema = mongoose.Schema({
    content: String,
    hidden: String
},
    {
        timestamps: true
    })
export default mongoose.model('Content', ContentSchema)
