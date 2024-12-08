"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const productSchemaValidation = zod_1.z.object({
    title: zod_1.z.string().min(1, { message: "Title is required" }).trim(),
    author: zod_1.z.string().min(1, "Author is required"),
    price: zod_1.z.number().min(0, "Price must be a positive number"),
    category: zod_1.z.enum(["Fiction", "Science", "SelfDevelopment", "Poetry", "Religious"], { invalid_type_error: "Invalid category name" }),
    description: zod_1.z.string().min(1, "Description is required"),
    quantity: zod_1.z.number().min(0, "Quantity must be a positive number"),
    inStock: zod_1.z.boolean(),
});
exports.default = productSchemaValidation;
