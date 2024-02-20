"use server";
import { connectToDataBase } from "@/lib/mongoose";
import User from "@/database/user.model";
export async function getUserById(params: any) {
  try {
    connectToDataBase();
    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log(error);
  }
}
