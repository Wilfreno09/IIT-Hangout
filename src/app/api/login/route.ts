import {dbConnect} from "@/lib/dbConnect";
import { signJwtAccessToken } from "@/lib/jwt";
import User from "@/models/User";
import { UserType } from "@/types/type";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password }: UserType = await request.json();

  await dbConnect();

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const { password, ...otherDetails } = user;
    const accesToken = signJwtAccessToken(otherDetails);
    const result = {
      ...otherDetails,
      accesToken,
    };
    return NextResponse.json(result);
  } else return NextResponse.json(null);
}
