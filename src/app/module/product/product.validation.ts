import { z } from "zod";

const productSchemaValidation = z.object({
  title: z.string().min(1, { message: "Title is required" }).trim(),
  author: z.string().min(1, "Author is required"),
  price: z.number().min(0, "Price must be a positive number"),
  category: z.enum(
    ["Fiction", "Science", "SelfDevelopment", "Poetry", "Religious"],
    { invalid_type_error: "Invalid category name" },
  ),
  description: z.string().min(1, "Description is required"),
  quantity: z.number().min(0, "Quantity must be a positive number"),
  inStock: z.boolean(),
});

export default productSchemaValidation;
