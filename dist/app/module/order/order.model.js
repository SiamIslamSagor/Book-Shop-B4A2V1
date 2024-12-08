"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
    strict: true,
});
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
