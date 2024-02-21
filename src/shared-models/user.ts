import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IUser extends Document {
    email: string,
    username: string,
    image: string, 
    id: string,
    name?: string,
    provider?: string,
}

const userSchema = new Schema({
    email: {
        type: String,
        unique: true, 
        required: [true, "Email is required"]
    },
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    image: {
        type: String,
    },
    id: {
        type: String,
    },
    name: {
        type: String,
    },

    
    provider: {
        type: String,
    }
})

const User = models.User || model("User", userSchema);
export default User;
