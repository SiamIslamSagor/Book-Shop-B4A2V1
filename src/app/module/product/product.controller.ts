import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const result = await ProductServices.createProductIntoDB(productData);

    res.status(201).json({
      message: "Book created successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Validation failed",
      success: false,
      error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();

    res.status(201).json({
      message: "Book retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      success: false,
      error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
};
