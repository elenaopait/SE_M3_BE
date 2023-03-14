import mongoose from "mongoose";
export interface IItemLab{
    name: string;
    minValue: number;
    maxValue: number;
    domain: string;
    unitMeasurement: string;
}
export interface IItem extends IItemLab, mongoose.Document { }
const itemLabSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    minValue:{
        type: Number,
        required:true,
    },
    maxValue:{
        type: Number,
        required:true,
    },
    domain:{
        type:String,
        required: true,
    },
    unitMeasurement:{
        type:String,
        required: true,
    }

})

export default mongoose.model<IItem>("Item",itemLabSchema);