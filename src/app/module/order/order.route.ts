import { Router } from "express";
import { OrderControllers } from "./order.controller";

// create a sub route for product
const router = Router();

// to create a product
router.post("/", OrderControllers.createOrder);

// to get a single product
// router.get("/:productId", ProductControllers.getSingleProduct);

// to get all products
// router.get("/", ProductControllers.getAllProducts);

// to update a product
// router.put("/:productId", ProductControllers.updateProduct);

// to delete a product
// router.delete("/:productId", ProductControllers.deleteProduct);

export const OrderRoutes = router;
