import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import handlebars from "express-handlebars";
import userRoutes from "./routes/userRoutes";
import resetPasswordRoutes from "./routes/resetPasswordRoutes";
import router from "./routes";

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const port = process.env.PORT || 3000;

app.use("/api/v1", userRoutes);
app.use("/api/v1", resetPasswordRoutes);

const path = require("path");

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());

app.use("", router);

app.get("/", (req, res) => {
  res.send("Welcome to Know Africa");
});

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

export default app;
