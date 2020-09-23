import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import usersRouter from "./routes/user.route";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Know Africa");
});

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

export default app;
