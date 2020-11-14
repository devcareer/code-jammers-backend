import express from "express";
import passport from "passport";
import cookieSession from "cookie-session";
import cors from "cors";
import dotenv from "dotenv";
import { googleStrategy } from "./database/config/google-passport";
import stateRoutes from "./routes/stateRoutes";
import resetPasswordRoutes from "./routes/resetPasswordRoutes";
import userRoutes from "./routes/userRoute/userRoutes";
import touristCenterRoutes from "./routes/touristCenterRoute/touristCenterRoutes";
import newsletterRoutes from "./routes/newsletterRoute/newsletterRoutes";
import ethnicRoutes from "./routes/ethnicgroup";
import musicRoutes from "./routes/musicRoutes";
import countryRoutes from "./routes/countryRoute/countryRoutes";
import foodRoutes from "./routes/foodRoute/foodRoutes";
import historicalFactsRoutes from "./routes/historicalFactsRoute/historicalFactsRoute";
import commentRoutes from "./routes/commentRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: process.env.COOKIE_KEY,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", countryRoutes);
app.use("/api/v1", ethnicRoutes);
app.use("/api/v1/", userRoutes);
app.use("/api/v1/", stateRoutes);
app.use("/api/v1", touristCenterRoutes);
app.use("/api/v1/", newsletterRoutes);
app.use("/api/v1/", resetPasswordRoutes);
app.use("/api/v1", musicRoutes);
app.use("/api/v1/", foodRoutes);
app.use("/api/v1/", historicalFactsRoutes);
app.use("/api/v1/", commentRoutes);

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
  res.send("Welcome to Know Africa. Our privacy policy can be found here: " + "https://devcareer.github.io/code-jammers-backend/docs/");
});

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

export default app;
