import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import User from "./Models/User";
const GoogleStrategy = require("passport-google-oauth20").Strategy;

dotenv.config();

const app = express();

mongoose.connect(
  `mongodb+srv://reluxoAdmin:K5rdCKaENTuiIDoZ@reluxocluster.bztnu.mongodb.net/reluxoDB?retryWrites=true&w=majority`,
  {},
  () => {
    console.log("Connected to mongoose successfully");
  }
);

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.set("trust proxy", 1);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    // cookie: {
    //   sameSite: "none",
    //   secure: true,
    //   maxAge: 1000 * 60 * 60 * 24 * 7, // One Week
    // },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user: any, done: any) => {
  return done(null, user._id);
});

passport.deserializeUser((id: any, done: any) => {
  User.findById(id, (err: Error, doc: any) => {
    return done(null, doc);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "670638736977-pduon09872j6b7aobo85r0ecuq75dhlg.apps.googleusercontent.com",
      clientSecret: `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`,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
      // state: true,
    },
    async (accessToken: any, refreshToken: any, profile: any, cb: any) => {
      // Called on Successful Authentications
      // Insert into Database

      User.findOne({ googleId: profile.id }, async (err: any, doc: any) => {
        if (err) {
          return cb(err, null);
        }

        if (!doc) {
          // Create one
          const newUser = new User({
            googleId: profile.id,
            username: profile.name.givenName,
            email: profile.emails[0].value,
          });
          await User.create(newUser);
          cb(null, newUser);
        }
        cb(null, doc);
      });
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login",
    failureMessage: true,
  }),
  function (req, res) {
    res.redirect("http://localhost:3000");
  }
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/auth/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send("done");
  }
});

app.get("/getuser", (req, res) => {
  // Has all values of the serisalised USER
  res.send(req.user);
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
