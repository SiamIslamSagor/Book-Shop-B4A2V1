import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";
import { Product } from "../product/product.model";
import { AppError } from "../../utils/utility";

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: [true, "email is required"],
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,}$/.test(value);
        },
        message: "please enter a valid email address",
      },
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "product id is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Quantity must be at least 1"],
    },
    totalPrice: {
      type: Number,
      required: [true, "total price is required"],
      min: [0, "Total price must be a positive number"],
    },
  },
  {
    timestamps: true,
    strict: true,
  },
);

orderSchema.pre("save", async function (next) {
  const productId = this.product;
  const orderQuantity = this.quantity;

  const product = await Product.findById(productId);

  // if requested product is not found
  if (!product) {
    return next(new AppError("Product not found.", 404));
  }

  // max quantity request
  if (product.quantity < orderQuantity) {
    return next(
      new AppError(
        `Insufficient stock. Available: ${product.quantity}, Requested: ${orderQuantity}.`,
        400,
      ),
    );
  }

  // update quantity and inStock

  const updatedProduct = await Product.findOneAndUpdate(
    productId,
    {
      $inc: { quantity: -orderQuantity },
      inStock: product.quantity - orderQuantity > 0,
    },
    { new: true },
  );

  if (!updatedProduct) {
    return next(new AppError("Failed to update product inventory.", 500));
  }

  next();
});

export const Order = model<TOrder>("Order", orderSchema);
