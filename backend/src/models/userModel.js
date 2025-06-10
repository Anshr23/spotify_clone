import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    fullName: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String, 
        required: true,
    },
    clerkId: {  //used cause we are using a third party authentication service "clerk" in this case
        type: String,
        required: true,
        unique: true,
    },
}, {timestamps: true }); // createdAt, updatedAt

export const User = mongoose.model("User", userSchema);
