import { Router } from "express";
import { OrderControllers } from "./order.controller";

// create a sub route for product
const router = Router();

// to create a product
router.post("/", OrderControllers.createOrder);

// to get total revenue
router.get("/revenue", OrderControllers.getRevenue);

export const OrderRoutes = router;
