import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/userRoute/userRoutes";
import newsletterRoutes from "./routes/newsletterRoute/newsletterRoutes";

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const port = process.env.PORT || 3000;

app.use("/api/v1/", userRoutes);
app.use("/api/v1/", newsletterRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Know Africa");
});

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

export default app;
