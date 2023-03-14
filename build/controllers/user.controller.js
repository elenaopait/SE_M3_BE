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
const user_1 = __importDefault(require("../models/user"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, email, password, role } = req.body;
    const user = new user_1.default({
        fullName,
        email,
        password,
        role,
    });
    yield user.save();
    console.log(user);
    return res.status(201).json({
        message: "User created successfully",
    });
});
exports.register = register;
//# sourceMappingURL=user.controller.js.map