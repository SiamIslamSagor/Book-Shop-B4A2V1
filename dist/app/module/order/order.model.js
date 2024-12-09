"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const product_model_1 = require("../product/product.model");
const app_error_1 = require("../../utils/app-error");
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
orderSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const productId = this.product;
        const orderQuantity = this.quantity;
        const product = yield product_model_1.Product.findById(productId);
        // if requested product is not found
        if (!product) {
            return next(new app_error_1.AppError("Product not found.", 404));
        }
        // max quantity request
        if (product.quantity < orderQuantity) {
            return next(new app_error_1.AppError(`Insufficient stock. Available: ${product.quantity}, Requested: ${orderQuantity}.`, 400));
        }
        // update quantity and inStock
        const updatedProduct = yield product_model_1.Product.findOneAndUpdate(productId, {
            $inc: { quantity: -orderQuantity },
            inStock: product.quantity - orderQuantity > 0,
        }, { new: true });
        if (!updatedProduct) {
            return next(new app_error_1.AppError("Failed to update product inventory.", 500));
        }
        next();
    });
});
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
