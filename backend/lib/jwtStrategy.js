import { Strategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import UserModel from "../models/userModel.js";
dotenv.config();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET,
};

const strategy = new Strategy(opts, async ({ sub }, done) => {
  let userId;
  try {
    userId = await UserModel.getUserById(sub);
  } catch (err) {
    return done(err);
  }

  if (userId) {
    return done(null, userId);
  }

  return done("not found");
});

export default strategy;
