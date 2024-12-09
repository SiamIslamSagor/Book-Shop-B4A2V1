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
  res.json({
    status: true,
    message: "THE BOOK SHOP SERVER IS RUNNING SERIOUSLY⚡",
    serverName: "Book Shop B4A2V1⚡",
  });
});

/* --- to handle any get req what not exist? -- */
app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route is not found",
  });
});

/* ----------- GLOBAL ERROR HANDLER ---------- */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((error: any, req: Request, res: Response) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";

  if (error) {
    res.status(statusCode).json({
      success: false,
      message,
      error: statusCode === 500 ? undefined : error,
    });
  }
});

export default app;
