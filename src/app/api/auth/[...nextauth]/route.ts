import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { UserType } from "@/types/type";
import { mongoClientPromise } from "@/lib/dbConnect";

const  handler = NextAuth({
  adapter:  MongoDBAdapter( mongoClientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "userName", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn(params) {
      const { user, account, profile } = params;

      const { email, password } = user as UserType;

      const foundUser = await User.findOne({ email });
      if (!foundUser) {
        throw new Error("Email not found");
      }

      const passwordMatch = await bcrypt.compare(password, foundUser.password);

      if (!passwordMatch) {
        throw new Error("Incorrect password");
      }

      return true;
    },
    async jwt({token, user}){
      return {...token, ...user}
    },
    async session({session, token}){
      session.user =  token as any
      return session
    }
  },
})

export {handler as GET, handler as POST};
