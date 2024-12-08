"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
/* ----------- MIDDLEWARE / PARSERS ----------- */
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    // res.send("THE BOOK SHOP SERVER IS RUNNING⚡");
    res.json({
        status: true,
        message: "IS THIS BUG FIXED?",
        serverName: "Book Shop B4A2V1⚡",
    });
});
exports.default = app;
