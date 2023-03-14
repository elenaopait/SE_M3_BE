"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
// controllers
const user_controller_1 = require("../controllers/user.controller");
userRouter.post('/register', user_controller_1.register);
exports.default = userRouter;
//# sourceMappingURL=user.js.map