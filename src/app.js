import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import countryRoutes from "./routes/countryRoutes";
import cultureRoutes from "./routes/cultureRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/v1", countryRoutes);
app.use("/api/v1", cultureRoutes);
app.use("/api/v1/", userRoutes);

app.use(express.json());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Know Africa");
});

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

export default app;
