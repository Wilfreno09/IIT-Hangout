import { UserType } from "@/types/type";
import mongoose, { Schema } from "mongoose";

const userSchema: Schema <UserType> = new Schema<UserType>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
  },
  pfp: {
    type: String,
    default: "/img/pfp/default.png",
  },
  bckg: {
    type: String,
    default: "/img/pfp/default.jpg",
  },
  tagName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
