import { Schema,model } from "mongoose";

let collection = "records"
let schema = new Schema({
    date: { type: Date, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }

},{
    timestamps:true
})

let Record = model(collection,schema)
export default Record