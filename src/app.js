import express from "express";
import router from "./routes";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Welcome to Know Africa");
});

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

export default app;
