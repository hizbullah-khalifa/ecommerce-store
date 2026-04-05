import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        cartData: {
            type: Object,
            default: {}
        },

    }, 
    {minimize: false ,timestamps: true}
)
// so we have assigned empty object to cartData but when the model is created mongoDB does not store empty object, so that why we are using minimize: true so that it stores the empty object


export const userModel = mongoose.model.user || mongoose.model("user", userSchema)