"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const order_route_1 = require("./app/module/order/order.route");
const product_route_1 = require("./app/module/product/product.route");
const app = (0, express_1.default)();
/* ----------- MIDDLEWARE / PARSERS ----------- */
app.use(express_1.default.json());
app.use((0, cors_1.default)());
/* ------------ APPLICATION ROUTES ------------ */
app.use("/api/products", product_route_1.ProductRoutes);
app.use("/api/orders", order_route_1.OrderRoutes);
app.get("/", (req, res) => {
    // res.send("THE BOOK SHOP SERVER IS RUNNING⚡");
    res.json({
        status: true,
        message: "THE BOOK SHOP SERVER IS RUNNING SERIOUSLY⚡",
        serverName: "Book Shop B4A2V1⚡",
    });
});
exports.default = app;
