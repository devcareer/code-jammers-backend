import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cookieSession from "cookie-session";
import passport from "passport";
import userRoutes from "./routes/userRoutes";
import { fbStrategy } from "./database/config/facebookpassport";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: process.env.COOKIE_KEY

}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(fbStrategy);

app.get("/auth/facebook", passport.authenticate("facebook", fbStrategy, {
  scope: ["profile", "email"]
}));

app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", fbStrategy, { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const port = process.env.PORT || 3000;

app.use("/api/v1/", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Know Africa");
});

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

export default app;
