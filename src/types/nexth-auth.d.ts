import { ObjectId } from "mongoose";
import NextAuth from "next-auth";


declare module "next-auth" {
  interface Session {
    user: Omit<UserType, "password"> & {
      _id: ObjectId
      accessToken: string
    };
  }
}