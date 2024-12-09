"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
// create a sub route for product
const router = (0, express_1.Router)();
// to create a product
router.post("/", order_controller_1.OrderControllers.createOrder);
// to get total revenue
router.get("/revenue", order_controller_1.OrderControllers.getRevenue);
exports.OrderRoutes = router;
