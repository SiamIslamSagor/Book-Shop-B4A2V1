"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
// create a sub route for product
const router = (0, express_1.Router)();
router.post("/create-product", product_controller_1.ProductControllers.createProduct);
exports.ProductRoutes = router;
