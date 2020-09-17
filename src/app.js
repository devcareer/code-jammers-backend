import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import cookieSession from "cookie-session";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import { googleStrategy } from "./database/config/passport"
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: process.env.COOKIE_KEY

}))
app.use(passport.initialize());
app.use(passport.session())

const port = process.env.PORT || 3000;

app.use("/api/v1/", userRoutes);

// Google authentication
passport.use(googleStrategy)

passport.serializeUser((user, cb) => {
  cb(null, user)
})
passport.deserializeUser((user, cb) => {
  cb(null, user)
})

app.get("/auth/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}))

app.get("/auth/google/callback", passport.authenticate("google"), (req,res) => {
  res.send(req.user);
})

app.get("/", (req, res) => {
  res.send("Welcome to Know Africa");
});

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

export default app;