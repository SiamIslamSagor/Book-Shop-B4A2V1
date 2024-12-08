import cors from "cors";
import express, { Application, Request, Response } from "express";
import { OrderRoutes } from "./app/module/order/order.route";
import { ProductRoutes } from "./app/module/product/product.route";

const app: Application = express();

/* ----------- MIDDLEWARE / PARSERS ----------- */
app.use(express.json());
app.use(cors());

/* ------------ APPLICATION ROUTES ------------ */
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  // res.send("THE BOOK SHOP SERVER IS RUNNING⚡");
  res.json({
    status: true,
    message: "THE BOOK SHOP SERVER IS RUNNING SERIOUSLY⚡",
    serverName: "Book Shop B4A2V1⚡",
  });
});

export default app;
