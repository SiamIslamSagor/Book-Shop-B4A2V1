import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

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

export const Order = model<TOrder>("Order", orderSchema);
