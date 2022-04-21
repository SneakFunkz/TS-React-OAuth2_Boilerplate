import mongoose from "mongoose";

const user = new mongoose.Schema({
  googleId: {
    required: true,
    type: String,
  },
  firstName: {
    required: true,
    type: String,
  },
  familyName: {
    required: false,
    type: String,
  },
  email: {
    required: false,
    type: String,
  },
});

export default mongoose.model("User", user);
