import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 60
    },
    fees: {
        type: Types.Decimal128,
        required: true,
        validate: (value) => value >= 30000
    }
})

const studentModel = model("student", studentSchema)
export default studentModel