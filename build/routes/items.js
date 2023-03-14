"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itemRouter = (0, express_1.Router)();
// controllers
const itemLab_controller_1 = require("../controllers/itemLab.controller");
itemRouter.post('/register', itemLab_controller_1.register);
exports.default = itemRouter;
//# sourceMappingURL=items.js.map