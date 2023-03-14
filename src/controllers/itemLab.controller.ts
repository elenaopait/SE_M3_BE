import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import itemsLaboratory from "../models/itemsLaboratory";

// models
import Item from "../models/itemsLaboratory";

export const register = async (req: Request, res: Response) => {
    const { name, minValue, maxValue, domain, unitMeasurement } = req.body;
    const item = new Item({
        name,
        minValue,
        maxValue,
        domain,
        unitMeasurement
    });
    await item.save();
    console.log(item);

    return res.status(201).json({
        message: "SOlution created successfully",
    });
};