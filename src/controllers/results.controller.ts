import { Request, Response } from "express";
import jwt from "jsonwebtoken";

// models
import Result from "../models/results";

export const register = async (req: Request, res: Response) => {
    const { name, result, unit, person } = req.body;
    const rez = new Result({
        name,
        result,
        unit,
        person,
    });
    await rez.save();
    console.log(rez);

    return res.status(201).json({
        message: "Added results successfully",
    });
};