import mongoose,{Schema} from 'mongoose';
const orderSchema=mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    shop:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Shop",
        required:true,
    },
    preferences:{
        paperSize:{
            type:String,
            required:true,
        },
        color:{
            type:String,
            required:true,
        },
        copies:{
            type:Number,
            required:true,
        }
    },
    totalprice:{
        type:Number,
        required:true,

    },
    status:{
        type:String,
        enum:["pending","completed","cancelled"],
        default:"pending",
    },
    deliveryMethod:{
        type:String,
        enum:["pickup","homeDelivery"],
        required:true,
    }
},{TimeRanges:true});
export const Order=mongoose.model("Ordre",orderSchema);