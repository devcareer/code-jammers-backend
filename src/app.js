/* eslint-disable no-useless-concat */
import express from "express";
import passport from "passport";
import cookieSession from "cookie-session";
import cors from "cors";
import dotenv from "dotenv";
import { googleStrategy } from "./database/config/google-passport";
import router from "./routes/index";

import { fbStrategy } from "./database/config/fbpassport";

dotenv.config();
const swaggerUi = require("swagger-ui-express");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: process.env.COOKIE_KEY
}));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
app.use(passport.initialize());
app.use(passport.session());

passport.use(fbStrategy);

app.use(express.json());
app.use(cors());
app.use("/api/v1/", router);

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: process.env.COOKIE_KEY,
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(googleStrategy);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
  (req, res) => {
    if (!req.user.status) {
      res.redirect("/");
    } else {
      res.status(409).send(req.user);
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
