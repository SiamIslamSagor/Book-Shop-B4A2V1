import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

/* ----------- MIDDLEWARE / PARSERS ----------- */
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  // res.send("THE BOOK SHOP SERVER IS RUNNING⚡");
  res.json({
    status: true,
    message: "YES! YOU ARE RIGHT.",
    serverName: "Book Shop B4A2V1⚡",
  });
});

export default app;
