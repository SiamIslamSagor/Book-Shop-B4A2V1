import { Router } from "express";
import { ProductControllers } from "./product.controller";

// create a sub route for product
const router = Router();

// to create a product
router.post("/", ProductControllers.createProduct);

// to get a single product
router.get("/:productId", ProductControllers.getSingleProduct);

// to get all products
router.get("/", ProductControllers.getAllProducts);

// to update a product
router.put("/:productId", ProductControllers.updateProduct);

export const ProductRoutes = router;
