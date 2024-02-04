

import mongoose, { Schema } from "mongoose";
const todoSchema  = new Schema({
      text:{
                        type:String,
                        require:true
                  }
   
})        
export default mongoose.model("ToDo",todoSchema)