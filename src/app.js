import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes";
import userRoutes from "./routes/userRoutes";
import router from "./routes";
import countryRoutes from "./routes/countryRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/v1/", adminRoutes);
app.use("/api/v1/", userRoutes);

app.use(express.json());

app.use("/api/v1", router);

app.use(express.json());

app.use(express.json());

app.use("/api/v1", router);

app.use("/api/v1", countryRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Know Africa");
});

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

export default app;
