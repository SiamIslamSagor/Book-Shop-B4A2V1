"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
// create a sub route for product
const router = (0, express_1.Router)();
// to create a product
router.post("/", product_controller_1.ProductControllers.createProduct);
// to get a single product
router.get("/:productId", product_controller_1.ProductControllers.getSingleProduct);
// to get all products
router.get("/", product_controller_1.ProductControllers.getAllProducts);
// to update a product
router.put("/:productId", product_controller_1.ProductControllers.updateProduct);
exports.ProductRoutes = router;
