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
const connection_1 = require("./db/connection");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
const user_1 = __importDefault(require("./routes/user"));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/user", user_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connection_1.dbConnect)();
        app.listen(3000, () => {
            console.log("Example app listening on port 3000!");
        });
    }
    catch (err) {
        console.log(err);
    }
});
start();
//# sourceMappingURL=index.js.map