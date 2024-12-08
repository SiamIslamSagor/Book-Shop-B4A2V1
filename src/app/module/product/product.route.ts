import { Router } from "express";
import { ProductControllers } from "./product.controller";

// create a sub route for product
const router = Router();

router.post("/create-product", ProductControllers.createProduct);

export const ProductRoutes = router;
