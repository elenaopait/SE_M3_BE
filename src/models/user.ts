import mongoose from "mongoose";
import bcrpyt from "bcryptjs";

export interface IUser {
    fullName: string;
    email: string;
    password: string;
    role: string;
}

export interface IUserModel extends IUser, mongoose.Document { }

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "patient", "doctor", "nurse"],
        default: "patient",
    },
});

userSchema.pre("save", async function (next) {
    const user = this;
    const hash = await bcrpyt.hash(user.password, 10);
    user.password = hash;
    next();
});

userSchema.methods.comparePassword = async function (password: string) {
    const user = this;
    return bcrpyt.compare(password, user.password);
};

export default mongoose.model<IUserModel>("User", userSchema);
