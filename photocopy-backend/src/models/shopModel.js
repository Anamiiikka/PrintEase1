import mongoose,{Schema} from 'mongoose'
const shopSchema=mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    services:{              //black and white, color, etc
        type:[String],
        required:true,
    },
    pricing:{
        type:map,
        of:Number,
        required:true,
    },
    ratings:{
        type:Number,
        default:0,
    }
},{timestamps:true}
);
export const Shop=mongoose.model("Shop",shopSchema);