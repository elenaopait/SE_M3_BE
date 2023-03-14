import { Request, Response } from "express";
import jwt from "jsonwebtoken";

// models
import User from "../models/user";

export const register = async (req: Request, res: Response) => {
    const { fullName, email, password, role } = req.body;
    const user = new User({
        fullName,
        email,
        password,
        role,
    });
    await user.save();
    console.log(user);

    return res.status(201).json({
        message: "User created successfully",
    });
};