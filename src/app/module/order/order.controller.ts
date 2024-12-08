import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const result = await OrderServices.createOrderIntoDB(orderData);

    res.status(201).json({
      message: "Order created successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Validation failed",
      status: false,
      error,
    });
  }
};

export const OrderControllers = {
  createOrder,
};
