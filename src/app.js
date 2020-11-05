import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import stateRoutes from "./routes/stateRoutes";
import resetPasswordRoutes from "./routes/resetPasswordRoutes";
import userRoutes from "./routes/userRoute/userRoutes";
import touristCenterRoutes from "./routes/touristCenterRoute/touristCenterRoutes";
import newsletterRoutes from "./routes/newsletterRoute/newsletterRoutes";
import ethnicRoutes from "./routes/ethnicgroup";
import countryRoutes from "./routes/countryRoute/countryRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", countryRoutes);
app.use("/api/v1", ethnicRoutes);
app.use("/api/v1/", userRoutes);
app.use("/api/v1/", stateRoutes);
app.use("/api/v1", touristCenterRoutes);
app.use("/api/v1/", newsletterRoutes);
app.use("/api/v1/", resetPasswordRoutes);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Know Africa");
});

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

export default app;
