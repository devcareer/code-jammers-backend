/* eslint-disable no-useless-concat */
import express from "express";
import passport from "passport";
import cookieSession from "cookie-session";
import cors from "cors";
import dotenv from "dotenv";
import { googleStrategySignUp } from "./database/config/google-passport-signup";
import { googleStrategySignIn } from "./database/config/googlePassport-signin";

import router from "./routes/index";

dotenv.config();

const swaggerUi = require("swagger-ui-express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/api/v1/", router);

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: process.env.COOKIE_KEY,
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use("googleSignIn", googleStrategySignIn);
passport.use("googleSignUp", googleStrategySignUp);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get(
  "/auth/google/signin",
  passport.authenticate("googleSignIn", {
    scope: ["profile", "email"],
  }),
  (req, res) => {
    if (!req.user.error) {
      res.status(200).json(req.user);
    } else {
      res.status(404).json(req.user);
    }
  }
);

app.get(
  "/auth/google/signup",
  passport.authenticate("googleSignUp", {
    scope: ["profile", "email"],
  }),
  (req, res) => {
    if (!req.user.error) {
      res.redirect("/");
    } else {
      res.status(409).json(req.user);
    }
  }
);

app.get("/", (req, res) => {
  res.send("Welcome to Know Africa. Our privacy policy can be found here: https://devcareer.github.io/code-jammers-backend/docs/");
});

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

export default app;
