import{ dbConnect} from "@/lib/dbConnect";
import User from "@/models/User";
import { UserType } from "@/types/type";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  await dbConnect();

  const body = await request.json();

  const { firstName, lastName, email, birthDate, gender, password }: UserType =
    body;

  const findUser = await User.findOne({ email });

  if (findUser) {
    return NextResponse.json(
      {
        error: " Email is already used",
      },
      {
        status: 409,
      }
    );
  }

  const hashedPass = await bcrypt.hash(password, 12);

  const user = new User({
    firstName,
    lastName,
    gender,
    birthDate,
    email,
    password: hashedPass,
  });

  await user.save();
  //   NextResponse.redirect("/login")
  NextResponse.json(user);
}
