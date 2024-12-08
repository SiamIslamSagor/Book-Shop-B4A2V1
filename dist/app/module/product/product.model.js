"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
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
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
    strict: true,
});
productSchema.pre("find", function (next) {
    this.find({ isDeleted: { $ne: true }, quantity: { $gte: 1 } });
    next();
});
productSchema.pre("findOne", function (next) {
    this.find({ isDeleted: { $ne: true }, quantity: { $gte: 1 } });
    next();
});
exports.Product = (0, mongoose_1.model)("Product", productSchema);
