"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
// models
const itemsLaboratory_1 = __importDefault(require("../models/itemsLaboratory"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, minValue, maxValue, domain, unitMeasurement } = req.body;
    const item = new itemsLaboratory_1.default({
        name,
        minValue,
        maxValue,
        domain,
        unitMeasurement
    });
    yield item.save();
    console.log(item);
    return res.status(201).json({
        message: "SOlution created successfully",
    });
});
exports.register = register;
//# sourceMappingURL=itemLab.controller.js.map