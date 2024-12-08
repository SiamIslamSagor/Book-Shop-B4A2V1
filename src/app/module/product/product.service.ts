import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductsFromDB = async () => {
  // TODO: have to implement status delete functionality
  const result = await Product.find();
  throw new Error("hehehe");

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
};
