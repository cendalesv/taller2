import { Schema,model } from "mongoose";

let collection = "users"
let schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    isOnline: { type: Boolean, default: false }
},{
    timestamps:true
})

let User = model(collection,schema)
export default User