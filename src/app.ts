import express from "express";
import { connectDB } from "./config/db";
import userRouter from "./router/user.router";
import blogRouter from "./router/blog.router";

const app = express();
app.use(express.json());
connectDB();
app.use("/user", userRouter);
app.use("/blog", blogRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
