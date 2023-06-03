import { Date, Document } from "mongoose";

export interface UserType extends Document {
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: string;
  birthDate: Date;
  address?: string;
  pfp?: string;
  bckg?: string;
  tagName?: string;
  email: string;
  password: string;
  created?: Date;
}
