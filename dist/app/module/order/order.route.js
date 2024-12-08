"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
// create a sub route for product
const router = (0, express_1.Router)();
// to create a product
router.post("/", order_controller_1.OrderControllers.createOrder);
// to get a single product
// router.get("/:productId", ProductControllers.getSingleProduct);
// to get all products
// router.get("/", ProductControllers.getAllProducts);
// to update a product
// router.put("/:productId", ProductControllers.updateProduct);
// to delete a product
// router.delete("/:productId", ProductControllers.deleteProduct);
exports.OrderRoutes = router;
