import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Title is too small"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      minlength: [3, "Author name is too small"],
      trim: true,
    },
    price: {
      type: Number,
      min: [0, "Price must be a positive number"],
      required: [true, "Price is required"],
    },
    category: {
      type: String,
      enum: {
        values: [
          "Fiction",
          "Science",
          "SelfDevelopment",
          "Poetry",
          "Religious",
        ],
        message: "Invalid category name",
      },
      required: [true, "Category is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [3, "Description is too small"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Quantity must be a getter then 0"],
    },
    inStock: {
      type: Boolean,
      required: [true, "In stock status is required"],
    },
  },
  {
    timestamps: true,
  },
);

export const Product = model<TProduct>("Product", productSchema);
