import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cookieSession from "cookie-session";
import passport from "passport";
import stateRoutes from "./routes/stateRoutes";
import resetPasswordRoutes from "./routes/resetPasswordRoutes";
import userRoutes from "./routes/userRoute/userRoutes";
import touristCenterRoutes from "./routes/touristCenterRoutes";
import newsletterRoutes from "./routes/newsletterRoute/newsletterRoutes";
import countryRoutes from "./routes/countryRoutes";
import ethnicRoutes from "./routes/ethnicgroup";
import musicRoutes from "./routes/musicRoutes";

import { fbStrategy } from "./database/config/fbpassport";

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

app.use(cors());

app.use("/api/v1", countryRoutes);
app.use("/api/v1", ethnicRoutes);
app.use("/api/v1/", userRoutes);
app.use("/api/v1/", stateRoutes);
app.use("/api/v1", touristCenterRoutes);
app.use("/api/v1/", newsletterRoutes);
app.use("/api/v1/", resetPasswordRoutes);
app.use("/api/v1", musicRoutes);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Know Africa");
});

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

export default app;
