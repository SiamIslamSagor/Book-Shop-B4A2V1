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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.statusCode || 500).json({
      message: "Something went wrong!!",
      status: false,
      error,
    });
  }
};

const getRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getRevenueFromDB();

    res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      status: false,
      error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getRevenue,
};
